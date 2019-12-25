import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH && !process.env.DEV;

import pkg from './package.json';

const config = {
    input: 'src/index.js',
    output: [
        {
            file: pkg.browser,
            format: 'umd',
            name: 'index'
        },
        {
            file: pkg.main,
            format: 'cjs',
            name: 'index'
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    external: [
        'react',
        'react-dom',
    ],
    plugins: [
        peerDepsExternal(),
        babel({ exclude: 'node_modules/**' }),
        localResolve(),
        resolve(),
        filesize(),
        production && terser({
            output: {
                comments: false
            },
            compress: true,
        })
    ]
};

export default config;
