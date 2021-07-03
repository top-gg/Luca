# uptimerobot

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/uptimerobot
[travis-image]: https://img.shields.io/travis/tlvince/uptimerobot.svg
[npm-url]: https://www.npmjs.com/package/uptimerobot
[npm-image]: https://img.shields.io/npm/v/uptimerobot.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/uptimerobot.svg

> Node API client and CLI for UptimeRobot

Node wrapper over the [UptimeRobot API][].

[uptimerobot api]: https://uptimerobot.com/api

## Installation

```shell
npm install --save uptimerobot
```

## Usage

```js
const uptimerobot = require('uptimerobot')

const urls = ['http://example.com', 'http://two.example.com']
const config = {
  apiToken: // some token
}

uptimerobot.monitor(urls, config)
  .then(res => console.log(res))
  .catch(error => console.log(error))
```

## CLI

```shell
uptimerobot -h
#=> uptimerobot [command] [url [url...]]

uptimerobot monitor http://example.com http://google.com
#=> JSON result
```

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
