# Code Quality Control with Jest 🤹

## Getting started with Jest 🤹

To get started we need to install [Jest 🤹](https://facebook.github.io/jest/) as one of our dev dependencies

```sh
# npm
$ npm install jest --save-dev

# yarn
$ yarn add jest -D
```

Jest works out of the box so, we just add a test command in our `package.json`

```json
// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

Place the tests in a __\_\_tests\_\___ folder, or name the test files with .spec.js or .test.js extension.

Now we can use `npm test` or `yarn test` from the terminal to run our unit tests. 

When in dev mode we are likley to watch the tests running, we can do so by executing jest with the `--watch` flag.

Our `package.json` should look like these now:

```json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

## Tests Coverage 📊

Add `--coverage` flag to Jest for the `test` command

```json
// package.json
{
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --watch"
  }
}
```

We want our command to fail in case we are missing our some test so we will define what every threshold should be, I will go  add 100% for everything: statements, branches, functions, lines.

```json
// package.json
{
  "jest": {
    "collectCoverageFrom": [
      "*.js"
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/" // add here any other PATH that you want to be ignored 
    ],
    "coverageThreshold": {
      "global": {
        "statements": 100,
        "branches": 100,
        "functions": 100,
        "lines": 100
      }
    }
  }
}
```

Now when you run `npm test` it will out put in the terminal the result for our coverage and also create a folder called __coverage__ where we can find a full report. Let me blown your mind and run `open coverage/lcov-report/index.html` from your terminal, from here we can interactively navigate through the report and find easly any uncovered test.

__NB__. Update `.gitignore` to exclude the `coverage` output folder.

```
// .gitignore
node_modules
coverage
```

## Installing ESLint

Now let's install ESLint by running:

```sh
# npm
$ npm install eslint --save-dev

# yarn
$ yarn add eslint -D
```

Cool, let's create a basic linting configuration through a file called `.eslintrc`, run `touch .eslintrc` and add these lines:

```
// .eslintrc
{
  "extends": "eslint:recommended"
}
```

We also want to ignore coverage and node_modules and to do that we need to create another file called `.eslintignore`

```
// .eslintignore
node_modules
coverage
```

## Pre-hook ⬆️

Good software development habits involve running the tests frequently and make sure the code quality standards are met, adding a git-pre-push hook can help you to automate the tasks just before pushing the changes to the repo.

To easly do that we need to install [husky 🐶](https://github.com/typicode/husky) a git-hook made easy library.

```sh
# npm
$ npm install husky --save-dev

# yarn
$ yarn add husky -D
```

Then we simply need to write our `prepush` hook script in the `package.json`, husky will automatically know that's the one to run on `git push`:

```json
// package.json
{
  "scripts": {
     "prepush": "npm run lint && npm test", // or `yarn lint && yarn test`
  }
}
```

There is also a `precommit` option available but we much rather prefer to be free to commit anytime and not slow down our dev process.

Now the next time we try to push our code, husky will run whatever command you entred in the `prepush` hook, in this case we are linting the code and running the unit tests with coverage.   

We did it folks, we are now able to automate some important steps that will ensure our app will never break again. 🐶 *woof!*
