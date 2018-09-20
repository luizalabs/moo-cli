import { spawn } from 'child_process';
import { join } from 'path';
import { log, style } from '../../utils/console';
import jsDefCfgs from './js-def-cfgs';

export default function jsDefDeps(dir: string) {
  log(
    'MOOving default dependencies...',
    style.Bright,
    style.Yellow,
  );

  const cwd = join(process.cwd(), dir);
  const task = spawn(
    'npm i -D',
    [
      '@softboxlab/eslint-config-gandalf-lint',
      'eslint',
      'eslint-plugin-import',
      'eslint-plugin-sort-imports-es6-autofix',
    ],
    {
      cwd,
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
    return code ? console.log('Exit with code:', code) : jsDefCfgs(cwd);
  });
}
