globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CpvsXh_J.mjs';
import { a as procedures, $ as $$BaseLayout } from '../../chunks/BaseLayout_CUs5uBI_.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://offer.dentist-in-ashburn.com");
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const procedure = procedures.find((item) => item.slug === Astro2.params.slug);
  if (!procedure) return Astro2.redirect("/general");
  const image = procedure.slug === "dental-crowns" ? "/assets/images/dental-crowns.webp" : procedure.slug === "wisdom-tooth-extractions" ? "/assets/images/wisdom-tooth.webp" : procedure.slug === "root-canal-treatment" ? "/assets/images/root-canal.webp" : "/assets/images/general-care.jpg";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${procedure.name} | My Ashburn Dentist`, "description": procedure.description, "data-astro-cid-maa3b7xo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="treatment-hero" data-astro-cid-maa3b7xo><div class="shell treatment-hero__grid" data-astro-cid-maa3b7xo><div data-astro-cid-maa3b7xo><a class="back" href="/general" data-astro-cid-maa3b7xo>← Back to General services</a><p class="eyebrow" data-astro-cid-maa3b7xo>${procedure.name}</p><h1 class="display" data-astro-cid-maa3b7xo>${procedure.name} <em data-astro-cid-maa3b7xo>${procedure.price && `from ${procedure.price}`}</em></h1><p class="prose" data-astro-cid-maa3b7xo>${procedure.description} Start with an exam, your goals, and a direct conversation about what treatment may help.</p><a class="button"${addAttribute(`/appointment-request?interest=${encodeURIComponent(procedure.name)}`, "href")} data-astro-cid-maa3b7xo>Request an appointment</a></div><img${addAttribute(image, "src")} alt="" data-astro-cid-maa3b7xo></div></section> <section class="section" data-astro-cid-maa3b7xo><div class="shell grid grid--three" data-astro-cid-maa3b7xo><article class="card" data-astro-cid-maa3b7xo><p class="eyebrow" data-astro-cid-maa3b7xo>01</p><h2 data-astro-cid-maa3b7xo>Understand the concern</h2><p data-astro-cid-maa3b7xo>We listen to what you are experiencing and evaluate the tooth, gum, or bite involved.</p></article><article class="card" data-astro-cid-maa3b7xo><p class="eyebrow" data-astro-cid-maa3b7xo>02</p><h2 data-astro-cid-maa3b7xo>See your options</h2><p data-astro-cid-maa3b7xo>You receive a clear explanation of practical treatment paths, timing, and expected care.</p></article><article class="card" data-astro-cid-maa3b7xo><p class="eyebrow" data-astro-cid-maa3b7xo>03</p><h2 data-astro-cid-maa3b7xo>Move forward comfortably</h2><p data-astro-cid-maa3b7xo>Our team helps you choose a plan built around your comfort, needs, and goals.</p></article></div></section> ` })} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/general/[slug].astro", void 0);

const $$file = "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/general/[slug].astro";
const $$url = "/general/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
