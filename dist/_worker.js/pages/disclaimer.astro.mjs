globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpvsXh_J.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUs5uBI_.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Disclaimer | My Ashburn Dentist", "noIndex": true, "data-astro-cid-5t5ny3h6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="legal" data-astro-cid-5t5ny3h6><div class="shell" data-astro-cid-5t5ny3h6><p class="eyebrow" data-astro-cid-5t5ny3h6>Legal</p><h1 class="section-title" data-astro-cid-5t5ny3h6>Disclaimer</h1><div class="prose" data-astro-cid-5t5ny3h6><p data-astro-cid-5t5ny3h6>The information on this website is provided for general educational purposes and is not a substitute for professional dental advice, diagnosis, or treatment.</p><p data-astro-cid-5t5ny3h6>Do not disregard professional advice or delay seeking care because of something you have read on this site. Results, treatment time, and costs vary by patient and clinical needs.</p><p data-astro-cid-5t5ny3h6>If you are experiencing a dental emergency, contact a qualified health professional or emergency service promptly.</p></div></div></section>` })} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/disclaimer.astro", void 0);

const $$file = "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Disclaimer,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
