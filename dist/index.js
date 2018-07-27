#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const cowsay_1 = __importDefault(require("cowsay"));
const package_json_1 = __importDefault(require("../package.json"));
commander_1.default
    .version(package_json_1.default.version)
    .option('--hi, --hello', 'Say hello')
    .option('-s, --say [type]', 'Say what you want')
    .parse(process.argv);
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
