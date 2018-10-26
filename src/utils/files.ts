import { writeFileSync } from 'fs';
import { join } from 'path';
import { mkdir } from 'shelljs';

export function write(
  content: string,
  name: string,
  ext: string,
  dir: string,
  fname: string = 'index',
) {
  const path = join(dir, name);
  const file = `${fname}.${ext}`;

  mkdir('-p', path);
  writeFileSync(join(path, file), content);
}
