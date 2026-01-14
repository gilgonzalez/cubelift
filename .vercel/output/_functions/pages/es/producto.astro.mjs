import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$Product } from '../../chunks/Product_CH3Yct1z.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cjn6Kemb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Producto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "es" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Product", $$Product, { "lang": "es" })} ` })}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/producto.astro", void 0);

const $$file = "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/producto.astro";
const $$url = "/es/producto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Producto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
