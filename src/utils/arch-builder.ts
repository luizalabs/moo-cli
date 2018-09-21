import { spawn } from 'child_process';
import reactJSDefDeps from '../templates/react/js-def-deps';
import reactPresets from '../templates/react/presets';
import vueJSDefDeps from '../templates/vue/js-def-deps';
import vuePresets from '../templates/vue/presets';
import { log, style } from './console';

export default function build(framework: string, dir: string, pre: string) {
  log(
    'Building project architecture...',
    style.Bright,
    style.Red,
  );

  const presets = framework === 'vue' ? vuePresets : reactPresets;
  const presetData = JSON.stringify(presets[pre]);
  const npxCommand = npxCommandByFramework(framework, dir);
  const npxOptions = npxOptionsByFramework(framework, dir, presetData);

  const task = spawn(
    npxCommand,
    npxOptions,
    {
      cwd: process.cwd(),
      shell: true,
    });

  task.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  task.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  task.on('error', (err) => {
    console.log('An error has occurred!', '\n', err);
  });

  task.on('close', (code) => {
    if (code) {
      return console.log('Exit with code:', code);
    }

    if (pre.startsWith('js-')) {
      return framework === 'vue' ? vueJSDefDeps(dir) : reactJSDefDeps(dir);
    }
  });
}

function npxCommandByFramework(framework: string, dir: string): string {
  const npmPackage = framework === 'vue' ? '@vue/cli' : 'create-react-app';

  return `npx rimraf ${dir} && npx -p ${npmPackage}`;
}

function npxOptionsByFramework(framework: string, dir: string, presetData: any): any[] {
  return framework === 'vue'
    ? ['vue', 'create', dir, '-i', `'${presetData}'`]
    : ['create-react-app', dir, `--scripts-version=${presetData}`];
}
