#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const cowsay_1 = __importDefault(require("cowsay"));
const package_json_1 = __importDefault(require("../package.json"));
const clean_1 = __importDefault(require("./utils/clean"));
function getFramework(options) {
    return options.angular
        ? 'angular'
        : options.vue
            ? 'vue'
            : 'react';
}
commander_1.default
    .version(package_json_1.default.version)
    .option('--hi, --hello', 'Say hello')
    .option('-s, --say [type]', 'Say what you want')
    .parse(process.argv);
commander_1.default
    .command('build <name>')
    .description('build a .js or .vue file in production mode with zero config')
    .option('-d, --dest <dir>', 'output directory (default: src)', './src/components')
    .option('-r, --react', 'build something for react')
    .option('-v, --vue', 'build something for vue')
    .option('-n, --angular', 'build something for angular')
    .option('-f, --flux', 'set redux flag')
    .option('-a, --airbnb', 'set airbnb flag')
    .option('-f, --functional', 'create functional stuff (if it can...)')
    .option('-t, --test', 'set test flag (this will build some tests for ya (if it can...))')
    .action((cmd) => {
    const args = clean_1.default(cmd);
    require('./commands/build').default(getFramework(args), args);
});
if (commander_1.default.hello) {
    console.log(cowsay_1.default.say({
        text: 'Hello! I am a MOOvelous CLI.',
    }));
}
if (commander_1.default.say) {
    console.log(cowsay_1.default.say({
        text: commander_1.default.say,
    }));
}
commander_1.default.parse(process.argv);
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
}
;
