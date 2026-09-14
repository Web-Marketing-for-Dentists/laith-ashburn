globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CwtSofnh.mjs';
import { manifest } from './manifest_DC8TBZlE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/appointment-request.astro.mjs');
const _page3 = () => import('./pages/appointment-request.astro.mjs');
const _page4 = () => import('./pages/disclaimer.astro.mjs');
const _page5 = () => import('./pages/general/_slug_.astro.mjs');
const _page6 = () => import('./pages/general.astro.mjs');
const _page7 = () => import('./pages/meet-your-dentist.astro.mjs');
const _page8 = () => import('./pages/patient-results.astro.mjs');
const _page9 = () => import('./pages/privacy-policy.astro.mjs');
const _page10 = () => import('./pages/root-canal.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/@astrojs+cloudflare@12.6.13_astro@5.18.2_rollup@4.62.5_typescript@5.9.3_yaml@2.9.0__yaml@2.9.0/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/appointment-request.ts", _page2],
    ["src/pages/appointment-request.astro", _page3],
    ["src/pages/disclaimer.astro", _page4],
    ["src/pages/general/[slug].astro", _page5],
    ["src/pages/general/index.astro", _page6],
    ["src/pages/meet-your-dentist.astro", _page7],
    ["src/pages/patient-results.astro", _page8],
    ["src/pages/privacy-policy.astro", _page9],
    ["src/pages/root-canal.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
