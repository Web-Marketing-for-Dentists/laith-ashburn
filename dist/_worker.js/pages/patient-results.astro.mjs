globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpvsXh_J.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUs5uBI_.mjs';
import { $ as $$BeforeAfter } from '../chunks/BeforeAfter_5m233gaU.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$PatientResults = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Patient Results | My Ashburn Dentist", "description": "See dental treatment results from My Ashburn Dentist.", "data-astro-cid-3c7ezarg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="results-hero" data-astro-cid-3c7ezarg><div class="shell" data-astro-cid-3c7ezarg><p class="eyebrow" data-astro-cid-3c7ezarg>Patient results</p><h1 class="display" data-astro-cid-3c7ezarg>A closer look at <em data-astro-cid-3c7ezarg>real progress.</em></h1><p class="prose" data-astro-cid-3c7ezarg>Every smile and treatment plan is individual. These images illustrate the kind of thoughtful restorative work patients can discuss with our team.</p></div></section> <section class="section" data-astro-cid-3c7ezarg><div class="shell grid grid--two result" data-astro-cid-3c7ezarg><div data-astro-cid-3c7ezarg><p class="eyebrow" data-astro-cid-3c7ezarg>Featured implant case</p><h2 class="section-title" data-astro-cid-3c7ezarg>Restoring a confident smile.</h2><p class="prose" data-astro-cid-3c7ezarg>A consultation is the right starting point for understanding whether an implant, crown, or another path may support your goals.</p><a class="button" href="/appointment-request?interest=Dental%20Implants" data-astro-cid-3c7ezarg>Request an appointment</a></div>${renderComponent($$result2, "BeforeAfter", $$BeforeAfter, { "data-astro-cid-3c7ezarg": true })}</div></section> ` })} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/patient-results.astro", void 0);

const $$file = "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/patient-results.astro";
const $$url = "/patient-results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PatientResults,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
