import cow from 'cowsay';
import Mustache from 'mustache';
import { join } from 'path';

import reactTemplate from '../templates/react';
import vueTemplate from '../templates/vue';
import { write } from '../utils/files';
import options from '../utils/options';
import { ICommandOptions } from '../utils/options';
import { isRootPath } from '../utils/validations';

export default function comp(name: string, cmd: any) {
  if (isRootPath()) {
    const opts = options(cmd);
    const { dest, func, test } = opts;

    const framework = opts.react ? 'react' : opts.vue ? 'vue' : '';

    if (!framework) {
      console.log(
        '\n',
        'Framework option is required',
        '\n',
      );
      process.exit();
    }

    const type = func ? 'func' : 'comp';
    const ext = getExtension(opts);
    const dir = join(process.cwd(), dest);

    const data = { name, ...opts };
    const template = getTemplate(framework, type, opts.ts);
    const code = Mustache.render(template, data);
    write(code, name, ext, dir);

    if (test) {
      const tpltest = getTemplate(framework, 'test', opts.ts);
      const spec = Mustache.render(tpltest, data);
      const testExt = opts.ts ? 'ts' : 'js';
      write(spec, name, testExt, dir, 'index.test');
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
function getExtension({ react, ts }: ICommandOptions) {
  return react ? `${ts ? 't' : 'j'}sx` : 'vue';
}

function getTemplate(framework: string, type: string, ts?: boolean) {
  if (framework === 'react') {
    return reactTemplate(type, ts);
  }
  return vueTemplate(type, ts);
}
