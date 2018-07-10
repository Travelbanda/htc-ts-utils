const path = require('path')

const PROJECT_ROOT = __dirname
const PATH_SRC = path.resolve(PROJECT_ROOT, 'src')
const PATH_DIST = path.resolve(PROJECT_ROOT, 'dist')

module.exports = () => ({
  entry: path.join(PATH_SRC, 'index.ts'),

  output: {
    path: PATH_DIST,
    filename: 'htc-ts-utils.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  externals: [
    'tslib',
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            declaration: true,
            outDir: '../lib',
          },
        }
      },
    ],
  },

  devtool: 'source-map',
})
