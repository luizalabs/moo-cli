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

`moo arch`: creates a new project

`moo comp [options] <component_name>`: creates a new component inside your new project. The options are:

Name | Description
--- | ---
`--vue` or `-v` | Choose Vue as the framework for your component
`--react` or `-r` | Choose React as the framework for your component
`--dest` or `-d` | Choose your component's directory - *default: `src/components`*
`--func` or `-f` | Make your component functional - *only works with React*
`--flux` or `-x` | Add Vuex/Redux functions - *only works with React*
`--test` or `-t` | Add tests to your component
`--ts` | Add TypeScript to your component

---

To know what commands/options are available, just run it with no arguments or ask for help, like this:

`moo --help` or just `moo -h`

## How to contribute

Build a `moo-cli` version

`yarn build`

Create a `link` inside `dist` folder

`yarn link "@softboxlab/moo-cli"` or `npm link "@softboxlab/moo-cli"`

Install `moo-cli` in some project

`yarn add @softbox/moo-cli`

Then run your linked `moo-cli`

`./node_modules/.bin/moo <COMMAND>`
