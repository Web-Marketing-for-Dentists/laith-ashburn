globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, n as renderScript, r as renderTemplate } from './astro/server_CpvsXh_J.mjs';
/* empty css                         */

const $$Astro = createAstro("https://offer.dentist-in-ashburn.com");
const $$BeforeAfter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BeforeAfter;
  const {
    before = "/assets/images/implant-before.jpg",
    after = "/assets/images/implant-after.jpg",
    beforeLabel = "Before",
    afterLabel = "After",
    alt = "Before and after dental treatment"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bas-container" data-bas${addAttribute(before, "data-before-image")}${addAttribute(after, "data-after-image")}${addAttribute(beforeLabel, "data-before-label")}${addAttribute(afterLabel, "data-after-label")} role="img"${addAttribute(alt, "aria-label")}></div> ${renderScript($$result, "/Users/whit/Documents/GitHub/laith-ashburn/src/components/BeforeAfter.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/components/BeforeAfter.astro", void 0);

export { $$BeforeAfter as $ };
