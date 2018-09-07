import { spawn } from 'child_process';
import presets from '../templates/vue/presets';

export default function vue(dir: string, pre: string) {
  console.log(
    '\n',
    'Preparing project archtecture...',
    '\n',
  );

  const preset = JSON.stringify(presets[pre]);
  const task = spawn(
    'npx',
    ['-p', '@vue/cli', 'vue', 'create', dir, '-i', `'${preset}'`],
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
    return code && console.log('Exit with code:', code);
  });
}
