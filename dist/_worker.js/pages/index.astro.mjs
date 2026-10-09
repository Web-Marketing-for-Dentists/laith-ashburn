globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_CpvsXh_J.mjs';
import { g as google, $ as $$BaseLayout } from '../chunks/BaseLayout_ClGm0g2N.mjs';
import { $ as $$BeforeAfter } from '../chunks/BeforeAfter_CvaW2BcY.mjs';
import { $ as $$ProcedureCard } from '../chunks/ProcedureCard_DJFG26Qo.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://offer.dentist-in-ashburn.com");
const $$GoogleRating = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoogleRating;
  const { href = google.reviewsUrl } = Astro2.props;
  const external = !href.startsWith("#") && !href.startsWith("/");
  return renderTemplate`${maybeRenderHead()}<a class="google-rating"${addAttribute(href, "href")}${addAttribute(external ? "_blank" : void 0, "target")}${addAttribute(external ? "noreferrer" : void 0, "rel")} data-astro-cid-vinv4rw4> <img src="/assets/images/google-verified-reviews.webp" alt="Google Verified Customer Reviews" width="800" height="499" loading="lazy" decoding="async" data-astro-cid-vinv4rw4> <span class="google-rating__score" data-astro-cid-vinv4rw4>Google Rating <strong data-astro-cid-vinv4rw4>${google.rating}</strong><span class="google-rating__rule" aria-hidden="true" data-astro-cid-vinv4rw4>|</span><strong data-astro-cid-vinv4rw4>${google.reviewCount}</strong> Reviews</span> </a> `;
}, "/Users/whit/Documents/G I T H U B/laith-ashburn/src/components/GoogleRating.astro", void 0);

const $$Astro = createAstro("https://offer.dentist-in-ashburn.com");
const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reviews;
  const { reviews, eyebrow = "Verified Google reviews", heading, lead, id = "reviews" } = Astro2.props;
  const star = "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z";
  return renderTemplate`${maybeRenderHead()}<section class="reviews"${addAttribute(id, "id")} data-astro-cid-bgwftent> <div class="shell" data-astro-cid-bgwftent> <div class="reviews__head" data-astro-cid-bgwftent> <div data-astro-cid-bgwftent> <p class="eyebrow" data-astro-cid-bgwftent>${eyebrow}</p> <h2 class="section-title" data-astro-cid-bgwftent>${heading}</h2> ${lead && renderTemplate`<p class="prose reviews__lead" data-astro-cid-bgwftent>${lead}</p>`} </div> ${renderComponent($$result, "GoogleRating", $$GoogleRating, { "data-astro-cid-bgwftent": true })} </div> <div class="reviews__grid" data-astro-cid-bgwftent> ${reviews.map((review) => renderTemplate`<article${addAttribute(["review", { "review--feature": review.feature }], "class:list")} data-astro-cid-bgwftent> <div class="review__head" data-astro-cid-bgwftent> <img class="review__photo"${addAttribute(review.photo, "src")} alt="" width="48" height="48" loading="lazy" decoding="async" data-astro-cid-bgwftent> <div data-astro-cid-bgwftent> <p class="review__name" data-astro-cid-bgwftent>${review.name}</p> <span class="review__stars" role="img" aria-label="Rated 5 out of 5 on Google" data-astro-cid-bgwftent> ${Array.from({ length: 5 }, () => renderTemplate`<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" data-astro-cid-bgwftent><path${addAttribute(star, "d")} data-astro-cid-bgwftent></path></svg>`)} </span> </div> <svg class="review__g" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" data-astro-cid-bgwftent> <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.2-2.2H12v4.2h6.6c-.1 1.1-.8 2.7-2.4 3.8l3.7 2.9c2.2-2 3.6-5 3.6-8.7Z" data-astro-cid-bgwftent></path> <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.7-2.9c-1 .7-2.4 1.2-4.2 1.2-3.3 0-6-2.2-7-5.2l-3.9 3C3.1 21.3 7.2 24 12 24Z" data-astro-cid-bgwftent></path> <path fill="#FBBC05" d="M5 14.2c-.3-.8-.4-1.5-.4-2.2s.1-1.5.4-2.2L1 6.8C.4 8.4 0 10.1 0 12s.4 3.6 1 5.2l4-3Z" data-astro-cid-bgwftent></path> <path fill="#EA4335" d="M12 4.7c2.3 0 3.9 1 4.8 1.9l3.5-3.4C18.2 1.2 15.5 0 12 0 7.2 0 3.1 2.7 1 6.8l4 3c1-3 3.7-5.1 7-5.1Z" data-astro-cid-bgwftent></path> </svg> </div> <p class="review__text" data-astro-cid-bgwftent>${review.text}</p> </article>`)} </div> <div class="reviews__foot" data-astro-cid-bgwftent> <a class="button button--outline"${addAttribute(google.reviewsUrl, "href")} target="_blank" rel="noreferrer" data-astro-cid-bgwftent>Read all ${google.reviewCount} reviews on Google <span aria-hidden="true" data-astro-cid-bgwftent>↗</span></a> </div> </div> </section> `;
}, "/Users/whit/Documents/G I T H U B/laith-ashburn/src/components/Reviews.astro", void 0);

const reviews = [
  {
    name: "Kavone B.",
    photo: "/assets/images/reviews/kavone-b.webp",
    text: "The Dr. is an artist. I was able to get a root canal done the same day, on a tooth that had previous work done, that left it looking terrible- he was able to complete rebuild it, to look completely realistic; while still opting out of getting a crown. I had a root canal done a few months ago, from an endodontist specialist; and Dr. Rusnak blew their work out of the water. 10/10 results.",
    feature: true
  },
  {
    name: "Karen R.",
    photo: "/assets/images/reviews/karen-r.webp",
    text: "Dr. Rusznak has been my Dentist for over 15 years. I have a phobia of the Dentist, but Dr R. Comprehends me and has patience for me. I highly recommend him. Sapura is the hygienist and she is amazing. After seeing her I felt my teeth so smooth. She is very kind and very detailed."
  },
  {
    name: "Nick P.",
    photo: "/assets/images/reviews/nick-p.webp",
    text: "This is not my regular dentist, but chosen off Google for an emergency. Came in for an emergency appointment that was quickly looked after and deemed a non-emergency that required neither treatment, nor payment. I'm used to going into dentist's offices and coming out with a long treatment list along with a long payment list. None of that this time. How great is that! Plus treated like a longtime patient. Great service ... great staff and office."
  },
  {
    name: "Matt M.",
    photo: "/assets/images/reviews/matt-m.webp",
    text: "I had my first visit today at My Ashburn Dentist, and I couldn't be more pleased. From the moment I walked in, the reception staff were welcoming and professional. The entire process was smooth, and the atmosphere was clean and comfortable. The doctor was incredibly honest, knowledgeable, and professional. He took the time to explain everything clearly and made me feel confident about the care I was receiving. It's not easy to find a dental office that combines such a high level of professionalism with a genuinely caring attitude, but this place truly stands out. I'm very satisfied with my experience and grateful to have found such a great dental team. Highly recommended!"
  },
  {
    name: "Beant S.",
    photo: "/assets/images/reviews/beant-s.webp",
    text: "First appointment Dr took his time to explain and answer all my questions. Highly recommend. Thanks!"
  },
  {
    name: "Michael S.",
    photo: "/assets/images/reviews/michael-s.webp",
    text: "Over a number of years I’ve had cleanings, a root canal, and a couple crowns done and Dr. Rusznak has always done a great job and is very personable. It is always easy to get an appointment quickly when I need it."
  },
  {
    name: "Jason F.",
    photo: "/assets/images/reviews/jason-f.webp",
    text: "I've been a patient of Dr. Rusznak for over ten years and must say, he is the only dentist in Loudoun County that I'll ever use. This week I went for a root canal procedure which I was not looking forward to. The funny thing is, I literally fell asleep to a movie they had on for me to watch during the procedure. I highly recommend Dr. Rusznak at My Ashburn Dentist!"
  },
  {
    name: "Cheryl P.",
    photo: "/assets/images/reviews/cheryl-p.webp",
    text: "Dr R., Deb and the team are amazing. So willing to make you comfortable and to coordinate a dental plan that works for your schedule and budget."
  },
  {
    name: "Daniela P.",
    photo: "/assets/images/reviews/daniela-p.webp",
    text: "I am new to the area. The office not only had a great customer service making my family feel welcome, they did a great job with preventive oral services and referrals. I was specially happy with how they communicated with our insurance and made the whole experience wonderful."
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tiers = [
    { label: "Single Dental Implant", price: "$2,999", unit: "per tooth", copy: "Replaces one missing tooth. Includes implant, abutment, and crown.", image: "/assets/images/single-implant.webp", alt: "Illustration of a single dental implant with its abutment and crown", width: 655, height: 438, fade: true },
    { label: "Snap-On Denture", price: "$5,997", unit: "per arch", copy: "A removable denture that snaps onto dental implants for a secure, stable fit.", image: "/assets/images/snap-on-denture.webp", alt: "Illustration of a lower denture lifted above two dental implants", width: 500, height: 500 },
    { label: "All-on-4", price: "$14,997", unit: "per arch", copy: "A full arch of fixed, non-removable teeth supported by four dental implants.", image: "/assets/images/all-on-4.webp", alt: "Illustration of a full arch of teeth seated on four dental implants", width: 306, height: 261 }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <img class="hero__media" src="/assets/images/office.jpg" alt="" width="1920" height="1028" fetchpriority="high" data-astro-cid-j7pv25f6> <div class="hero__veil" data-astro-cid-j7pv25f6></div> <div class="shell hero__grid" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <p class="hero__kicker" data-astro-cid-j7pv25f6>Dental Implants Just <strong data-astro-cid-j7pv25f6>$2,999</strong> Per Tooth!</p> <h1 class="display" data-astro-cid-j7pv25f6>Local Dentist&nbsp;– <em data-astro-cid-j7pv25f6>Dental Implant Expert</em></h1> <p class="hero__copy" data-astro-cid-j7pv25f6>My Ashburn Dentist&nbsp;– located at Ashburn Farm &amp; Claiborne Pkwys&nbsp;– offers a comfortable dental experience to receive expert care in tooth replacement. With single dental implants just $2,999, schedule a FREE consultation to discover if we could save you money!</p> <a class="button" href="/appointment-request?interest=Dental%20Implants" data-astro-cid-j7pv25f6>Request an appointment <span aria-hidden="true" data-astro-cid-j7pv25f6>↗</span></a> <p class="hero__offer" data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Free</strong> Exam, X-Ray, and Consultation ($199 Value). Hurry! The offer ends soon.</p> <div class="hero__rating" data-astro-cid-j7pv25f6>${renderComponent($$result2, "GoogleRating", $$GoogleRating, { "href": "#reviews", "data-astro-cid-j7pv25f6": true })}</div> </div> <div class="hero__comparison" data-astro-cid-j7pv25f6><p class="eyebrow" data-astro-cid-j7pv25f6>Implant patient of Dr. Rusznak</p>${renderComponent($$result2, "BeforeAfter", $$BeforeAfter, { "data-astro-cid-j7pv25f6": true })}</div> </div> </section> <section class="section section--paper" id="pricing" data-astro-cid-j7pv25f6> <div class="shell" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>Dental implant pricing</p><h2 class="section-title pricing__title" data-astro-cid-j7pv25f6>Three ways to replace missing teeth</h2> <div class="pricing__grid" data-astro-cid-j7pv25f6> ${tiers.map((tier) => renderTemplate`<article class="price-card" data-astro-cid-j7pv25f6> <img${addAttribute(tier.fade ? "price-card__fade" : void 0, "class")}${addAttribute(tier.image, "src")}${addAttribute(tier.alt, "alt")}${addAttribute(tier.width, "width")}${addAttribute(tier.height, "height")} loading="lazy" decoding="async" data-astro-cid-j7pv25f6> <h3 class="price-card__label" data-astro-cid-j7pv25f6>${tier.label}</h3> <p class="price-card__price" data-astro-cid-j7pv25f6>${tier.price}</p> <p class="price-card__unit" data-astro-cid-j7pv25f6>${tier.unit}</p> <p class="price-card__copy" data-astro-cid-j7pv25f6>${tier.copy}</p> </article>`)} </div> <div class="pricing__foot" data-astro-cid-j7pv25f6> <p class="prose" data-astro-cid-j7pv25f6>Ask about 0% financing for up to 24 months.</p> <a class="button" href="/appointment-request?interest=Dental%20Implants" data-astro-cid-j7pv25f6>Request an appointment</a> </div> </div> </section> <section class="section section--rose" data-astro-cid-j7pv25f6> <div class="shell grid grid--two doctor" data-astro-cid-j7pv25f6> <img src="/assets/images/dr-zoltan-rusznak.webp" alt="Dr. Zoltan Rusznak" loading="lazy" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6><p class="eyebrow" data-astro-cid-j7pv25f6>Meet your dentist</p><h2 class="section-title" data-astro-cid-j7pv25f6>Dr. Zoltan Rusznak</h2><p class="prose" data-astro-cid-j7pv25f6>With more than 30 years of experience and 1,000+ implants placed, Dr. Rusznak helps patients understand the path that fits their goals and comfort.</p><a class="button button--outline" href="/meet-your-dentist" data-astro-cid-j7pv25f6>Meet Dr. Rusznak</a></div> </div> </section> <section class="section section--paper" data-astro-cid-j7pv25f6><div class="shell" data-astro-cid-j7pv25f6><p class="eyebrow" data-astro-cid-j7pv25f6>More ways to care for your smile</p><h2 class="section-title" data-astro-cid-j7pv25f6>General dentistry</h2><div class="grid grid--three cards" data-astro-cid-j7pv25f6>${renderComponent($$result2, "ProcedureCard", $$ProcedureCard, { "name": "Dental Crowns", "price": "$799", "description": "Restore strength and function with a crown made for your smile.", "href": "/general/dental-crowns", "image": "/assets/images/dental-crowns.webp", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "ProcedureCard", $$ProcedureCard, { "name": "Wisdom Tooth Extractions", "price": "$299", "description": "Straightforward guidance for wisdom teeth that need care.", "href": "/general/wisdom-tooth-extractions", "image": "/assets/images/wisdom-tooth.webp", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "ProcedureCard", $$ProcedureCard, { "name": "Root Canal Treatment", "price": "$699", "description": "Focused treatment to relieve pain and preserve your natural tooth.", "href": "/root-canal", "image": "/assets/images/root-canal.webp", "data-astro-cid-j7pv25f6": true })}</div></div></section> ${renderComponent($$result2, "Reviews", $$Reviews, { "reviews": reviews, "heading": "Read Reviews from Our Patients", "lead": "What patients say about Dr. Rusznak and our Ashburn team on Google, quoted as published.", "data-astro-cid-j7pv25f6": true })} <section class="section section--ink" data-astro-cid-j7pv25f6><div class="shell consult" data-astro-cid-j7pv25f6><div data-astro-cid-j7pv25f6><p class="eyebrow" data-astro-cid-j7pv25f6>Ready when you are</p><h2 class="section-title" data-astro-cid-j7pv25f6>Let’s talk about your options.</h2></div><a class="button" href="/appointment-request" data-astro-cid-j7pv25f6>Request an appointment</a></div></section> ` })} `;
}, "/Users/whit/Documents/G I T H U B/laith-ashburn/src/pages/index.astro", void 0);

const $$file = "/Users/whit/Documents/G I T H U B/laith-ashburn/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
