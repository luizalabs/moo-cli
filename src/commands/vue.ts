import { spawn } from 'child_process';
import jsDefDeps from '../templates/vue/js-def-deps';
import presets from '../templates/vue/presets';
import { log, style } from '../utils/console';

export default function vue(dir: string, pre: string) {
  log(
    'Building project architecture...',
    style.Bright,
    style.Red,
  );

  const preset = JSON.stringify(presets[pre]);
  const task = spawn(
    `npx rimraf ${dir} && npx -p @vue/cli`,
    ['vue', 'create', dir, '-i', `'${preset}'`],
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

    return pre.startsWith('js-') ? jsDefDeps(dir) : console.log(dir);
  });
}
