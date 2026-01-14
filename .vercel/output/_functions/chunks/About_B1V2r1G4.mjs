import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_C324Zr3R.mjs';
import { g as getTranslations } from './Layout_Cjn6Kemb.mjs';

const Logo = new Proxy({"src":"/_astro/logo-big.C26SkhLj.png","width":179,"height":160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/public/brand/logo-big.png";
							}
							
							return target[name];
						}
					});

const img1 = new Proxy({"src":"/_astro/about-img-1.C7ZJKigu.png","width":625,"height":364,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/about/about-img-1.png";
							}
							
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/about-img-2.BvAPWo2D.png","width":521,"height":363,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/about/about-img-2.png";
							}
							
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/about-img-3.BiXF8gzE.png","width":1223,"height":524,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/about/about-img-3.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { lang } = Astro2.props;
  const t = getTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="about-hero "> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "CubeLifts logo", "class": "w-44 h-auto" })} </section> <section id="section-1" class="flex flex-col justify-center items-center p-18 gap-12 bg-[linear-gradient(to_bottom,var(--color-primary)_70%,white_70%)]"> <p class="text-center text-clip text-lg md:text-xl lg:text-2xl xl:text-3xl font-light max-w-5xl">${t.about.section_1_paragraph}</p> <div class="flex flex-col xl:flex-row gap-8 "> ${renderComponent($$result, "Image", $$Image, { "src": img1, "alt": "CubeLifts img 1", "class": "w-auto object-cover" })} ${renderComponent($$result, "Image", $$Image, { "src": img2, "alt": "CubeLifts img 2", "class": "w-auto object-cover" })} </div> </section> <section id="our-mission" class="bg-white p-18 flex flex-col gap-12 justify-center items-center"> <h3 class="text-4xl text-center capitalize">${t.about.our_mission}</h3> <p class="font-light text-center max-w-4xl text-xl">${t.about.our_mission_paragraph_1}</p> <h2 class="text-5xl max-w-3xl leading-16 text-center capitalize">${t.about.company_name}</h2> <h2 class="text-xl font-bold text-center capitalize">${t.about.company_acronym}</h2> <p class="font-light text-center max-w-4xl text-xl">${t.about.our_mission_paragraph_2}</p> <p class="font-light text-center max-w-4xl text-xl">${t.about.our_mission_paragraph_3}</p> ${renderComponent($$result, "Image", $$Image, { "src": img3, "alt": "CubeLifts img 3", "class": "w-auto object-cover" })} <p class="font-light text-center text-balance max-w-4xl text-xl">${t.about.our_mission_paragraph_4}</p> <div class="flex flex-col xl:flex-row gap-8 justify-center items-center"> <a href="" class="btn-about">${t.about.buttons.policy_quality}</a> <a href="" class="btn-about">${t.about.buttons.quality_certificate}</a> <a href="" class="btn-about">${t.about.buttons.certificate}</a> </div> </section>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/About.astro", void 0);

export { $$About as $ };
