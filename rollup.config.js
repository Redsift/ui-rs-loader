import fs from 'fs';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import html from 'rollup-plugin-html';

import pkg from './package.json';

const isWatching = Boolean(process.env.ROLLUP_WATCH);
const isProduction = Boolean(process.env.NODE_ENV === 'production');
const isDevelopment = !isProduction;

const baseConfig = {
  input: 'src/index.js',
}


const getPlugins = async () => {
  return [
    babel({
      exclude: ['node_modules/**']
    }),
    html({
      include: '**/*.tmpl'
    }),
    postcss({
      extract: './dist/css/ui-rs-loader.min.css',
      minimize: true,
    }),
    terser({
      sourcemap: isDevelopment,
    }),
  ];
}


export default (async () => ([
  // browser-friendly UMD build
  {
    output: {
      name: 'ui-rs-loader',
      file: pkg.browser,
      format: 'umd',
      sourcemap: isDevelopment,
    },
    plugins: [
      resolve(),
      commonjs(),
      isWatching && (await import('rollup-plugin-serve'))({
        host: 'localhost',
        port: 3231,
        contentBase: ['dist', 'examples'],
        historyApiFallback: true,
        historyApiFallback: '/loader.html',
      }),
      ...await getPlugins(),
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      ...await getPlugins(),
    ]
  }
].map(config => ({
  ...baseConfig,
  ...config,
}))));
