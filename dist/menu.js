"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cowsay_1 = __importDefault(require("cowsay"));
const inquirer_1 = __importDefault(require("inquirer"));
const motivation_1 = __importDefault(require("motivation"));
const questions = [{
        choices: [{
                name: 'Friend',
                value: 'friend',
            }, {
                name: 'Motivation',
                value: 'motivation',
            }, {
                name: 'Know more',
                value: 'more',
            }],
        message: 'What do you need?',
        name: 'opt',
        type: 'list',
    }];
function menu() {
    console.log('\n');
    inquirer_1.default.prompt(questions)
        .then((resp) => {
        switch (resp.opt) {
            case 'friend':
                console.log(cowsay_1.default.say({
                    text: 'Hello! I am a MOOvelous CLI and your new friend.',
                }));
                break;
            case 'motivation':
                const msg = motivation_1.default.get();
                console.log('\n', msg.text, '\n', msg.author);
                break;
            case 'more':
                console.log('To know more you need to research, read, test and work hard every day.', '😁');
                console.log('But if you want to know more about this CLI, so... Coming soon!');
                break;
            default:
                console.log('OK');
                break;
        }
        console.log('\n');
    });
}
exports.default = menu;
