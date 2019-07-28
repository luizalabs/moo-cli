import { spawn } from 'child_process';
import { rm } from 'shelljs';
import reactJSDefDeps from '../templates/react/js-def-deps';
import reactPresets from '../templates/react/presets';
import vueJSDefDeps from '../templates/vue/js-def-deps';
import vuePresets from '../templates/vue/presets';
import { log, style } from './console';
import JuggernautCli from './juggernaut-cli';

export default function build(framework: string, dir: string, pre: string, boilerplate = '') {
  log(
    `Building ${framework} project architecture, please be patient...`,
    style.Bright,
    style.Red,
  );

  rm('-rf', dir);
  if (boilerplate === 'juggernaut') {
    const juggernautCli = new JuggernautCli(dir);
    juggernautCli.cloneJuggernaut();
    juggernautCli.insertNameProject();
    return;
  }
  const presets = framework === 'vue' ? vuePresets : reactPresets;
  const selected = JSON.stringify(presets[pre]);
  const command = npxCommandByFramework(framework, dir, selected);

  const task = spawn('npx', command, {
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

function npxCommandByFramework(framework: string, dir: string, preset: string): string[] {
  const cli = {
    react: ['create-react-app', dir, preset],
    vue: ['-p', '@vue/cli', 'vue', 'create', dir, '-i', `'${preset}'`],
  };

  return cli[framework];
}
