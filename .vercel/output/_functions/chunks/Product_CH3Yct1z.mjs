import { c as createComponent, b as createAstro, m as maybeRenderHead, f as renderScript, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_C324Zr3R.mjs';
import { $ as $$AdvantageItem, a as $$RequestFooter } from './AdvantageItem_CFy7A1aC.mjs';
import { g as getTranslations, d as getPath } from './Layout_Cjn6Kemb.mjs';

const productImg1 = new Proxy({"src":"/_astro/product-img-1.DMwXDEjQ.png","width":491,"height":328,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/product/product-img-1.png";
							}
							
							return target[name];
						}
					});

const productImg2 = new Proxy({"src":"/_astro/product-img-2.C-KVKV7k.png","width":491,"height":328,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/product/product-img-2.png";
							}
							
							return target[name];
						}
					});

const productImg3 = new Proxy({"src":"/_astro/product-bg-1.C35zwVah.png","width":1440,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/product/product-bg-1.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$FullImageSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FullImageSlider;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel-slider w-full h-full flex flex-col gap-6"> <div class="relative w-full flex-1 h-full overflow-hidden flex justify-center items-center"> ${images.map((img, index) => renderTemplate`<div class="carousel-slide absolute w-[80%] max-w-4xl h-full overflow-hidden transition-all duration-500 ease-in-out origin-center
               data-[position=center]:z-20 data-[position=center]:opacity-100 data-[position=center]:scale-100 data-[position=center]:translate-x-0
               data-[position=center]:pointer-events-auto data-[position=center]:shadow-xl data-[position=center]:ring-1 data-[position=center]:ring-black/15 data-[position=center]:rounded-lg
               data-[position=prev]:z-10 data-[position=prev]:opacity-70 data-[position=prev]:scale-90 data-[position=prev]:-translate-x-[55%] data-[position=prev]:blur-[1px]
               data-[position=next]:z-10 data-[position=next]:opacity-70 data-[position=next]:scale-90 data-[position=next]:translate-x-[55%] data-[position=next]:blur-[1px]
               data-[position=hidden]:opacity-0 data-[position=hidden]:scale-75 data-[position=hidden]:pointer-events-none"${addAttribute(index, "data-index")}${addAttribute(
    index === 0 ? "center" : index === 1 ? "next" : index === images.length - 1 ? "prev" : "hidden",
    "data-position"
  )}> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": `Slide ${index + 1}`, "class": "w-full h-full object-cover" })} </div>`)} </div> <div class="flex items-center justify-center gap-3"> ${images.map((_, index) => renderTemplate`<button class="carousel-dot w-3 h-3 rounded-full transition-colors duration-300
               data-[active=true]:bg-primary
               data-[active=false]:bg-gray-200 data-[active=false]:hover:bg-gray-300"${addAttribute(index, "data-index")}${addAttribute(index === 0 ? "true" : "false", "data-active")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")}></button>`)} </div> </div> ${renderScript($$result, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/FullImageSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/FullImageSlider.astro", void 0);

const $$Astro = createAstro();
const $$Product = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Product;
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
  const specifications = [
    {
      title: t.specifications.specification_1.title,
      items: [
        t.specifications.specification_1.item_1,
        t.specifications.specification_1.item_2,
        t.specifications.specification_1.item_3,
        t.specifications.specification_1.item_4
      ]
    },
    {
      title: t.specifications.specification_2.title,
      items: [
        t.specifications.specification_2.item_1,
        t.specifications.specification_2.item_2,
        t.specifications.specification_2.item_3
      ]
    },
    {
      title: t.specifications.specification_3.title,
      items: [
        t.specifications.specification_3.item_1,
        t.specifications.specification_3.item_2,
        t.specifications.specification_3.item_3,
        t.specifications.specification_3.item_4
      ]
    },
    {
      title: t.specifications.specification_4.title,
      items: [
        t.specifications.specification_4.item_1,
        t.specifications.specification_4.item_2
      ]
    },
    {
      title: t.specifications.specification_5.title,
      items: [
        t.specifications.specification_5.item_1,
        t.specifications.specification_5.item_2
      ]
    },
    {
      title: t.specifications.specification_6.title,
      items: [
        t.specifications.specification_6.item_1,
        t.specifications.specification_6.item_2
      ]
    }
  ];
  const stepsInstallation = [
    {
      title: t.product.items.item_1_title,
      paragraph: t.product.items.item_1_paragraph
    },
    {
      title: t.product.items.item_2_title,
      paragraph: t.product.items.item_2_paragraph
    },
    {
      title: t.product.items.item_3_title,
      paragraph: t.product.items.item_3_paragraph
    },
    {
      title: t.product.items.item_4_title,
      paragraph: t.product.items.item_4_paragraph
    },
    {
      title: t.product.items.item_5_title,
      paragraph: t.product.items.item_5_paragraph
    },
    {
      title: t.product.items.item_6_title,
      paragraph: t.product.items.item_6_paragraph
    }
  ];
  const sliderImages = [
    productImg1,
    productImg2,
    productImg3,
    productImg1,
    productImg2,
    productImg3,
    productImg1,
    productImg2,
    productImg3
  ];
  const faqs = [
    {
      answer: t.faqs.item_1.answer,
      question: t.faqs.item_1.question
    },
    {
      answer: t.faqs.item_2.answer,
      question: t.faqs.item_2.question
    },
    {
      answer: t.faqs.item_3.answer,
      question: t.faqs.item_3.question
    },
    {
      answer: t.faqs.item_4.answer,
      question: t.faqs.item_4.question
    },
    {
      answer: t.faqs.item_5.answer,
      question: t.faqs.item_5.question
    },
    {
      answer: t.faqs.item_6.answer,
      question: t.faqs.item_6.question
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="product-hero"> <div class="flex flex-col text-left gap-4"> <h2 class="text-5xl font-semibold text-primary">CubeLift</h2> <h3 class="section-title max-w-sm text-white">${t.product.hero_title}</h3> <p class="paragraph max-w-sm text-white">${t.product.hero_description}</p> </div> <div class="mt-24 flex flex-row gap-4 items-center"> <a${addAttribute(getPath("request", lang), "href")} class="btn-request">${t.button.request}</a> <a href="/" class="text-primary font-bold cursor-pointer"> ${t.specification_show}</a> </div> </section> <section id="section-1" class="bg-white relative px-6 py-16 lg:px-18 lg:py-24 lg:min-h-[660px]"> <div class="flex flex-col justify-start items-center gap-8 max-w-3xl mx-auto lg:mx-0 lg:items-start"> <h3 class="section-title text-black">${t.product.section_1_title}</h3> <p class="paragraph text-black">${t.product.section_1_paragraph_1}</p> <p class="paragraph text-black">${t.product.section_1_paragraph_2}</p> <div class="w-full mt-8 lg:hidden"> ${renderComponent($$result, "Image", $$Image, { "src": productImg1, "alt": "Home Image 1", "class": "w-full h-auto object-contain" })} </div> </div> <div class="hidden lg:flex flex-col gap-12 absolute -top-24 right-24"> ${renderComponent($$result, "Image", $$Image, { "src": productImg1, "alt": "Home Image 1", "class": "w-lg" })} ${renderComponent($$result, "Image", $$Image, { "src": productImg2, "alt": "Home Image 1", "class": "w-lg" })} </div> </section> <section id="advantages" class="bg-black flex flex-col justify-center items-center gap-8 p-18"> <h3 class="section-title text-white max-w-2xl text-center text-pretty uppercase"> ${t.advantages.product_title} </h3> <div class="flex flex-wrap gap-8 justify-center"> ${advantageItems.map((item) => renderTemplate`${renderComponent($$result, "AdvantageItem", $$AdvantageItem, { ...item })}`)} </div> </section> <section id="specifications" class="flex flex-col bg-primary p-18"> <div class="flex flex-col flex-1 items-start justify-center gap-8 relative"> <h3 class="section-title text-black max-w-2xl text-pretty uppercase"> ${t.specifications.title} </h3> <p class="paragraph text-black max-w-xl text-pretty"> ${t.specifications.description} </p> <ul class="grid grid-cols-1 md:grid-cols-2 gap-12"> ${specifications.map((s, index) => renderTemplate`<li class="flex flex-col gap-6"> <div class="flex items-center gap-3 mb-2"> <span class="w-2.5 h-2.5 bg-black shrink-0"></span> <span class="text-black font-bold uppercase text-xl"> ${s.title} </span> </div> <ul class="flex flex-col gap-2"> ${s.items.map((i) => renderTemplate`<li class="flex items-center gap-2 text-black"> <span class="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span> <span class="font-light text-lg">${i}</span> </li>`)} </ul> ${index === specifications.length - 1 && renderTemplate`<a${addAttribute("#", "href")} class="btn-download"> ${t.button.download} </a>`} </li>`)} </ul> </div> </section> <section id="section-2" class="flex flex-col px-6 py-12 lg:px-20 lg:py-24 bg-white gap-12 items-start justify-center w-full"> <div class="flex flex-col gap-4 max-w-xl"> <h3 class="section-title text-black text-3xl md:text-4xl"> ${t.product.section_2_title} </h3> <p class="paragraph text-black text-base md:text-lg text-pretty leading-relaxed"> ${t.product.section_2_paragraph_1} </p> </div> <div class="flex flex-col md:flex-row flex-wrap gap-6 w-full"> ${stepsInstallation.map((item, index) => renderTemplate`<div class="flex flex-col gap-4 p-4 text-black w-full md:max-w-52"> <div class="flex flex-row gap-2 items-center"> <div class="aspect-square h-10 border-primary border-2 flex justify-center items-center text-primary font-bold"> ${index + 1} </div> <svg width="150" height="60" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg"${addAttribute(`stroke-primary ${index === stepsInstallation.length - 1 ? "opacity-0" : ""}`, "class")}> <line x1="20" y1="30" x2="230" y2="30" stroke-width="4" class="stroke-primary"></line> <polygon points="250,30 230,20 230,40" class="fill-primary"></polygon> </svg> </div> <h4 class="text-xl font-bold">${item.title}</h4> <p class="text-base font-light">${item.paragraph}</p> </div>`)} </div> </section> <section id="section-3" class="flex flex-col px-18 py-24 bg-cover bg-black gap-8 items-center justify-center"> <h3 class="section-title text-white text-3xl md:text-4xl max-w-xl text-center uppercase"> ${t.product.section_3_title} </h3> <div class="flex flex-col max-w-2xl justify-center items-center text-center"> <p class="paragraph text-white text-lg font-light md:text-lg text-clip"> ${t.product.section_3_paragraph_1} </p> <p class="paragraph text-white text-lg font-light md:text-lg text-clip"> ${t.product.section_3_paragraph_2} </p> </div> </section> <section id="slider" class="flex flex-col py-12 h-screen"> ${renderComponent($$result, "FullImageSlider", $$FullImageSlider, { "images": sliderImages })} </section> <section id="faqs" class="flex flex-col md:flex-row justify-start  gap-12 px-18 py-24 "> <h3 class="section-title text-black text-3xl md:text-4xl max-w-64 text-center uppercase"> ${t.faqs.title} </h3> <div class="flex flex-col gap-4 w-full"> ${faqs.map((item) => renderTemplate`<div class="flex flex-col gap-2"> <div class="flex flex-row border-b border-primary w-full gap-8 justify-start items-center pb-1"> <div class="bg-primary aspect-square h-3"></div> <p class="text-black text-lg uppercase">${item.question}</p> </div> <p class="text-black text-lg font-light pl-12">${item.answer}</p> </div>`)} </div> </section> ${renderComponent($$result, "RequestFooter", $$RequestFooter, { "lang": lang })}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Product.astro", void 0);

export { $$Product as $ };
