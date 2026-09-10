globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_CpvsXh_J.mjs';
/* empty css                         */

const $$Astro = createAstro("https://offer.dentist-in-ashburn.com");
const $$ProcedureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProcedureCard;
  const { name, price, description, href, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="procedure-card" data-astro-cid-fopqv5va> ${image && renderTemplate`<img${addAttribute(image, "src")} alt="" loading="lazy" data-astro-cid-fopqv5va>`} <div class="procedure-card__body" data-astro-cid-fopqv5va> <p class="eyebrow" data-astro-cid-fopqv5va>${price ? `From ${price}` : "Personalized care"}</p> <h3 data-astro-cid-fopqv5va>${name}</h3> <p data-astro-cid-fopqv5va>${description}</p> <a${addAttribute(href, "href")} data-astro-cid-fopqv5va>Explore ${name} <span aria-hidden="true" data-astro-cid-fopqv5va>↗</span></a> </div> </article> `;
}, "/Users/whit/Documents/GitHub/laith-ashburn/src/components/ProcedureCard.astro", void 0);

export { $$ProcedureCard as $ };
