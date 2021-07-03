'use strict'

const UptimeRobot = require('./src/uptimerobot'),
      LogType     = require('./src/enums/log')

const {
  AlertContactType,
  AlertContactStatus
} = require('./src/enums/alert_contact')

const {
  MonitorType,
  MonitorSubType,
  MonitorKeywordType,
  MonitorStatus
} = require('./src/enums/monitor')

const {
  MWindowType,
  MWindowStatus
} = require('./src/enums/mwindow')

const {
  PSPSort,
  PSPStatus
} = require('./src/enums/psp')

module.exports = {
  create: (apiKey, parseBody = false) => {return new UptimeRobot(apiKey, parseBody)},
  mix: (...types) => {
    let typeStr = ''
    types.forEach((type) => {
      if (typeof(type) === 'object') {
        type.forEach((child) => typeStr += `-${child}`)
      } else {
        typeStr += `-${type}`
      }
    })
    return typeStr.substring(1)
  },
  AlertContactType, AlertContactStatus, LogType,
  MonitorType, MonitorSubType, MonitorKeywordType, MonitorStatus,
  MWindowType, MWindowStatus, PSPSort, PSPStatus
}
