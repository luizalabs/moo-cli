export default {
  'js-sass-jest-pwa': {
    cssPreprocessor: 'sass',
    plugins: {
      '@vue/cli-plugin-babel': {},
      '@vue/cli-plugin-eslint': {
        config: 'standard',
        lintOn: ['save', 'commit'],
      },
      '@vue/cli-plugin-pwa': {},
      '@vue/cli-plugin-unit-jest': {},
    },
    router: true,
    routerHistoryMode: true,
    useConfigFiles: false,
    vuex: true,
  },
  'js-stylus-jest-pwa': {
    cssPreprocessor: 'stylus',
    plugins: {
      '@vue/cli-plugin-babel': {},
      '@vue/cli-plugin-eslint': {
        config: 'standard',
        lintOn: ['save', 'commit'],
      },
      '@vue/cli-plugin-pwa': {},
      '@vue/cli-plugin-unit-jest': {},
    },
    router: true,
    routerHistoryMode: true,
    useConfigFiles: false,
    vuex: true,
  },
  'ts-sass-jest-pwa': {
    cssPreprocessor: 'sass',
    plugins: {
      '@vue/cli-plugin-babel': {},
      '@vue/cli-plugin-pwa': {},
      '@vue/cli-plugin-typescript': {
        classComponent: true,
        lintOn: ['save', 'commit'],
        tsLint: true,
        useTsWithBabel: true,
      },
      '@vue/cli-plugin-unit-jest': {},
    },
    router: true,
    routerHistoryMode: true,
    useConfigFiles: false,
    vuex: true,
  },
  'ts-stylus-jest-pwa': {
    cssPreprocessor: 'stylus',
    plugins: {
      '@vue/cli-plugin-babel': {},
      '@vue/cli-plugin-pwa': {},
      '@vue/cli-plugin-typescript': {
        classComponent: true,
        lintOn: ['save', 'commit'],
        tsLint: true,
        useTsWithBabel: true,
      },
      '@vue/cli-plugin-unit-jest': {},
    },
    router: true,
    routerHistoryMode: true,
    useConfigFiles: false,
    vuex: true,
  },
};
