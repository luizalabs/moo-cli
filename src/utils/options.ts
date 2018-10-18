export interface ICommandDefaultOptions {
  airbnb?: boolean;
  react?: boolean;
  ts?: boolean;
  vue?: boolean;
}

export interface ICommandFluxOptions extends ICommandDefaultOptions {
  actionPath: string;
  reducerPath: string;
}

export interface ICommandOptions extends ICommandDefaultOptions {
  clean?: boolean;
  dest: string;
  flux?: boolean;
  func?: boolean;
  test?: boolean;
}

export function createCommandOptionsObject(cmd: any) {
  return Array.prototype.reduce.call(cmd.options, (acc: any, curr: any) => {
    const key = curr.long.substr(2);
    return typeof cmd[key] !== 'function'
      ? Object.assign({}, acc, { [key]: cmd[key] })
      : acc;
  }, {});
}

export default function options(cmd: any): ICommandOptions {
  return Object.assign(
    {
      dest: '',
    },
    createCommandOptionsObject(cmd),
  );
}
