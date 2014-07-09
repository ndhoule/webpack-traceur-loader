demo-app
========

An app demoing [traceur-loader][], a Webpack loader for transpiling
ES6-compatible code to ES5-compatible code using Google's [Traceur][] project.

## Setup

Install dependencies and then build assets:

```sh
npm install
npm run build
```

Open `index.html` to see a browser demo, or run `node dist/build` to run in
Node.

## Building Assets

To build development assets (including source maps):

```sh
npm run build
```

To build production assets:

```sh
npm run build-min
```

## License

MIT ([License](LICENSE.md))



<!-- Links -->
[traceur-loader]: http://github.com/ndhoule/traceur-loader
[traceur]: https://github.com/google/traceur-compiler
