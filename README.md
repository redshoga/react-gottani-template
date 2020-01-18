# react-gottani-template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is "gottani"

**ごった煮[gottani]**

(n) various foods cooked together,hodgepodge,hotchpotch,mulligan stew

## Features

- TypeScript (strict: true)
- React Router
- React Redux (using Ducks pattern)
- Redux-Saga
- Storybook
- Typesafe HTTP client ([aspida](https://github.com/aspidajs/aspida/tree/master/packages/aspida))
- CSS Module, SASS Samples (`*.module.scss` is used in the code)
- stylelint (auto linting, format *.css, *.scss files on save)
- Typesafe enviroment variables settings (Please refer to `enviroments.ts`)
- Normalize.css
- VSCode debugger settings
- `React.StrictMode` settings
- Redux dev tools ([redux-devtools-extension](https://github.com/reduxjs/redux-devtools))
- Analyzer JavaScript code bloat through source maps (using `source-map-explorer`)
- CI task config on GitHub Actions (Please refer to `/.github/workflows/ci.yml`)

## Recommend VSCode Extensions

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

## Recommend Chrome Extensions

- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja)

## Features added in the future

- Add test code (redux)
- Add easy to read sample code

## How to debug on Chrome

1. Launch chrome from Vscode debug page
2. Exec `yarn start`
3. Happy debugging (You can use break point on VSCoce)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn stylelint`

The stylelint check *.css, *.scss files.

### `yarn storybook`

The Storybook launches on the browser.

### `yarn build-storybook`

The Storybook is built.

### `yarn analyze`

Analyze JavaScript code bloat through source maps.

### `yarn test:no-watch`

Launches the test runner in the NOT interactive watch mode.

### `yarn test:coverage`

Displays the coverage rate of the test.

### `yarn api:build`

API type definition file 'apis/$api.ts' will be generated.<br />
https://github.com/aspidajs/aspida/tree/master/packages/aspida
