import * as path from 'path';

const resolve = (from: string, to: string) => path.resolve(from, to);

const ROOT_PATH = resolve(process.cwd(), './');

export default (to: string) => path.relative(ROOT_PATH, to);

export const pathInSrc = (to: string) => (
  resolve(ROOT_PATH, `src/${to}`)
);

export const projectRootPath = (currentPath: string) => (
  currentPath.split('/').reduce((acc) => path.join(acc, '..'), '')
);
