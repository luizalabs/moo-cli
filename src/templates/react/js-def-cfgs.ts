import cowsay from 'cowsay';
import { log, style } from '../../utils/console';
import { readJSON, writeJSON } from '../../utils/files';

export default function jsDefCfgs(dir: string) {
  log(
    'MOOving default settings...',
    style.Bright,
    style.Green,
  );

  eslintTask(dir);

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
    'react/app',
    '@softboxlab/gandalf-lint',
  ];

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
