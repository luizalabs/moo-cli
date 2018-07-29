import cowsay from 'cowsay';
import inquirer from 'inquirer';
import motivation from 'motivation';

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

export default function menu() {
  console.log('\n');

  inquirer.prompt(questions)
    .then((resp: any) => {
      switch (resp.opt) {
        case 'friend':
          console.log(
            cowsay.say({
              text: 'Hello! I am a MOOvelous CLI and your new friend.',
            }),
          );
          break;

        case 'motivation':
          const msg = motivation.get();
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
