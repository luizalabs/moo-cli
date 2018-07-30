import * as ShellJS from 'shelljs';
import { projectRootPath } from './default-path';

const writeFile = (fileContent: string, fileName: string, fileExtension: string, path: string) => {
  const candidateFileName = `${fileName}.${fileExtension}`;
  const dataPath = `${path}/${fileName}`;

  // if (ShellJS.test('-e', `${dataPath}.${fileExtension}`)) {
  ShellJS.mkdir('-p', dataPath);
  ShellJS.cd(dataPath);
  ShellJS.echo(fileContent)
    .to(`${candidateFileName}`);

  ShellJS.cd(projectRootPath(dataPath))
  return;
  // }

  // console.warn('This component already exists');
}


export default writeFile;
