import { statSync } from 'fs';
import { join } from 'path';

const cwd = process.cwd();
const pack = join(cwd, 'package.json');

export function isRootPath() {
  try {
    statSync(pack);
    return true;
  } catch (error) {
    console.log(
      '\n',
      'Sorry!',
      'Run moo-cli on your project root directoy.',
      '(same place where you can find the `package.json` file)',
      '\n',
    );
    return false;
  }
}
