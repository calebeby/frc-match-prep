const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const preactBabel = require('babel-preset-preact')
const historyApiFallback = require('connect-history-api-fallback')

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: [
    '.c9/**/*',
    '**/layout.sgr',
    '**/_*',
    '**/.*',
    'readme.md',
    'yarn.lock'
  ],
  reshape: htmlStandards({
    locals: ctx => {
      return { pageId: pageId(ctx), foo: 'bar' }
    }
  }),
  postcss: cssStandards(),
  babel: jsStandards({
    appendPresets: [preactBabel]
  }),
  server: {
    middleware: [historyApiFallback()]
  }
}
