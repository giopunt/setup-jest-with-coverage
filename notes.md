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

Then add the coverage option, every threshold should be set to 100% :

Make sure that:
- We ignore any configuration file or rename it to `.json`
- We update `.gitignore` to ignore the `coverage` output folder.

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
      "/node_modules/",
      "src/server/siteChromeConfig.js"
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

Add a pre-push hook to run the linting and unit tests before pushing the changes.

We can achieve this by installing *[husky|https://github.com/typicode/husky]* (a git-hook wrapper)

```js
# npm
npm install husky --save-dev

#yarn
yarn add husky -D
```

Then configure the pre-push option for husky:

```js
// package.json
{
   ...,
  "husky": {
    "hooks": {
      "pre-push": "npm run lint && npm test", // or `yarn ci` ?
    }
  }
}
```
