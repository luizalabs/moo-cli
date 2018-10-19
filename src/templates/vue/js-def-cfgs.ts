import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { log, style } from '../../utils/console';

export default function jsDefCfgs(dir: string) {
  log(
    'MOOving default settings...',
    style.Bright,
    style.Green,
  );

  eslintTask(dir);
  processMain(dir);
  processHello(dir);

  log(
    'We started a new MOOvelous project!',
    style.Bright,
    style.Blue,
  );
}

// Eslint
function eslintTask(dir: string) {
  const pack = join(dir, 'package.json');
  const json = readFileSync(pack, 'utf8');
  const cfgs = JSON.parse(json);
  const { eslintConfig } = cfgs;

  cfgs.eslintConfig = eslintSettings(eslintConfig);

  const result = JSON.stringify(cfgs, null, 2);

  writeFileSync(pack, result, 'utf8');
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
function processMain(dir: string) {
  const file = join(dir, 'src', 'main.js');
  const code = readFileSync(file, 'utf8');
  const result = code.replace('h => h', 'create => create');
  writeFileSync(file, result, 'utf8');
}

function processHello(dir: string) {
  const file = join(dir, 'src', 'components', 'HelloWorld.vue');
  const code = readFileSync(file, 'utf8');
  const result = code.replace('msg: String', 'msg: { type: String, default: \'\' }');
  writeFileSync(file, result, 'utf8');
}
