#!/usr/bin/env node

import cli from 'commander';
import cow from 'cowsay';

import pack from '../package.json';
import arch from './commands/arch';
import comp from './commands/comp';
import flux from './commands/flux';
import menu from './menu';

cli
  .version(pack.version)
  .description(pack.description);

cli
  .command('hello')
  .description('Hello from moo-cli')
  .action(() => {
    console.log(
      '\n',
      cow.say({
        text: 'Hello! I am a MOOvelous CLI.',
      }),
      '\n',
    );
  });

cli
  .command('arch')
  .description('Generate standardized archtecture to start a new project')
  .action(arch);

cli
  .command('comp <name>')
  .description('Generate standardized component initial code')
  .option('-d, --dest [dir]', 'output directory', './src/components')
  .option('-v, --vue', 'build something for vue')
  .option('-r, --react', 'build something for react')
  .option('-x, --flux', 'set vuex/redux flag')
  .option('-a, --airbnb', 'set airbnb flag')
  .option('-f, --func', 'create functional stuff (if it can...)')
  .option('-t, --test', 'create test scripts (if it can...)')
  .option('--ts', 'create in typescript (if it can...)')
  .option('--clean', 'create a clean component (if it can...)')
  .action(comp);

cli
  .command('flux <name> <actiondir> <reducerdir>')
  .description('Generate standardized flux initial code')
  .option('-v, --vue', 'build something for vue')
  .option('-r, --react', 'build something for react')
  .option('-a, --airbnb', 'set airbnb flag')
  .option('--ts', 'create in typescript (if it can...)')
  .action(flux);

cli
  .command('menu')
  .description('Open interactive menu')
  .action(menu);

cli.on('--help', () => {
  console.log(
    '\n',
    'Type:',
    '"moo [command] -h"',
    'to ask help about specific command',
    '\n',
  );
});

cli.parse(process.argv);
if (!cli.args.length) {
  cli.help();
}
