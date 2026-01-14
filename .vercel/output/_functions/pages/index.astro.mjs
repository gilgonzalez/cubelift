import { c as createComponent, b as createAstro } from '../chunks/astro/server_DrRuWExZ.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.request.headers.get("accept-language");
  if (lang?.startsWith("en")) {
    return Astro2.redirect("/en", 302);
  }
  return Astro2.redirect("/es", 301);
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/index.astro", void 0);

const $$file = "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
