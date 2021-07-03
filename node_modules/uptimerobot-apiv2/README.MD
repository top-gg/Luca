# Uptime Robot API

> UptimeRobot API wrapper

[![Travis](https://img.shields.io/travis/giuem/uptimerobot-api.svg?style=flat-square)](https://travis-ci.org/giuem/uptimerobot-api)
[![Codecov](https://img.shields.io/codecov/c/github/giuem/uptimerobot-api.svg?style=flat-square)](https://codecov.io/gh/giuem/uptimerobot-api)
[![license](https://img.shields.io/github/license/giuem/uptimerobot-api.svg?style=flat-square)](https://github.com/giuem/uptimerobot-api/blob/master/LICENSE)


## Usage

``` javascript
import UptimRobot from 'uptimerobot-apiv2';

const uptimerobot = new UptimRobot("Your API key");

uptimerobot.getAccountDetails().then(data => {
  console.log(data);
});
```

[API Docs](https://uptimerobot.com/api)
