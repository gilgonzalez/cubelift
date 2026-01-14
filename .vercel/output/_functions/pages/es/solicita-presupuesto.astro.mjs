import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$RequestQuote } from '../../chunks/RequestQuote_DT2IC2uS.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cjn6Kemb.mjs';
export { renderers } from '../../renderers.mjs';

const $$SolicitaPresupuesto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "es" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RequestQuotePage", $$RequestQuote, { "lang": "es" })} ` })}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/solicita-presupuesto.astro", void 0);

const $$file = "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/solicita-presupuesto.astro";
const $$url = "/es/solicita-presupuesto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SolicitaPresupuesto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
