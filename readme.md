# JavaScript Blyss Style

All the goodness of [feross/standard](https://github.com/feross/standard) with some adjustments.

## Installation

```bash
npm install blyss
```

## Rules

`blyss` deviates from `standard` in a few ways:

- No space before function parens.

```js
// Bad (Standard enforces)
function foo () {}

// Good
function foo() {}
```

- Spaces around object curly braces enforced.

```js
// Bad (Standard allows)
import {foo} from 'bar'

// Bad (Standard allows)
const person = {name: 'john', age: 30}

// Good
import { foo } from 'bar'

// Good
const person = { name: 'john', age: 30 }
```

- Space before, but not after generator star.

```js
// Bad (Standard enforces)
function * () {}

// Bad
function* () {}

// Good
function *() {}
```

- Check [feross/standard](https://github.com/feross/standard) for the rest of the rules.

## Usage

The easiest way to use JavaScript Blyss Standard Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `blyss` globally on your system, omit it if you want
to install in the current working directory):

```bash
npm install blyss -g
```

After you've done that you should be able to use the `blyss` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```
$ blyss
Error: Blyss for All
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "blyss": "*"
    },
    "scripts": {
      "test": "blyss && node my-normal-tests-littered-with-semicolons.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  Error: Code style check failed:
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again! (unless it's about semicolons)

### Custom Parser
To use a custom parser, install it from npm (example: `npm install
babel-eslint`) and add this to your package.json:

```json
{
  "blyss": {
    "parser": "babel-eslint"
  }
}
```

### [Vim](http://www.vim.org/)

Install **[Syntastic][vim-1]** and add these lines to `.vimrc`:

```vim
let g:syntastic_javascript_checkers=['standard']
let g:syntastic_javascript_standard_exec = 'blyss'
```

For automatic formatting on save, add these two lines to `.vimrc`:

```vim
autocmd bufwritepost *.js silent !blyss % --fix
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

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

### Make it look `snazzy`
If you want prettier output, just install the [`snazzy`](https://github.com/feross/snazzy) package and pipe `blyss` to it:

```bash
$ blyss --verbose | snazzy
```

See [feross/standard](https://github.com/feross/standard) for more information.
