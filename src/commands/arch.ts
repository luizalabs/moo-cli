import inquirer, { Answers, Questions } from 'inquirer';
import reactPresets from '../templates/react/presets';
import vuePresets from '../templates/vue/presets';
import build from '../utils/arch-builder';

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
    message: 'What do you prefer?',
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
    choices: reactPresetsNames.map((value) => {
      return { value, name: value };
    }),
    message: 'Choose a preset:',
    name: 'preset',
    type: 'list',
    when: (resp: Answers) => resp.opt === 'react',
  },
  {
    default: (resp: Answers) => `moo-cli-${resp.opt}`,
    message: 'Type a directory name to create:',
    name: 'dir',
  },
];

export default function arch() {
  console.log('\n');

  inquirer
    .prompt(questions)
    .then((resp: Answers) => {
      return build(resp.opt, resp.dir, resp.preset);
    });
}
