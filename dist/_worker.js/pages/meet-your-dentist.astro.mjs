globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpvsXh_J.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUs5uBI_.mjs';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

const $$MeetYourDentist = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Meet Dr. Rusznak | My Ashburn Dentist", "description": "Meet Dr. Zoltan Rusznak of My Ashburn Dentist.", "data-astro-cid-txehzrqm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="meet" data-astro-cid-txehzrqm><div class="shell meet__grid" data-astro-cid-txehzrqm><img src="/assets/images/dr-zoltan-rusznak.webp" alt="Dr. Zoltan Rusznak" data-astro-cid-txehzrqm><div data-astro-cid-txehzrqm><p class="eyebrow" data-astro-cid-txehzrqm>Meet your dentist</p><h1 class="display" data-astro-cid-txehzrqm>Dr. Zoltan <em data-astro-cid-txehzrqm>Rusznak</em></h1><p class="prose" data-astro-cid-txehzrqm>Dr. Rusznak brings more than three decades of dental experience to every treatment conversation. His approach starts with listening, a thoughtful exam, and clear explanations of your options.</p><p class="prose" data-astro-cid-txehzrqm>Whether you are considering an implant, restoring a damaged tooth, or seeking a second opinion, our team is here to help you move forward confidently.</p><a class="button" href="/appointment-request" data-astro-cid-txehzrqm>Request an appointment</a></div></div></section> ` })} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/meet-your-dentist.astro", void 0);

const $$file = "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/meet-your-dentist.astro";
const $$url = "/meet-your-dentist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MeetYourDentist,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
