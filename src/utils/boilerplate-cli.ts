import chalk from 'chalk';
import figlet from 'figlet';
import fs from 'fs';
import { join } from 'path';
import shell from 'shelljs';
import { boilerplates } from '../common/boilerplates';

class BoilerplateCli {
  public dirName: string;
  public boilerplate: string;

  constructor (dirname: string, boilerplate: string) {
    this.dirName = dirname;
    this.boilerplate = boilerplate;
  }

  public insertNameProject () {
    const packagePath = join(`${process.cwd()}`, 'package.json');
    const packageJson = require(packagePath);

    packageJson.name = this.dirName;
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, '\t'));
  }

  public cloneJuggernaut () {
    if (!shell.which('git')) {
      shell.echo('Sorry but this script requires Git.');
      shell.exit(1);
    }

    shell.echo(
      chalk.hex('#FBD488')(
        figlet.textSync('Juggernaut', {
          horizontalLayout: 'default',
          verticalLayout: 'default',
        }),
      ),
      '\n',
    );

    shell.exec(`git clone ${boilerplates[this.boilerplate].url} ${this.dirName}`, () => {
      shell.cd(this.dirName);

      if (this.boilerplate === 'juggernaut') {
        shell.exec('rm -rf .git .github netlify.toml', { async: true });
      }

      this.insertNameProject();

      shell.exec('yarn', { async: true }, (yarncode) => {
          if (yarncode) {
            shell.echo(chalk.red('Error to install dependencies.'));
            shell.exit(1);
          }

          shell.echo('\n', chalk.green(`${boilerplates[this.boilerplate].name} is here!`));
      });
    });
  }
}

export default BoilerplateCli;
