import type { APIRoute } from "astro";

const US_PHONE = /^(?:1)?([2-9]\d{2})([2-9]\d{2})(\d{4})$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const reportingFallback = "reporting_ashburn-va-dentist@100marketers.com";
const mailgunDomainFallback = "100marketers.com";
const fromFallback = "My Ashburn Dentist <noreply@100marketers.com>";

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);

function formatPhone(value: string) {
  const match = value.replace(/\D/g, "").match(US_PHONE);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : null;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const payload = await request.json().catch(() => null) as Record<string, unknown> | null;
  const name = String(payload?.Name ?? "").trim();
  const email = String(payload?.Email ?? "").trim();
  const phone = formatPhone(String(payload?.Phone ?? ""));
  const procedure = String(payload?.Procedure ?? "Not selected").trim();
  const message = String(payload?.Message ?? "").trim();
  const a2p = payload?.A2P === "on" || payload?.A2P === true;
  const pageUrl = String(payload?.["Page URL"] ?? request.headers.get("referer") ?? "").trim();

  if (name.length < 2 || !phone || !EMAIL.test(email)) return new Response(JSON.stringify({ error: "Please provide a name, valid U.S. phone number, and email address." }), { status: 400, headers: { "Content-Type": "application/json" } });

  const env = locals.runtime.env;
  const apiKey = env.MAILGUN_API_KEY;
  if (!apiKey) return new Response(JSON.stringify({ error: "Email delivery is not configured." }), { status: 503, headers: { "Content-Type": "application/json" } });

  const domain = env.MAILGUN_DOMAIN || mailgunDomainFallback;
  const from = env.MAILGUN_FROM || fromFallback;
  const reportingEmail = env.REPORTING_EMAIL || reportingFallback;
  const publicPhone = "(571) 248-5413";
  const patientHtml = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;background:#e5e5e5;padding:24px"><tr><td align="center"><table role="presentation" width="580" cellpadding="24" cellspacing="0" style="background:#fff;border-bottom:10px solid #54caf2"><tr><td><p style="text-transform:uppercase;color:#54caf2;font-weight:bold">Confirmation of Your Appointment Request With My Ashburn Dentist</p><p>Thank you for visiting My Ashburn Dentist. We are happy that you are interested in completing a Book Consultation with our practice. One of our staff members will be in touch with you shortly to make an appointment at a convenient time for you.</p><p>If you wish to reach out by phone, please call <a href="tel:+15712485413">${publicPhone}</a>.</p></td></tr></table></td></tr></table>`;
  const adminHtml = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;background:#e5e5e5;padding:24px"><tr><td align="center"><table role="presentation" width="588" cellpadding="24" cellspacing="0" style="background:#fff"><tr><td><h2 style="color:#54caf2">NEW PATIENT LEAD—APPOINTMENT REQUEST</h2><p>A new patient lead has submitted an appointment request.</p><table cellpadding="7" cellspacing="0" style="color:#555"><tr><td>Name:</td><th align="left">${escapeHtml(name)}</th></tr><tr><td>Phone:</td><th align="left"><a href="tel:+1${phone.replace(/\D/g, "")}">${escapeHtml(phone)}</a></th></tr><tr><td>Email:</td><th align="left">${escapeHtml(email)}</th></tr><tr><td>A2P CONSENT:</td><th align="left">${a2p ? "Yes" : "No"}</th></tr><tr><td>Procedure:</td><th align="left">${escapeHtml(procedure)}</th></tr><tr><td>Message:</td><th align="left">${escapeHtml(message || "Not provided")}</th></tr><tr><td>Page:</td><th align="left">${escapeHtml(pageUrl || "Not provided")}</th></tr></table></td></tr></table></td></tr></table>`;
  const mailgun = async (to: string, subject: string, html: string) => {
    const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, { method: "POST", headers: { Authorization: `Basic ${btoa(`api:${apiKey}`)}`, "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ from, to, subject, html }).toString() });
    // Mailgun's body carries the real reason (bad key, unverified domain, wrong region). Surface it in the Cloudflare logs.
    if (!response.ok) console.error(`Mailgun ${response.status} for domain "${domain}" -> ${to}: ${(await response.text().catch(() => "")).slice(0, 500)}`);
    return response;
  };
  const [patient, admin] = await Promise.all([mailgun(email, "Confirmation of Your Appointment Request With My Ashburn Dentist", patientHtml), mailgun(reportingEmail, "Get on the Horn! A New Patient Wants an Appointment", adminHtml)]);
  if (!patient.ok || !admin.ok) return new Response(JSON.stringify({ error: "Email delivery failed.", detail: `Mailgun rejected the request (patient ${patient.status}, reporting ${admin.status}) on domain "${domain}".` }), { status: 502, headers: { "Content-Type": "application/json" } });
  return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
};
