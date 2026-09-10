globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpvsXh_J.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUs5uBI_.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found | My Ashburn Dentist", "noIndex": true, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="not-found" data-astro-cid-zetdm5md><div class="shell" data-astro-cid-zetdm5md><p class="eyebrow" data-astro-cid-zetdm5md>404</p><h1 class="section-title" data-astro-cid-zetdm5md>We couldn’t find that page.</h1><p class="prose" data-astro-cid-zetdm5md>Return to the practice home page or request an appointment.</p><a class="button" href="/" data-astro-cid-zetdm5md>Return home</a></div></section>` })} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/404.astro", void 0);

const $$file = "/Users/whit/Documents/GitHub/laith-ashburn/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
