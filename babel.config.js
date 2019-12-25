const presets = [
    '@babel/preset-react',
    [
        '@babel/preset-modules',
        {
            useBuiltIns: 'entry',
            modules: false,
            corejs: 3
        }
    ]
];

const plugins = [
    'babel-plugin-transform-react-class-to-function',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-syntax-dynamic-import'
];

const productionPlugins = [
    'transform-react-remove-prop-types',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements'
];

const env = {
    development: {
        plugins: [ '@babel/transform-react-jsx-source' ]
    },
    production: {
        plugins: productionPlugins
    },
    production_legacy: {
        presets: [
            '@babel/preset-env'
        ],
        plugins: productionPlugins
    },
    test: {
        plugins: [
            '@babel/plugin-transform-modules-commonjs',
            'dynamic-import-node'
        ]
    }
};

module.exports = {
    presets,
    plugins,
    env
};
