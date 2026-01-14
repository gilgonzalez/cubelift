import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$Contact$1 } from '../../chunks/Contact_vOXDbj58.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cjn6Kemb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "en" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactPage", $$Contact$1, { "lang": "en" })} ` })}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/en/contact.astro", void 0);

const $$file = "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/en/contact.astro";
const $$url = "/en/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
