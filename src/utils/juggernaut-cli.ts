const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");
const { join } = require('path');
const fs = require('fs');

class JuggernautCli {
  dirName: string;

  constructor(dirname: string) {
    this.dirName = dirname;
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

    const command = shell.exec(`git clone https://github.com/SoftboxLab/juggernaut.git ${this.dirName}`, {async:true}, () => {
        if (!command.code) {
            shell.cd(this.dirName);
            this.insertNameProject();
            shell.exec(`git remote remove origin`, {async: true});
            const instal = shell.exec('npm install', {async: true}, () => {
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
export default JuggernautCli;
