import * as Mustache from 'mustache';
import writeFile from '../utils/writeFile';

const TEMPLATE_PATH = '../templates';

const getFileExtension = ({ vue }: { vue: boolean }) => {
  return vue
    ? 'vue'
    : 'js';
};

const getTemplate = (templatePath: string, framework: string, type: string, append: string = '-comp') => {
  return require(`${templatePath}/${framework}/${type}${append}`).default;
};

export default async (framework: string, options: any) => {
  const { name, test, dest } = options;
  if (!dest || !name) {
    console.log('Could not create amazing stuff due to some arguments missing: either name or dest');
    return;
  }

  const fileTemplate = Mustache.render(getTemplate(TEMPLATE_PATH, framework, 'class'), options);
  writeFile(fileTemplate, name, getFileExtension(options), dest);

  if (test) {
    const testTemplate = Mustache.render(getTemplate(TEMPLATE_PATH, framework, 'test'), options);
    writeFile(testTemplate, name, 'test.js', dest);
  }

}
