import inquirer, { Answers, Questions } from 'inquirer';
import vuePresets from '../../assets/vue-presets.json';
import vue from './vue';

const presets = Object.keys(vuePresets.presets);

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
  choices: presets.map((value) => {
    return { name: value, value };
  }),
  message: 'Choose a preset:',
  name: 'vue',
  type: 'list',
  when: (resp) => resp.opt === 'vue',
}, {
  default: 'moo-cli-arch',
  message: 'Type a directory name to create:',
  name: 'dir',
  when: (resp) => resp.opt === 'vue',
}];

export default function arch() {
  console.log('\n');

  inquirer.prompt(questions)
    .then((resp: Answers) => {
      if (resp.opt === 'react') {
        return console.log('\n', 'React templates will coming soon.', '\n');
      }

      if (resp.opt === 'vue') {
        return vue(resp.dir, resp.vue);
      }
    });
}
