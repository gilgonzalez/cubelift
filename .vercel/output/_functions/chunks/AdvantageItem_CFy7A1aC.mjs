import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DrRuWExZ.mjs';
import 'piccolore';
import 'clsx';
import { g as getTranslations, d as getPath } from './Layout_Cjn6Kemb.mjs';

const $$Astro$1 = createAstro();
const $$RequestFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RequestFooter;
  const { lang } = Astro2.props;
  const t = getTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="request-footer"> <div class="flex flex-col items-center justify-center gap-6 w-full max-w-5xl mx-auto text-center"> <a${addAttribute(getPath("home", lang), "href")} class="flex items-center justify-center"> <img src="/brand/logo.png" alt="Logo" class="h-10 w-auto"> </a> <h3 class="section-title text-white text-pretty max-w-xl">${t.footer.title}</h3> <p class="paragraph text-white text-pretty max-w-2xl ">${t.footer.description}</p> <a${addAttribute(getPath("request", lang), "href")} class="btn-request mt-2">${t.button.request}</a> </div> </section>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/RequestFooter.astro", void 0);

const $$Astro = createAstro();
const $$AdvantageItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdvantageItem;
  const { title, description, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-start  p-4 max-w-sm gap-8"> <div class="aspect-square shrink-0 flex w-24 items-center justify-center "> <img${addAttribute(icon, "src")}${addAttribute(title, "alt")} class="w-full h-full object-contain"> </div> <div class="flex flex-col items-center justify-center gap-2 flex-1"> <h4 class="font-bold text-xl text-center text-pretty text-white max-w-64 flex-1 flex justify-center items-center">${title}</h4> <p class="text-sm font-light text-white text-center text-pretty  max-w-2xl flex-1">${description}</p> </div> </div>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/AdvantageItem.astro", void 0);

export { $$AdvantageItem as $, $$RequestFooter as a };
