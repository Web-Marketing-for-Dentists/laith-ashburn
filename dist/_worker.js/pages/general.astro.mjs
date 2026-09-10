globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpvsXh_J.mjs';
import { $ as $$BaseLayout, a as procedures } from '../chunks/BaseLayout_CUs5uBI_.mjs';
import { $ as $$ProcedureCard } from '../chunks/ProcedureCard_DUIy9LQa.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "General Dentistry | My Ashburn Dentist", "description": "General dentistry treatment options in Ashburn, Virginia.", "data-astro-cid-6mdaxovq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero" data-astro-cid-6mdaxovq><div class="shell" data-astro-cid-6mdaxovq><p class="eyebrow" data-astro-cid-6mdaxovq>General dentistry</p><h1 class="display" data-astro-cid-6mdaxovq>Care built around <em data-astro-cid-6mdaxovq>your next step.</em></h1><p class="prose" data-astro-cid-6mdaxovq>Explore clear treatment options for restoring, protecting, and maintaining your smile.</p></div></section> <section class="section" data-astro-cid-6mdaxovq><div class="shell" data-astro-cid-6mdaxovq><div class="grid grid--three" data-astro-cid-6mdaxovq>${procedures.filter((item) => item.slug !== "dental-implants" && item.slug !== "root-canal-treatment").map((item, index) => renderTemplate`${renderComponent($$result2, "ProcedureCard", $$ProcedureCard, { "name": item.name, "price": item.price, "description": item.description, "href": `/general/${item.slug}`, "image": index === 0 ? "/assets/images/dental-crowns.webp" : index === 1 ? "/assets/images/wisdom-tooth.webp" : "/assets/images/general-care.jpg", "data-astro-cid-6mdaxovq": true })}`)}</div></div></section> ` })} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/general/index.astro", void 0);

const $$file = "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/general/index.astro";
const $$url = "/general";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
