import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$Contact } from '../../chunks/Contact_vOXDbj58.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cjn6Kemb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "es" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contact", $$Contact, { "lang": "es" })} ` })}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/contacto.astro", void 0);

const $$file = "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/contacto.astro";
const $$url = "/es/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
