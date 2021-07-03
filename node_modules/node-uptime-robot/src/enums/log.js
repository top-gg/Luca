'use strict'

const LogType = {
  Down:    '1',
  Up:      '2',
  Paused:  '99',
  Started: '98'
}

LogType.toString = (type) => {
  switch (type) {
    case LogType.Down:    return 'Down'
    case LogType.Up:      return 'Up'
    case LogType.Paused:  return 'Paused'
    case LogType.Started: return 'Started'
    default:              return `Invalid log type: ${type}`
  }
}

module.exports = LogType
