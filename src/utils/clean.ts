function cleanArgs(cmd: any) {
  const args = {};
  cmd.options.forEach((o: any) => {
    const key = o.long.replace(/^--/, '');
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function') {
      args[key] = cmd[key];
    }
  });
  return args;
}

export default cleanArgs;
