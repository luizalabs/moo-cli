import { writeFileSync } from 'fs';
import mkdirp from 'mkdirp';
import { join } from 'path';

export function write(
  content: string,
  name: string,
  ext: string,
  dir: string,
  fname: string = 'index',
) {
  const path = join(dir, name);
  const file = `${fname}.${ext}`;
  const result = join(path, file);

  mkdirp.sync(path);
  writeFileSync(result, content);
}
