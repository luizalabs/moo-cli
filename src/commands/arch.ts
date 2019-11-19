import inquirer, { Answers, Questions } from 'inquirer';
import reactPresets from '../templates/react/presets';
import vuePresets from '../templates/vue/presets';
import cli from '../utils/cli';

const vuePresetsNames = Object.keys(vuePresets);
const reactPresetsNames = Object.keys(reactPresets);

const questions: Questions = [
  {
    choices: [
      {
        name: 'Vue',
        value: 'vue',
      },
      {
        name: 'React',
        value: 'react',
      },
    ],
    message: 'What do you want?',
    name: 'opt',
    type: 'list',
  },
  {
    choices: vuePresetsNames.map((value) => {
      return { value, name: value };
    }),
    message: 'Choose a preset:',
    name: 'preset',
    type: 'list',
    when: (resp: Answers) => resp.opt === 'vue',
  },
  {
    choices: [
      {
        name: 'Yes',
        value: true,
      },
      {
        name: 'No',
        value: false,
      },
    ],
    message: 'Do you need a boilerplate?',
    name: 'needBoilerplate',
    type: 'list',
    when: (resp: Answers) => resp.opt === 'react',
  },
  {
    choices: [
      {
        name: 'Juggernaut',
        value: 'juggernaut',
      },
      {
        name: 'I don\'t need a boilerplate',
        value: false,
      },
    ],
    message: 'Select a boilerplate:',
    name: 'boilerplate',
    type: 'list',
    when: (resp: Answers) => resp.opt === 'react' && resp.needBoilerplate,
  },
  {
    choices: reactPresetsNames.map((value) => {
      return { value, name: value };
    }),
    message: 'Choose a preset:',
    name: 'preset',
    type: 'list',
    when: (resp: Answers) => resp.opt === 'react' && (!resp.needBoilerplate || !resp.boilerplate),
  },
  {
    default: (resp: Answers) => `moo-cli-${resp.opt}`,
    message: 'Type a directory name to create:',
    name: 'dir',
  },
];

export default function arch() {
  inquirer
    .prompt(questions)
    .then((resp: Answers) => {
      return cli(resp.opt, resp.dir, resp.preset, resp.boilerplate);
    });
}
