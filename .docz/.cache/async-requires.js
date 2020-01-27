// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---development-guidelines-mdx": () => import("./../../DevelopmentGuidelines.mdx" /* webpackChunkName: "component---development-guidelines-mdx" */),
  "component---readme-mdx": () => import("./../../README.mdx" /* webpackChunkName: "component---readme-mdx" */),
  "component---src-components-components-mdx": () => import("./../../src/components/Components.mdx" /* webpackChunkName: "component---src-components-components-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

