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

```js
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

Now try to run `npm run test` or `yarn test` from your terminal, and you will see that Jest will look for any test in your project and run them.

## Tests Coverage 📊

Add `--coverage` option to Jest in `test` script

```js
// package.json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

Then add the coverage option, every threshold should be set to your target value, I will go for 100% for everything:

Make sure that:
- Any configuration file or rename it to `.json` is ignored
- You have updated `.gitignore` to ignore the `coverage` output folder.

```js
// package.json
{
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.js"
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/" // default value
      // add here any other PATH that you want to be ignored 
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

## Installing ESLint


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

```js
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
