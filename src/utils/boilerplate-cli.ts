import chalk from "chalk";
import figlet from "figlet";
import shell from "shelljs";
import { join } from 'path';
import fs from 'fs';
import {boilerplates} from '../common/boilerplates';

class BoilerplateCli {
  dirName: string;
  boilerplate: string;

  constructor(dirname: string, boilerplate: string) {
    this.dirName = dirname;
    this.boilerplate = boilerplate;
  }

  insertNameProject() {
    const packagePath = join(process.cwd(), 'package.json');
    const packageJson = require(packagePath);
    packageJson.name = this.dirName;
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, '\t'));
  }

  cloneJuggernaut() {
    if (!shell.which('git')) {
        console.log('Sorry, this script requires git');
        shell.exit(1);
    }
    console.log(
      chalk.red(
        figlet.textSync("Juggernaut CLI", {
          horizontalLayout: "default",
          verticalLayout: "default"
        })
      )
    );
    const command: any = shell.exec(`git clone ${boilerplates[this.boilerplate]} ${this.dirName}`, {async:true}, () => {
        if (!command.code) {
            shell.cd(this.dirName);
            this.insertNameProject();
            shell.exec('rm -rf .git');
            shell.exec('git init');
            shell.exec('git add .');
            shell.exec('git commit -m "First Commit"');

            const instal: any = shell.exec('npm i', {async: true}, () => {
                if (!instal.code) {
                    console.log(chalk.green('Juggernaut is here!!!'));
                } else {
                    console.log(command.stderr);
                    console.log(chalk.red('Error to install dependcies.'));
                }
            });
        } else {
            console.log(command.stderr);
            console.log(chalk.red('Error to clone.'));
        }
    });
  };
}
export default BoilerplateCli;
