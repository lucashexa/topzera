const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Ct Brazil Components',
    description:
      'renders all basic components for call taker on call application',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Ct Brazil Components',
        description:
          'renders all basic components for call taker on call application',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\projetos\\components-gpc\\ct-brazil-components',
          templates:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz',
          cache:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz\\.cache',
          app: 'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz\\app',
          appPackageJson:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\package.json',
          gatsbyConfig:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\gatsby-browser.js',
          gatsbyNode:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\gatsby-node.js',
          gatsbySSR:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\gatsby-ssr.js',
          importsJs:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz\\app\\imports.js',
          rootJs:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz\\app\\index.html',
          db:
            'C:\\projetos\\components-gpc\\ct-brazil-components\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
