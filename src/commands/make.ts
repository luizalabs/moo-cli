import cow from 'cowsay';
import Mustache from 'mustache';
import { join } from 'path';

import reactTemplate from '../templates/react';
import vueTemplate from '../templates/vue';
import { write } from '../utils/files';
import options from '../utils/options';
import { isRootPath } from '../utils/validations';

export default function make(name: string, cmd: any) {
  if (isRootPath()) {
    const opts = options(cmd);
    const { dest, func, test } = opts;

    const framework = opts.react ? 'react' : 'vue';
    const type = func ? 'func' : 'comp';
    const ext = opts.react ? 'jsx' : 'vue';
    const dir = join(process.cwd(), dest);

    const template = getTemplate(framework, type);
    const code = Mustache.render(template, options);

    write(code, name, ext, dir);

    if (test) {
      const tpltest = getTemplate(framework, 'test');
      const spec = Mustache.render(tpltest, options);
      write(spec, name, 'js', dir, 'index.test');
    }

    console.log(
      '\n',
      cow.say({
        text: `Ok, ${name} component is ready!`,
      }),
      '\n',
    );
  }
}

// helpers
function getTemplate(framework: string, type: string) {
  if (framework === 'react') {
    return reactTemplate(type);
  }
  return vueTemplate(type);
}
