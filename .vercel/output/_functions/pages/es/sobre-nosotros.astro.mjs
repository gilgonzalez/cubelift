import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$About } from '../../chunks/About_B1V2r1G4.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cjn6Kemb.mjs';
export { renderers } from '../../renderers.mjs';

const $$SobreNosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "es" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutPage", $$About, { "lang": "es" })} ` })}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/sobre-nosotros.astro", void 0);

const $$file = "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/sobre-nosotros.astro";
const $$url = "/es/sobre-nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SobreNosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
