import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$EntryBlog } from '../../../chunks/EntryBlog_BccEL2FE.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_Cjn6Kemb.mjs';
export { renderers } from '../../../renderers.mjs';

const $$ExampleBlog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "es" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EntryBlog", $$EntryBlog, { "lang": "es" })} ` })}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/blog/example-blog.astro", void 0);

const $$file = "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/es/blog/example-blog.astro";
const $$url = "/es/blog/example-blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ExampleBlog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
