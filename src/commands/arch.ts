import inquirer, { Answers, Questions } from 'inquirer';
import vuePresets from '../templates/vue/presets';
import vue from './vue';

const vueNames = Object.keys(vuePresets);

const questions: Questions = [{
  choices: [{
    name: 'Vue',
    value: 'vue',
  }, {
    name: 'React',
    value: 'react',
  }],
  message: 'What do you prefer?',
  name: 'opt',
  type: 'list',
}, {
  choices: vueNames.map((value) => {
    return { value, name: value };
  }),
  message: 'Choose a preset:',
  name: 'vue',
  type: 'list',
  when: (resp: Answers) => resp.opt === 'vue',
}, {
  default: (resp: Answers) => `moo-cli-${resp.opt}`,
  message: 'Type a directory name to create:',
  name: 'dir',
  when: (resp: Answers) => resp.opt === 'vue',
}];

export default function arch() {
  console.log('\n');

  inquirer.prompt(questions)
    .then((resp: Answers) => {
      if (resp.opt === 'react') {
        return console.log(
          '\n',
          'React templates will coming soon.',
          '\n',
        );
      }

      if (resp.opt === 'vue') {
        return vue(resp.dir, resp.vue);
      }
    });
}
