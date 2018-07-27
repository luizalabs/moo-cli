#!/usr/bin/env node

import cli from 'commander';
import cowsay from 'cowsay';
import pack from '../package.json';

cli
  .version(pack.version)
  .option('--hi, --hello', 'Say hello')
  .option('-s, --say [type]', 'Say what you want')
  .parse(process.argv);

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
