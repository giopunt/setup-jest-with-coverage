# Tests Coverage 📊

Add `--coverage` option to Jest in `test` script

Eg.
```js
//package.json
{
  ...,
  "scripts": {
    ...,
    "test": "jest --coverage",
    "test:watch": "jest --watch"
  }
}
```

Then add the coverage option, every threshold should be set to your target value, I will go for 100% for everything:

Make sure that:
- Any configuration file or rename it to `.json` is ignored
- You have updated `.gitignore` to ignore the `coverage` output folder.

Eg.
```js
//package.json
{
  ...,
  "jest": {
    ...,
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

# Pre-hook ⬆️

Good software development habits involve running the tests frequently and make sure the code quality standards are met, adding a git-pre-push hook can help you to automate the tasks just before pushing the changes to the repo.

To easly do that we need to install [husky 🐶](https://github.com/typicode/husky) a git-hook made easy library.

```sh
# npm
$ npm install husky --save-dev

#yarn
$ yarn add husky -D
```

Then we simply need to write our pre-push hook command in the `package.json`:

```js
// package.json
{
   ...,
  "scripts": {
     ...,
     "prepush": "npm run lint && npm test", // or `yarn lint && yarn test`
  }
}
```

The next time you try to push your code, husky will run whatever command you defined in your pre-push hook, in this case we are linting our code and running the unit tests with coverage.
