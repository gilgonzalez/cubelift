import { c as createComponent, b as createAstro, m as maybeRenderHead, f as renderScript, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_C324Zr3R.mjs';
import { $ as $$AdvantageItem, a as $$RequestFooter } from './AdvantageItem_CFy7A1aC.mjs';
import { g as getTranslations, d as getPath } from './Layout_Cjn6Kemb.mjs';

const homeImg1 = new Proxy({"src":"/_astro/home-img-1.CAeJ8iSJ.jpg","width":3072,"height":3840,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/home/home-img-1.jpg";
							}
							
							return target[name];
						}
					});

const homeImg2 = new Proxy({"src":"/_astro/home-img-2.BGw2M0zu.png","width":357,"height":706,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/home/home-img-2.png";
							}
							
							return target[name];
						}
					});

const homeBg2 = new Proxy({"src":"/_astro/home-bg-2.2BFjoVoO.png","width":1440,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/home/home-bg-2.png";
							}
							
							return target[name];
						}
					});

const sliderImg1 = new Proxy({"src":"/_astro/slider-1.SapUyQ9J.png","width":699,"height":597,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/slider/slider-1.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$ImageSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImageSlider;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="slider-component w-full flex flex-col gap-6 max-w-lg mx-auto lg:max-w-none"> <div class="slider-wrapper relative w-full aspect-4/5 lg:aspect-square overflow-hidden bg-gray-50"> ${images.map((img, index) => renderTemplate`<div${addAttribute(`slide absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`, "class")}${addAttribute(index, "data-index")}> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": `Slide ${index + 1}`, "class": "w-full h-full object-cover" })} </div>`)} </div> <div class="slider-controls flex items-center justify-between px-2"> <button class="prev-btn p-2 cursor-pointer text-gray-400 hover:text-black transition-colors" aria-label="Previous slide"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m15 18-6-6 6-6"></path> </svg> </button> <div class="dots flex gap-3"> ${images.map((_, index) => renderTemplate`<button class="dot w-3 h-3 rounded-full transition-colors duration-300 data-[active=true]:bg-[var(--color-primary)] data-[active=false]:bg-gray-200 data-[active=false]:hover:bg-gray-300"${addAttribute(index, "data-index")}${addAttribute(index === 0 ? "true" : "false", "data-active")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")}></button>`)} </div> <button class="next-btn p-2 cursor-pointer text-gray-400 hover:text-black transition-colors" aria-label="Next slide"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m9 18 6-6-6-6"></path> </svg> </button> </div> </div> ${renderScript($$result, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/ImageSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/ImageSlider.astro", void 0);

const $$Astro = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  const { lang } = Astro2.props;
  const t = getTranslations(lang);
  const advantageItems = [
    {
      title: t.advantages.item_1.title,
      description: t.advantages.item_1.description,
      icon: "/ui/icon-1.svg"
    },
    {
      title: t.advantages.item_2.title,
      description: t.advantages.item_2.description,
      icon: "/ui/icon-2.svg"
    },
    {
      title: t.advantages.item_3.title,
      description: t.advantages.item_3.description,
      icon: "/ui/icon-3.svg"
    },
    {
      title: t.advantages.item_4.title,
      description: t.advantages.item_4.description,
      icon: "/ui/icon-4.svg"
    },
    {
      title: t.advantages.item_5.title,
      description: t.advantages.item_5.description,
      icon: "/ui/icon-5.svg"
    },
    {
      title: t.advantages.item_6.title,
      description: t.advantages.item_6.description,
      icon: "/ui/icon-6.svg"
    }
  ];
  const featureItems = [
    t.features.item_1,
    t.features.item_2,
    t.features.item_3,
    t.features.item_4,
    t.features.item_5,
    t.features.item_6,
    t.features.item_7
  ];
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="home-hero"> <div class="flex flex-col text-left gap-4"> <h3 class="section-title max-w-sm text-white">${t.home.hero_title}</h3> <p class="paragraph max-w-sm text-white">${t.home.hero_description}</p> </div> <div class="mt-24 flex flex-row gap-4 items-center"> <a${addAttribute(getPath("request", lang), "href")} class="btn-request">${t.button.request}</a> <a href="/" class="text-primary font-bold cursor-pointer"> ${t.specification_show}</a> </div> </section> <section id="section-1" class="bg-white relative px-6 py-16 lg:px-18 lg:py-24"> <div class="flex flex-col justify-start items-center gap-6 max-w-2xl mx-auto lg:mx-0 lg:items-start"> <h3 class="section-title text-black">${t.home.section_1_title}</h3> <p class="paragraph text-black">${t.home.section_1_paragraph_1}</p> <p class="paragraph text-black">${t.home.section_1_paragraph_2}</p> <div class="w-full mt-8 lg:hidden"> ${renderComponent($$result, "Image", $$Image, { "src": homeImg1, "alt": "Home Image 1", "class": "w-full h-auto object-contain" })} </div> </div> <div class="hidden lg:block"> ${renderComponent($$result, "Image", $$Image, { "src": homeImg1, "alt": "Home Image 1", "class": "w-lg absolute -top-24 right-24" })} </div> </section> <section id="advantages" class="bg-black flex flex-col justify-center items-center gap-8 p-18"> <h3 class="section-title text-white max-w-2xl text-center text-pretty uppercase">${t.advantages.title}</h3> <div class="flex flex-wrap gap-8 justify-center"> ${advantageItems.map((item) => renderTemplate`${renderComponent($$result, "AdvantageItem", $$AdvantageItem, { ...item })}`)} </div> </section> <section id="features" class="flex flex-col lg:flex-row px-12 py-12 lg:p-0 lg:pl-18 w-full min-h-screen lg:h-screen bg-[linear-gradient(to_bottom,var(--color-primary)_80%,white_80%)] relative "> <div class="flex flex-col flex-1 items-start justify-center gap-8 "> <h3 class="section-title text-black max-w-2xl text-pretty uppercase">${t.features.title}</h3> <ul class="flex flex-col gap-4"> ${featureItems.map((item) => renderTemplate`<li class="text-black text-xl tracking-wide font-light flex items-center justify-start gap-4"> <span class="w-2 h-2 bg-black shrink-0"></span> ${item} </li>`)} </ul> <div class="absolute bottom-12"> <a class="btn-primary" href="#">${t.specification_show_all}</a> </div> </div> <div class="flex flex-1 h-64 lg:h-full w-full py-4"> ${renderComponent($$result, "Image", $$Image, { "src": homeImg2, "alt": "Home Image 2", "class": "w-full h-full object-contain" })} </div> </section> <section id="section-2" class="flex flex-col lg:flex-row px-6 py-12 lg:px-20 lg:py-24 bg-white gap-12 items-center justify-center w-full"> <div id="slider" class="w-full lg:flex-3 max-w-xl lg:max-w-none mx-auto"> ${renderComponent($$result, "ImageSlider", $$ImageSlider, { "images": [sliderImg1, homeImg1, homeImg2, sliderImg1, homeImg1, homeImg2, sliderImg1, homeImg1, homeImg2] })} </div> <div class="flex flex-col w-full lg:flex-2 gap-6 justify-center items-start"> <h3 class="section-title text-black text-3xl md:text-4xl">${t.home.section_2_title}</h3> <p class="paragraph text-black text-base md:text-lg text-pretty leading-relaxed">${t.home.section_2_description}</p> </div> </section> <section id="section-3" class="flex flex-col md:flex-row px-6 md:px-18 py-16 md:py-24 bg-cover bg-center gap-8 items-stretch md:items-end"${addAttribute(`background-image: url(${homeBg2.src})`, "style")}> <div class="bg-primary p-6 md:p-8 max-w-lg flex flex-col gap-6 md:gap-8"> <h3 class="section-title text-black text-3xl md:text-4xl max-w-72">${t.home.section_3_title}</h3> <p class="paragraph text-black text-base md:text-lg text-pretty leading-relaxed">${t.home.section_3_description}</p> </div> <div class="mt-8 md:mt-0 aspect-square bg-primary h-16 md:h-20"></div> </section> ${renderComponent($$result, "RequestFooter", $$RequestFooter, { "lang": lang })}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Home.astro", void 0);

export { $$Home as $ };
