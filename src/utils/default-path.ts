import * as path from 'path';
import { ls } from 'shelljs';

const resolve = (from: string, to: string) => path.resolve(from, to);

const ROOT_PATH = resolve(process.cwd(), './');

export default (to: string) => path.relative(ROOT_PATH, to);

export const isFileOnCurrentDirectory = (file: string) => (
  Boolean(ls('./*.json').filter((el: string) => el.toLowerCase().indexOf(file.toLowerCase()) !== -1).length)
);

// Boolean(ls('./*.json').filter(function (el) { return el.toLowerCase().indexOf(file.toLowerCase()) !== -1 }).length)

export const pathInSrc = (to: string) => (
  resolve(ROOT_PATH, `src/${to}`)
);

export const projectRootPath = (currentPath: string) => (
  currentPath.split('/').reduce((acc) => path.join(acc, '..'), '')
);
