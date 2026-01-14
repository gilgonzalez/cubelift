import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, e as renderTransition, a as renderTemplate } from './astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { g as getTranslations } from './Layout_Cjn6Kemb.mjs';
import { $ as $$Image } from './_astro_assets_C324Zr3R.mjs';
import { i as img } from './blog-img-1_DvkQnRU7.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$BlogItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogItem;
  const { lang } = Astro2.props;
  const t = getTranslations(lang);
  const title = "La importancia de contar con un ascensor en casa.";
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const date = "8 Marzo 2024";
  const slug = "example-blog";
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row gap-6 md:gap-8"> <div class="w-full md:w-1/3"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": title, "class": "w-full object-cover aspect-video", "data-astro-transition-scope": renderTransition($$result, "pwopvxf6", "", `blog-image-${slug}`) })} </div> <div class="flex flex-col justify-between max-w-lg gap-4 mt-4 md:mt-0"> <p class="text-sm text-gray-500 font-light">${date}</p> <h3 class="text-2xl font-bold text-pretty text-black max-w-64 flex-1 flex justify-center items-center">${title}</h3> <p class="text-sm font-light text-gray-500 flex-1">${content}</p> <a${addAttribute(`/${lang}/blog/${slug}`, "href")} class="btn-submit w-fit">${t.blog.read_more}</a> </div> </section>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/BlogItem.astro", "self");

const $$Astro = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const { lang } = Astro2.props;
  const t = getTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary px-6 py-6 md:px-18 md:py-8 flex justify-start"> <h2 class="text-3xl sm:text-4xl md:text-5xl text-left text-black uppercase leading-tight md:leading-16 max-w-72">${t.navbar.blog}</h2> </section> <section class="flex flex-col gap-8 px-6 py-10 md:px-18 md:py-16"> <div class="flex flex-col gap-4 md:flex-row md:items-center"> <input type="text" class="input-search flex-1"${addAttribute(t.form.search, "placeholder")}> <div class="flex flex-row gap-2 flex-1 md:justify-end"> <button class="btn-blog-filter">${t.form.date}</button> <button class="btn-blog-filter">${t.form.order}</button> </div> </div> <ul class="flex flex-col gap-8"> ${Array.from({ length: 10 }).map((_, index) => renderTemplate`${renderComponent($$result, "BlogItem", $$BlogItem, { "key": index, "lang": lang })}`)} </ul> </section>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Blog.astro", void 0);

export { $$Blog as $ };
