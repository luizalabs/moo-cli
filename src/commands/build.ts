import * as Mustache from 'mustache';
import { isFileOnCurrentDirectory } from '../utils/default-path';
import writeFile from '../utils/write-file';
import getReactTemplate from './react-template';
import getVueTemplate from './vue-template';

const isOnRootPath = () => (
  isFileOnCurrentDirectory('package.json')
);

const getFileExtension = ({ vue }: { vue: boolean }) => {
  return vue
    ? 'vue'
    : 'js';
};

const getTemplate = (framework: string, type: string) => {
  if (framework === 'react') {
    return getReactTemplate(type);
  }

  if (framework === 'vue') {
    return getVueTemplate(type);
  }

  throw new Error('could not find path');
};

const isValidBuild = (dest: string, name: string) => {
  if (!dest || !name) {
    console.log('Could not create amazing stuff due to some arguments missing: either name or dest');
    return false;
  }

  if (!isOnRootPath()) {
    console.log('Sorry! Run moo-cli on your root directoy (same place where you can find the `package.json` file)');
    return false;
  }

  return true;
};

const createComponentFile = (framework: string, type: string, name: string, dest: string, options: any) => {
  const fileTemplate = Mustache.render(getTemplate(framework, type), options);
  writeFile(fileTemplate, name, getFileExtension(options), dest);
};

const createTestFile = (framework: string, name: string, dest: string, options: any) => {
  const testTemplate = Mustache.render(getTemplate(framework, 'test'), options);
  writeFile(testTemplate, name, 'test.js', dest);
};

export default async (framework: string, options: any) => {
  const { name, test, dest, functional } = options;

  if (isValidBuild(dest, name)) {
    const type = functional
      ? 'func'
      : 'comp';

    createComponentFile(framework, type, name, dest, options);

    if (test) {
      createTestFile(framework, name, dest, options);
    }
  }
};
