#!/usr/bin/env node

import cli from 'commander';
import cowsay from 'cowsay';
import pack from '../package.json';
import menu from './menu';
import cleanArgs from './utils/clean';

// function getFramework({ angular, vue }: { angular: boolean, vue: boolean }) {
function getFramework(options: any) {
  return options.angular
    ? 'angular'
    : options.vue
      ? 'vue'
      : 'react';
}

cli
  .version(pack.version)

  .option('--hi, --hello', 'Say hello')
  .option('-s, --say [type]', 'Say what you want')
  .option('-m, --menu', 'Open menu')
  // .option('-n, --name <name>', 'name for lib or web-component mode (default: Cow)', 'Cow')
  .option('-d, --dest [dir]', 'output directory (default: src/components)', './src/components')
  .option('-r, --react', 'build something for react')
  .option('-v, --vue', 'build something for vue')
  .option('-n, --angular', 'build something for angular')
  .option('-x, --flux', 'set redux flag')
  .option('-a, --airbnb', 'set airbnb flag')
  .option('-f, --functional', 'create functional stuff (if it can...)')
  .option('-t, --test', 'set test flag (this will build some tests for ya (if it can...))')
  .parse(process.argv)

  .command('build <name>')
  .description('build a .js or .vue file in production mode with zero config')

  .action((name, cmd) => {
    const args = cleanArgs(cmd);
    require('./commands/build').default(getFramework(args), Object.assign({}, { name }, args));
  });

if (cli.hello) {
  console.log(
    cowsay.say({
      text: 'Hello! I am a MOOvelous CLI.',
    }),
  );
}

if (cli.say) {
  console.log(
    cowsay.say({
      text: cli.say,
    }),
  );
}

if (cli.menu) {
  menu();
}

cli.parse(process.argv);
if (!process.argv.slice(2).length) {
  cli.outputHelp();
}
