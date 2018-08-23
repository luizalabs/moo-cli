#!/usr/bin/env node

import cli from 'commander';
import cow from 'cowsay';

import pack from '../package.json';
import comp from './commands/comp';
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
  .command('comp <name>')
  .description('Generate standardized code for your project')
  .option('-d, --dest [dir]', 'output directory', './src/components')
  .option('-v, --vue', 'build something for vue')
  .option('-r, --react', 'build something for react')
  .option('-x, --flux', 'set vuex/redux flag')
  .option('-a, --airbnb', 'set airbnb flag')
  .option('-f, --func', 'create functional stuff (if it can...)')
  .option('-t, --test', 'create test scripts (if it can...)')
  .action(comp);

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
