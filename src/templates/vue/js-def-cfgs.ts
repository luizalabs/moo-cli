import cowsay from 'cowsay';
import { join } from 'path';
import { rm } from 'shelljs';
import { log, style } from '../../utils/console';
import { read, readJSON, write, writeJSON } from '../../utils/files';

export default function jsDefCfgs(dir: string) {
  log(
    'MOOving default settings...',
    style.Bright,
    style.Green,
  );

  delTests(dir);
  eslintTask(dir);
  babelConfig(dir);
  processMain(dir);
  processHello(dir);

  console.log(
    cowsay.say({
      text: 'We started a new MOOvelous project!',
    }),
  );
}

// Eslint
function eslintTask(dir: string) {
  const pack = readJSON(dir, 'package.json');
  const { eslintConfig } = pack;

  pack.eslintConfig = eslintSettings(eslintConfig);

  writeJSON(pack, dir, 'package.json');
}

function eslintSettings(config: any) {
  config.extends = [
    'plugin:vue/recommended',
    '@vue/standard',
    '@softboxlab/gandalf-lint',
  ];

  config.rules = {
    'arrow-parens': ['error', 'as-needed'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
        ],
      },
    ],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-underscore-dangle': 'off',
    'sort-imports': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': 'off',
    'sort-keys': 'off',
  };

  config.overrides = {
    env: {
      jest: true,
    },
    files: ['**/*.spec.js', '**/*.test.js'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  };

  return config;
}

// Workarounds
function babelConfig(dir: string) {
  const file = join(dir, 'babel.config.js');
  const pack = readJSON(dir, 'package.json');

  rm(file);

  pack.babel = {
    presets: ['@vue/app'],
  };

  writeJSON(pack, dir, 'package.json');
}

function processMain(dir: string) {
  const code = read(dir, 'src', 'main.js');
  const result = code.replace('h => h', 'create => create');

  write(result, dir, 'src', 'main.js');
}

function processHello(dir: string) {
  const code = read(dir, 'src', 'components', 'HelloWorld.vue');
  const result = code.replace('msg: String', 'msg: { type: String, default: \'\' }');

  write(result, dir, 'src', 'components', 'HelloWorld.vue');
}

function delTests(dir: string) {
  const path = join(dir, 'tests');

  rm('-rf', path);
}
