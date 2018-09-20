import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { log, style } from '../../utils/console';

export default function jsDefCfgs(dir: string) {
  log(
    'MOOving default settings...',
    style.Bright,
    style.Green,
  );

  const pack = join(dir, 'package.json');
  const json = readFileSync(pack, { encoding: 'utf8' });
  const cfgs = JSON.parse(json);
  const { eslintConfig } = cfgs;

  cfgs.eslintConfig = eslint(eslintConfig);

  const result = JSON.stringify(cfgs, null, 2);

  writeFileSync(pack, result, { encoding: 'utf8' });

  log(
    'We started a new MOOvelous project!',
    style.Bright,
    style.Blue,
  );
}

// Helpers
function eslint(config: any) {
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
