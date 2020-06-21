# Unison VSCode Extension

This extension acts as the [Unison](https://www.unisonweb.org/) Language Server Protocol client for Visual Studio Code.

## Quickstart 🚀

### Prerequisites

If you don't already have it installed. You'll need to set up `node`. Preferably do this using [fnm](https://github.com/Schniz/fnm), [nvm](https://github.com/nvm-sh/nvm), or equivalent.

### Install

Install dependencies with:

```sh
npm install
```

### Build

Compile from Typescript `/src` to Javascript `/out`:

```sh
npm run build
```

### Launch

Launch the extension from VSCode. Go to the `Debug Pane` and run the `Launch Client` configuration.

This will open a new VSCode instance in `[Extension Development Host]` mode. You'll need to open a folder with a `.u` file to trigger the extension to load.

You'll then be able to view the logs by going to the `OUTPUT` pane and selecting `Unison` from the dropdown.
