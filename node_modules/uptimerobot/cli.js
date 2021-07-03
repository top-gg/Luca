#!/usr/bin/env node

const meow = require('meow')

const uptimerobot = require('./')

const cli = meow([
  'Usage',
  '  $ uptimerobot [command] [url [url...]]',
  '',
  'Commands',
  '  monitor  monitor the given URLs',
  '',
  'Examples',
  '  $ uptimerobot monitor http://example.com http://google.com',
  '  #=> JSON result'
])

const exit = (message) => {
  console.error(message)
  process.exitCode = 1
}

const prettyIfy = (str) => JSON.stringify(str, null, 2)

const parse = () => {
  if (!cli.input.length) {
    return cli.showHelp()
  }

  const command = cli.input.shift()

  if (!uptimerobot[command]) {
    return exit('unknown command', command)
  }

  if (!process.env.UPTIMEROBOT_API_TOKEN) {
    return exit('Pass in UPTIMEROBOT_API_TOKEN as an env var')
  }

  const config = {
    apiToken: process.env.UPTIMEROBOT_API_TOKEN
  }

  uptimerobot[command](cli.input, config)
    .then(res => console.log(prettyIfy(res)))
    .catch(err => console.error(prettyIfy(err)))
}

parse()
