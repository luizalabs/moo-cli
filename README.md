# moo-cli

A MOOvelous CLI.

Its purpose is to standardize creation of new projects, components and resources by using solid patterns and proxying other CLIs with preset configs.

## Get started

### Using npx

`npx -p @softboxlab/moo-cli moo [command] [options]`

### Local

`npm i -g @softboxlab/moo-cli`

or

`yarn global add @softboxlab/moo-cli`

Now you can run it like this:

`moo-cli [command] [options]`

Or just:

`moo [command] [options]`

---

### Commands

Run `moo arch` to create a new project

Run `moo comp [options] <name>` to create a new component inside your new project. The options are:

Name | Description
--- | ---
`--vue` | Choose Vue as the framework for your component
`--react` | Choose React as the framework for your component
`--dest` | Choose your component's directory - *default: `src/components`*
`--ts` | Add TypeScript to your component
`--func` | Make your component functional - *only works with React*
`--test` | Create tests to your component

---

To know what commands/options are available, just run it with no arguments or ask for help, like this:

`moo --help`

or just

`moo -h`
