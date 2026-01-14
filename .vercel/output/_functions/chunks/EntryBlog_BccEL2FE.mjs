import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, u as unescapeHTML, d as addAttribute, e as renderTransition, a as renderTemplate } from './astro/server_DrRuWExZ.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_C324Zr3R.mjs';
import { i as img } from './blog-img-1_DvkQnRU7.mjs';
import { g as getTranslations } from './Layout_Cjn6Kemb.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$EntryBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntryBlog;
  const { lang } = Astro2.props;
  const t = getTranslations(lang);
  const slug = "example-blog";
  const title = "La importancia de contar con un ascensor en casa.";
  const date = "8 Marzo 2024";
  const content = `<p>Disponer de un ascensor neum\xE1tico unifamiliar en tu vivienda aporta muchas ventajas al modo de vida de los que te rodean. En primer lugar, los ascensores neum\xE1ticos son una forma c\xF3moda de desplazarse y totalmente segura, tanto para los mayores como para los m\xE1s peque\xF1os.</p>

<p>Adem\xE1s, el ascensor es un elemento fundamental en el hogar, ya que conecta los distintos niveles de la vivienda y permite a los hu\xE9spedes ir de una planta a otra sin necesidad de utilizar las escaleras. Por todo ello, en ciertas circunstancias y situaciones el uso de los ascensores es indispensable para poder llevar a cabo una vida c\xF3moda en el hogar.</p>

<p>Los ascensores de PVE cuentan con un sistema basado en el poder del aire, lo que consigue que su funcionamiento sea sostenible, por lo que son ascensores ecol\xF3gicos. Adem\xE1s, su consumo energ\xE9tico es muy bajo por lo que no suponen un gran gasto de luz, ya que el consumo de energ\xEDa es reducido en su recorrido de ascenso y nulo en el descenso.</p>

<p>Si te preocupan las obras, debes saber que la instalaci\xF3n de los ascensores neum\xE1ticos dura tan solo 48 horas y se realiza de tal manera que no es necesario llevar a cabo obras. De este modo, instalando un ascensor neum\xE1tico, PVE se asegura de que el proceso sea r\xE1pido, seguro y eficiente.</p>

<p>En cuanto al cuidado de estos ascensores, apenas se necesita supervisi\xF3n ya que cuenta con un sistema seguro cuyo mantenimiento es m\xEDnimo. De este modo, los ascensores neum\xE1ticos no sufren aver\xEDas, ya que est\xE1n dise\xF1ados para ejecutar de manera segura un protocolo ante cualquier problema o atasco, para ello, la cabina simplemente se desliza de forma suave hasta alcanzar el suelo.</p>

<p>La empresa PVE, creadora de los ascensores neum\xE1ticos, dispone de precios muy competentes y econ\xF3micos, por lo que instalar un ascensor neum\xE1tico es barato y adem\xE1s aporta gran calidad en el hogar a un precio razonable y justo. Adem\xE1s, ofrece una garant\xEDa de dos a\xF1os.</p>

<p>Otro aspecto clave de los ascensores neum\xE1ticos de PVE es su dise\xF1o exclusivo y moderno que aportar\xE1 un car\xE1cter \xFAnico a tu vivienda.</p>

<p>Por todo ello, invertir en un ascensor neum\xE1tico PVE cambiar\xE1 significativamente tu modo de vida y el de tus seres queridos.</p>`;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white px-6 py-10 md:px-18 md:py-16 flex flex-col gap-8"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": title, "class": "w-full max-w-5xl object-cover aspect-video", "data-astro-transition-scope": renderTransition($$result, "dpuvk7sj", "", `blog-image-${slug}`) })} <div class="flex flex-col justify-between w-full max-w-2xl gap-4"> <p class="text-sm text-gray-500 font-light">${date}</p> <h3 class="text-2xl md:text-3xl font-bold text-pretty text-black max-w-96 flex-1 flex justify-center items-center">${title}</h3> <p class="text-sm md:text-base font-light text-gray-500 flex-1">${unescapeHTML(content)}</p> <a${addAttribute(`/${lang}/blog`, "href")} class="inline-flex items-center gap-2 text-sm font-light text-gray-500 mt-4 cursor-pointer hover:text-black"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-4 h-4"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path> </svg> <span>${t.blog.back}</span> </a> </div> </section>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/EntryBlog.astro", "self");

export { $$EntryBlog as $ };
