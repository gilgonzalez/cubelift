import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_cxlzxPVA.mjs';
import { manifest } from './manifest_Dky5oWiv.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/en/about.astro.mjs');
const _page2 = () => import('./pages/en/blog/example-blog.astro.mjs');
const _page3 = () => import('./pages/en/blog.astro.mjs');
const _page4 = () => import('./pages/en/contact.astro.mjs');
const _page5 = () => import('./pages/en/product.astro.mjs');
const _page6 = () => import('./pages/en/request-quote.astro.mjs');
const _page7 = () => import('./pages/en.astro.mjs');
const _page8 = () => import('./pages/es/blog/example-blog.astro.mjs');
const _page9 = () => import('./pages/es/blog.astro.mjs');
const _page10 = () => import('./pages/es/contacto.astro.mjs');
const _page11 = () => import('./pages/es/producto.astro.mjs');
const _page12 = () => import('./pages/es/sobre-nosotros.astro.mjs');
const _page13 = () => import('./pages/es/solicita-presupuesto.astro.mjs');
const _page14 = () => import('./pages/es.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en/about.astro", _page1],
    ["src/pages/en/blog/example-blog.astro", _page2],
    ["src/pages/en/blog/index.astro", _page3],
    ["src/pages/en/contact.astro", _page4],
    ["src/pages/en/product.astro", _page5],
    ["src/pages/en/request-quote.astro", _page6],
    ["src/pages/en/index.astro", _page7],
    ["src/pages/es/blog/example-blog.astro", _page8],
    ["src/pages/es/blog/index.astro", _page9],
    ["src/pages/es/contacto.astro", _page10],
    ["src/pages/es/producto.astro", _page11],
    ["src/pages/es/sobre-nosotros.astro", _page12],
    ["src/pages/es/solicita-presupuesto.astro", _page13],
    ["src/pages/es/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dbba5656-544a-4379-842d-4888e73ff72b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
