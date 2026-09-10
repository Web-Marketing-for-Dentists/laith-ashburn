globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, o as renderSlot, p as renderHead, u as unescapeHTML, l as defineScriptVars } from './astro/server_CpvsXh_J.mjs';
/* empty css                                       */

const site = {
  name: "My Ashburn Dentist",
  title: "Dental Implants | My Ashburn Dentist",
  description: "Dental implant consultations and general dentistry in Ashburn, Virginia.",
  url: "https://offer.dentist-in-ashburn.com",
  phoneDisplay: "(571) 248-5413",
  phoneHref: "tel:+15712485413",
  address: "20925 Professional Plaza, Suite 330, Ashburn, VA 20147"
};
const procedures = [
  { slug: "dental-implants", name: "Dental Implants", price: "$2,999", description: "A considered path to restoring a missing tooth with an implant, abutment, and crown." },
  { slug: "dental-crowns", name: "Dental Crowns", price: "$799", description: "Protect and restore a worn, damaged, or weakened tooth with a carefully made crown." },
  { slug: "wisdom-tooth-extractions", name: "Wisdom Tooth Extractions", price: "$299", description: "Clear guidance and gentle care for wisdom teeth that need attention." },
  { slug: "root-canal-treatment", name: "Root Canal Treatment", price: "$699", description: "Relieve pain and preserve a natural tooth with focused endodontic treatment." },
  { slug: "general-dentistry", name: "General Dentistry", price: "", description: "Preventive and restorative care built around your comfort and goals." }
];
const procedureOptions = [
  "Dental Implants",
  "Dental Crowns",
  "Wisdom Tooth Extractions",
  "Root Canal Treatment",
  "General Dentistry",
  "Second Opinion",
  "Other"
];
const resolveProcedure = (value) => {
  const normalized = value?.trim().toLowerCase() ?? "";
  const aliases = {
    "single dental implant": "Dental Implants",
    implants: "Dental Implants",
    crowns: "Dental Crowns",
    "root canal": "Root Canal Treatment",
    "wisdom tooth extraction": "Wisdom Tooth Extractions"
  };
  return procedureOptions.includes(value) ? value : aliases[normalized] ?? "Dental Implants";
};

const $$Astro$1 = createAstro("https://offer.dentist-in-ashburn.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="shell header__inner" data-astro-cid-3ef6ksr2> <a class="header__brand" href="/"${addAttribute(`${site.name} home`, "aria-label")} data-astro-cid-3ef6ksr2> <img src="/assets/images/logo.svg"${addAttribute(site.name, "alt")} width="220" height="56" data-astro-cid-3ef6ksr2> </a> <nav class="header__nav" aria-label="Primary navigation" data-astro-cid-3ef6ksr2> <a${addAttribute({ active: currentPath === "/" }, "class:list")} href="/" data-astro-cid-3ef6ksr2>Dental Implants</a> <a${addAttribute({ active: currentPath.startsWith("/general") }, "class:list")} href="/general" data-astro-cid-3ef6ksr2>General</a> <a href="/root-canal" data-astro-cid-3ef6ksr2>Root Canal</a> <a href="/meet-your-dentist" data-astro-cid-3ef6ksr2>Dr. Rusznak</a> <a href="/patient-results" data-astro-cid-3ef6ksr2>Patient Results</a> </nav> <a class="button button--outline button--nav" data-phone-link${addAttribute(site.phoneHref, "href")}${addAttribute(`Call ${site.name} at ${site.phoneDisplay}`, "aria-label")} data-astro-cid-3ef6ksr2> <span aria-hidden="true" data-astro-cid-3ef6ksr2>☎</span><span class="header__call-label" data-astro-cid-3ef6ksr2>Call Us: </span><span data-phone-display data-astro-cid-3ef6ksr2>${site.phoneDisplay}</span> </a> </div> </header> `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="shell footer__grid" data-astro-cid-sz7xmlte> <section data-astro-cid-sz7xmlte> <img class="footer__logo" src="/assets/images/logo.svg"${addAttribute(site.name, "alt")} width="220" height="56" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Clear information, real treatment options, and a conversation about the next step for your smile.</p> </section> <section data-astro-cid-sz7xmlte> <p class="eyebrow" data-astro-cid-sz7xmlte>Visit</p> <p data-astro-cid-sz7xmlte>${site.address}</p> <a data-phone-link${addAttribute(site.phoneHref, "href")} data-astro-cid-sz7xmlte><span data-phone-display data-astro-cid-sz7xmlte>${site.phoneDisplay}</span></a> </section> <section data-astro-cid-sz7xmlte> <p class="eyebrow" data-astro-cid-sz7xmlte>Explore</p> <a href="/appointment-request" data-astro-cid-sz7xmlte>Request an appointment</a> <a href="/disclaimer" data-astro-cid-sz7xmlte>Disclaimer</a> <a href="/privacy-policy" data-astro-cid-sz7xmlte>Privacy policy</a> </section> </div> <div class="shell footer__bottom" data-astro-cid-sz7xmlte>© ${(/* @__PURE__ */ new Date()).getFullYear()} ${site.name}. All rights reserved.</div> </footer> `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://offer.dentist-in-ashburn.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = site.title, description = site.description, noIndex = false } = Astro2.props;
  const ga4 = "G-G02B9W4PGM";
  const whatConvertsAccount = "129138";
  const whatConvertsSrc = `https://s.ksrndkehqnwntyxlhgto.com/${whatConvertsAccount}.js`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#062b43"><meta name="description"', ">", '<link rel="icon" href="/assets/images/logo.svg" type="image/svg+xml"><link rel="preload" href="/assets/fonts/Tiempos-Headline-Semibold.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/DM-Sans-Regular.ttf" as="font" type="font/ttf" crossorigin><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:image"', '><link rel="canonical"', "><title>", "</title><script>\n      window.$wc_load = window.$wc_load || ((value) => JSON.parse(JSON.stringify(value)));\n      window.$wc_leads = window.$wc_leads || { doc: { url: window.$wc_load(document.URL), ref: window.$wc_load(document.referrer), search: window.$wc_load(location.search), hash: window.$wc_load(location.hash) } };\n    </script><script", "></script><script async", "></script><script>(function(){", `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', ga4);
    })();</script><script>
      (() => {
        const canonical = "5712485413";
        const storageKey = "whatconverts-active-phone";
        const digits = (value) => { const valueDigits = String(value || "").replace(/\\D/g, ""); return valueDigits.length === 11 && valueDigits.startsWith("1") ? valueDigits.slice(1) : valueDigits; };
        const format = (value) => /^[2-9]\\d{2}[2-9]\\d{2}\\d{4}$/.test(value) ? \`(\${value.slice(0,3)}) \${value.slice(3,6)}-\${value.slice(6)}\` : null;
        const readPhone = (value) => { const match = String(value || "").match(/(?:\\+?1[\\s.-]?)?\\(?[2-9]\\d{2}\\)?[\\s.-]*[2-9]\\d{2}[\\s.-]*\\d{4}/); return match ? format(digits(match[0])) : null; };
        const active = () => {
          for (const link of document.querySelectorAll('a[href^="tel:"]')) { const value = readPhone(link.textContent); if (value && digits(value) !== canonical) { try { sessionStorage.setItem(storageKey, value); } catch {} return value; } }
          try { return format(digits(sessionStorage.getItem(storageKey) || "")) || "(571) 248-5413"; } catch { return "(571) 248-5413"; }
        };
        const sync = () => {
          const value = active(); const activeDigits = digits(value);
          document.querySelectorAll('[data-phone-link], [data-phone-sync]').forEach((node) => {
            if (node.tagName === 'A') node.setAttribute('href', \`tel:+1\${activeDigits}\`);
            node.querySelectorAll?.('[data-phone-display]').forEach((display) => { display.textContent = value; });
            if (node.matches?.('[data-phone-display]')) node.textContent = value;
          });
        };
        document.addEventListener('DOMContentLoaded', () => {
          const observer = new MutationObserver(() => requestAnimationFrame(sync));
          observer.observe(document.body, { childList: true, subtree: true, characterData: true });
          sync(); [250, 1000, 3000, 7000].forEach((delay) => setTimeout(sync, delay));
        });
      })();
    </script><script type="application/ld+json">`, "</script>", '</head> <body> <a class="skip-link" href="#main">Skip to content</a> ', ' <main id="main">', "</main> ", " </body></html>"], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#062b43"><meta name="description"', ">", '<link rel="icon" href="/assets/images/logo.svg" type="image/svg+xml"><link rel="preload" href="/assets/fonts/Tiempos-Headline-Semibold.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/DM-Sans-Regular.ttf" as="font" type="font/ttf" crossorigin><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:image"', '><link rel="canonical"', "><title>", "</title><script>\n      window.$wc_load = window.$wc_load || ((value) => JSON.parse(JSON.stringify(value)));\n      window.$wc_leads = window.$wc_leads || { doc: { url: window.$wc_load(document.URL), ref: window.$wc_load(document.referrer), search: window.$wc_load(location.search), hash: window.$wc_load(location.hash) } };\n    </script><script", "></script><script async", "></script><script>(function(){", `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', ga4);
    })();</script><script>
      (() => {
        const canonical = "5712485413";
        const storageKey = "whatconverts-active-phone";
        const digits = (value) => { const valueDigits = String(value || "").replace(/\\\\D/g, ""); return valueDigits.length === 11 && valueDigits.startsWith("1") ? valueDigits.slice(1) : valueDigits; };
        const format = (value) => /^[2-9]\\\\d{2}[2-9]\\\\d{2}\\\\d{4}$/.test(value) ? \\\`(\\\${value.slice(0,3)}) \\\${value.slice(3,6)}-\\\${value.slice(6)}\\\` : null;
        const readPhone = (value) => { const match = String(value || "").match(/(?:\\\\+?1[\\\\s.-]?)?\\\\(?[2-9]\\\\d{2}\\\\)?[\\\\s.-]*[2-9]\\\\d{2}[\\\\s.-]*\\\\d{4}/); return match ? format(digits(match[0])) : null; };
        const active = () => {
          for (const link of document.querySelectorAll('a[href^="tel:"]')) { const value = readPhone(link.textContent); if (value && digits(value) !== canonical) { try { sessionStorage.setItem(storageKey, value); } catch {} return value; } }
          try { return format(digits(sessionStorage.getItem(storageKey) || "")) || "(571) 248-5413"; } catch { return "(571) 248-5413"; }
        };
        const sync = () => {
          const value = active(); const activeDigits = digits(value);
          document.querySelectorAll('[data-phone-link], [data-phone-sync]').forEach((node) => {
            if (node.tagName === 'A') node.setAttribute('href', \\\`tel:+1\\\${activeDigits}\\\`);
            node.querySelectorAll?.('[data-phone-display]').forEach((display) => { display.textContent = value; });
            if (node.matches?.('[data-phone-display]')) node.textContent = value;
          });
        };
        document.addEventListener('DOMContentLoaded', () => {
          const observer = new MutationObserver(() => requestAnimationFrame(sync));
          observer.observe(document.body, { childList: true, subtree: true, characterData: true });
          sync(); [250, 1000, 3000, 7000].forEach((delay) => setTimeout(sync, delay));
        });
      })();
    </script><script type="application/ld+json">`, "</script>", '</head> <body> <a class="skip-link" href="#main">Skip to content</a> ', ' <main id="main">', "</main> ", " </body></html>"])), addAttribute(description, "content"), noIndex && renderTemplate`<meta name="robots" content="noindex,nofollow">`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${site.url}/assets/images/clinic-fallback.jpg`, "content"), addAttribute(new URL(Astro2.url.pathname, site.url), "href"), title, addAttribute(whatConvertsSrc, "src"), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${ga4}`, "src"), defineScriptVars({ ga4 }), unescapeHTML(JSON.stringify({ "@context": "https://schema.org", "@type": "Dentist", name: site.name, telephone: site.phoneDisplay, address: { "@type": "PostalAddress", streetAddress: "20925 Professional Plaza, Suite 330", addressLocality: "Ashburn", addressRegion: "VA", postalCode: "20147", addressCountry: "US" } })), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, procedures as a, procedureOptions as p, resolveProcedure as r, site as s };
