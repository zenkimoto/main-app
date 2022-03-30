<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To get started:

```sh
npm init @open-wc
# requires node 10 & npm 6 or higher
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Cypress

To run cypress in the command line:

```sh
npx cypress run
```

or

```sh
yarn cypress
```

However, the server needs to be running first.  You can do that by running the following in another terminal window.

```sh
yarn start
```

To start the server and run the tests, you can use the npm module [start-server-and-test](https://github.com/bahmutov/start-server-and-test).

```sh
yarn test:cypress
```

The start-server-and-test command is use as follows:

`start-server-and-test [npm script to start server] [url of test (i.e. localhost:8000)] [npm script of test]`

In this application's case, it's:

`start-server-and-test start http://localhost:8000 cypress`
