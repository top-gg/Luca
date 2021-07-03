const urllib = require('url')
const querystring = require('querystring')

const get = require('simple-get')
const promiseProps = require('promise-props')

const newMonitor = (url, config) => {
  const parsedUrl = urllib.parse(url)
  const keys = {
    apiKey: config.apiToken,
    monitorFriendlyName: parsedUrl.hostname,
    monitorURL: url,
    monitorType: 1,
    format: 'json',
    noJsonCallback: 1
  }

  return 'https://api.uptimerobot.com/newMonitor?' + querystring.stringify(keys)
}

const getPromise = (url) =>
  new Promise((resolve, reject) =>
    get.concat(url, (err, res, data) => {
      if (err) {
        return reject(err)
      }
      const body = JSON.parse(data)
      if (res.statusCode !== 200) {
        return reject(body.message)
      }
      resolve(body)
    })
  )

const monitor = (url, config) => {
  if (!config.apiToken) {
    throw new Error('config apiToken unset')
  }
  const monitorUrl = newMonitor(url, config)
  return getPromise(monitorUrl)
}

exports.monitor = (urls, config) => {
  urls = Array.isArray(urls) ? urls : [urls]
  config = config || {}

  const promises = urls.reduce((i, url) => {
    i[url] = monitor(url, config)
    return i
  }, {})

  return promiseProps(promises)
}
