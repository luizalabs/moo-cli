import { ICommandOptions } from '../interfaces/command-options';

export default function options(cmd: any): ICommandOptions {
  const opts = {
    dest: '',
  };

  // getting options names
  cmd.options.forEach((o: any) => {
    const key = o.long.substr(2);
    if (typeof cmd[key] !== 'function') {
      opts[key] = cmd[key];
    }
  });

  return opts;
}
