const path = require('path')

module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:import/typescript',
    ],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        debugLevel: false,
    },
    rules: {
        semi: ['error', 'never'],
        'no-console': 'error',
        'no-unused-vars': 1,
        // 'import/no-unresolved': 0
        // 'import/no-unresolved': [2, { caseSensitive: false }],
        '@typescript-eslint/explicit-module-boundary-types': 0,
        indent: ['error', 4],
        'import/extensions': 0,
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 1,
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state',
            ],
        }],
        'import/no-cycle': 2,
    },
    settings: {
        'import/resolver': [
            {
                webpack: {
                    config: path.join(__dirname, 'webpack.dev.config.js'),
                },
            },
            {
                typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
            },
            {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    moduleDirectory: ['node_modules', 'src/'],
                    paths: ['.'],
                },
            },
            {
                alias: [
                    ['app', './src/app'],
                ],
            },
        ],
        react: {
            version: 'detect',
        },
    },
}
