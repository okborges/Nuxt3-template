module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:prettier-vue/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
      },
    ],
  },
  globals: {
    $nuxt: true,
  },
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
        customBlocks: {
          docs: { lang: 'markdown' },
          config: { lang: 'json' },
          module: { lang: 'js' },
          comments: false,
        },
      },
      usePrettierrc: true,
      fileInfoOptions: {
        ignorePath: '.testignore',
        withNodeModules: false,
      },
    },
  },
}
