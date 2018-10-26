import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { mkdir } from 'shelljs';

export function read(...args: string[]) {
  const path = join(...args);
  const file = readFileSync(path, 'utf8');

  return file;
}

export function write(content: string, ...args: string[]) {
  const path = join(...args);

  writeFileSync(path, content, 'utf8');
}

export function readJSON(...args: string[]) {
  const file = read(...args);

  return JSON.parse(file);
}

export function writeJSON(content: string, ...args: string[]) {
  const result = JSON.stringify(content, null, 2);

  write(result, ...args);
}

export function writeCode(
  content: string,
  name: string,
  ext: string,
  dir: string,
  fname: string = 'index',
) {
  const path = join(dir, name);
  const file = `${fname}.${ext}`;

  mkdir('-p', path);
  write(content, path, file);
}
