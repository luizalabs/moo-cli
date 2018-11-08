import cow from 'cowsay';
import Mustache from 'mustache';
import { join } from 'path';

import { reactFluxTemplate } from '../templates/react';
import { vueFluxTemplate } from '../templates/vue';
import { writeCode } from '../utils/files';
import options from '../utils/options';
import { ICommandOptions } from '../utils/options';
import { isRootPath } from '../utils/validations';

export default function flux(name: string, actiondir: string, reducerdir: string, cmd: any) {
  if (isRootPath()) {
    const opts = options(cmd);
    const framework = opts.react ? 'react' : opts.vue ? 'vue' : '';

    if (!framework) {
      console.log(
        '\n',
        'Framework option is required',
        '\n',
      );
      process.exit();
    }

    const ext = getExtension(opts);
    const cwd = process.cwd();
    const data = { name, actiondir, reducerdir, ...opts };

    const actionDirOutput = join(cwd, actiondir);
    const reducerDirOutput = join(cwd, reducerdir);

    const templateAction = getTemplate(framework, 'action', opts.ts);
    const templateReducer = getTemplate(framework, 'reducer', opts.ts);

    const actionFile = Mustache.render(templateAction, data);
    const reducerFile = Mustache.render(templateReducer, data);

    writeCode(actionFile, '', ext, actionDirOutput, name);
    writeCode(reducerFile, '', ext, reducerDirOutput, name);

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
function getExtension({ ts }: ICommandOptions) {
  return `${ts ? 't' : 'j'}s`;
}

function getTemplate(framework: string, type: string, ts?: boolean) {
  if (framework === 'react') {
    return reactFluxTemplate(type, ts);
  }
  return vueFluxTemplate(type, ts);
}
