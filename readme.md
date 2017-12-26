# JavaScript Blyss Style

A preset linter without any style rules. Focus on the errors and let [Prettier](https://prettier.io) handle your styling.

**Features**:

* Strict ES6 Rules
* Flowtype support out-of-the-box
* Compatibility with [`prettier`](https://github.com/prettier/prettier)
* No style rules! Let your `prettier` config handle whitespace, quotes, semicolons, tabs/spaces, trailing commas, etc

## Installation

```bash
$ npm install -g blyss
```

## Usage

```
$ blyss
Error: Blyss Linter
  lib/index.js:15:11: Expected '===' and instead saw '=='.
```

### What you might do if you're clever

1. Install `blyss` as a `devDependency` for your project by running `npm install -D blyss`
2. Add a line in your `scripts` field to use the linter

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "blyss": "*"
    },
    "scripts": {
      "lint": "blyss"
    }
  }
  ```

3. Run your script by doing `npm run lint` whenever you want to lint your code.

### Make it look `snazzy`
If you want prettier output, just install the [`snazzy`](https://github.com/feross/snazzy) package and pipe `blyss` to it:

```bash
$ blyss --verbose | snazzy
```

### Ignoring files

Just like in `standard`, The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically excluded when looking for `.js` files to check.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `blyss.ignore` property to `package.json`:

```json
"blyss": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

## Credits
Thanks to @feross and @flet for creating `standard-engine` which is what this project is built on.
