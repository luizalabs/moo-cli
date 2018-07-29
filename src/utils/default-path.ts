import * as path from 'path';

const ROOT_PATH = '../';

export default (to: string) => path.relative(ROOT_PATH, to);

export const projectRootPath = (currentPath: string) => (
  currentPath.split('/').reduce((acc) => path.join(acc, '..'), '')
);
