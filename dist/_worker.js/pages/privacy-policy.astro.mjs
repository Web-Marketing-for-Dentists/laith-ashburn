globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpvsXh_J.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUs5uBI_.mjs';
/* empty css                                          */
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy | My Ashburn Dentist", "noIndex": true, "data-astro-cid-3llnt6j6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="legal" data-astro-cid-3llnt6j6><div class="shell" data-astro-cid-3llnt6j6><p class="eyebrow" data-astro-cid-3llnt6j6>Legal</p><h1 class="section-title" data-astro-cid-3llnt6j6>Privacy policy</h1><div class="prose" data-astro-cid-3llnt6j6><p data-astro-cid-3llnt6j6>We use information you submit through this website to respond to appointment requests and provide requested services. We take reasonable steps to protect submitted information.</p><p data-astro-cid-3llnt6j6>Website analytics and call-tracking tools may collect usage information, referral data, and interactions to help us understand site performance and respond to patient inquiries.</p><p data-astro-cid-3llnt6j6>You may contact the practice to ask questions about information submitted through this website. Please do not send sensitive medical or financial information through a general website form.</p></div></div></section>` })} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/privacy-policy.astro", void 0);

const $$file = "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PrivacyPolicy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
