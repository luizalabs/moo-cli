import * as Mustache from 'mustache';
// import { pathInSrc } from '../utils/default-path'
import reactComp from '../templates/react/comp.js';
import reactFuncComp from '../templates/react/func.js';
import reactTest from '../templates/react/test.js';
import writeFile from '../utils/write-file';

// const TEMPLATE_PATH = pathInSrc('templates');

const getFileExtension = ({ vue }: { vue: boolean }) => {
  return vue
    ? 'vue'
    : 'js';
};

const getTemplate = (framework: string, type: string) => {
  if (framework === 'react') {
    return type === 'comp'
      ? reactComp
      : reactComp === 'test'
        ? reactFuncComp
        : reactTest;
  }

  throw new Error('could not find path');
};

// const getTemplate = (templatePath: string, framework: string, type: string, append: string = '') => {
//   return require(`${templatePath}/${framework}/${type}${append}`).default;
// };

export default async (framework: string, options: any) => {
  const { name, test, dest, functional } = options;
  if (!dest || !name) {
    console.log('Could not create amazing stuff due to some arguments missing: either name or dest');
    return;
  }

  const type = functional
    ? 'func'
    : 'comp';

  // const fileTemplate = Mustache.render(getTemplate(TEMPLATE_PATH, framework, type), options);
  const fileTemplate = Mustache.render(getTemplate(framework, type), options);
  writeFile(fileTemplate, name, getFileExtension(options), dest);

  if (test) {
    // const testTemplate = Mustache.render(getTemplate(TEMPLATE_PATH, framework, 'test'), options);
    const testTemplate = Mustache.render(getTemplate(framework, 'test'), options);
    writeFile(testTemplate, name, 'test.js', dest);
  }

};
