export const style = {
  Blink: '\x1b[5m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Hidden: '\x1b[8m',
  Reset: '\x1b[0m',
  Reverse: '\x1b[7m',
  Underscore: '\x1b[4m',

  Black: '\x1b[30m',
  Blue: '\x1b[34m',
  Cyan: '\x1b[36m',
  Green: '\x1b[32m',
  Magenta: '\x1b[35m',
  Red: '\x1b[31m',
  White: '\x1b[37m',
  Yellow: '\x1b[33m',

  BgBlack: '\x1b[40m',
  BgBlue: '\x1b[44m',
  BgCyan: '\x1b[46m',
  BgGreen: '\x1b[42m',
  BgMagenta: '\x1b[45m',
  BgRed: '\x1b[41m',
  BgWhite: '\x1b[47m',
  BgYellow: '\x1b[43m',
};

export function log(msg: string, ...args: string[]) {
  console.log('\n', ...args, msg, style.Reset, '\n');
}
