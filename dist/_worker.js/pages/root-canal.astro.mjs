globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpvsXh_J.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUs5uBI_.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$RootCanal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Root Canal Treatment | My Ashburn Dentist", "description": "Root canal treatment from $699 in Ashburn, Virginia.", "data-astro-cid-6dulmpes": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="root" data-astro-cid-6dulmpes><div class="shell root__grid" data-astro-cid-6dulmpes><div data-astro-cid-6dulmpes><p class="eyebrow" data-astro-cid-6dulmpes>Root canal treatment</p><h1 class="display" data-astro-cid-6dulmpes>Relief and a plan to <em data-astro-cid-6dulmpes>save your tooth.</em></h1><p class="prose" data-astro-cid-6dulmpes>When a tooth is painful, inflamed, or infected, root canal treatment may be the most conservative way to protect it.</p><p class="root__price" data-astro-cid-6dulmpes>From <strong data-astro-cid-6dulmpes>$699</strong></p><a class="button" href="/appointment-request?interest=Root%20Canal%20Treatment" data-astro-cid-6dulmpes>Request an appointment</a></div><img src="/assets/images/root-canal.webp" alt="Cross-section illustration of a tooth showing the inner pulp and root canals" data-astro-cid-6dulmpes></div></section> <section class="section" data-astro-cid-6dulmpes><div class="shell grid grid--two" data-astro-cid-6dulmpes><div data-astro-cid-6dulmpes><p class="eyebrow" data-astro-cid-6dulmpes>Common signs</p><h2 class="section-title" data-astro-cid-6dulmpes>Don’t ignore persistent discomfort.</h2></div><div class="prose" data-astro-cid-6dulmpes><p data-astro-cid-6dulmpes>Sensitivity to temperature, chewing pain, swelling, or a tooth that darkens can be signs that deserve a prompt clinical evaluation.</p><p data-astro-cid-6dulmpes>We explain what we see, answer questions, and help you understand your options before treatment begins.</p></div></div></section> ` })} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/root-canal.astro", void 0);

const $$file = "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/root-canal.astro";
const $$url = "/root-canal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RootCanal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
