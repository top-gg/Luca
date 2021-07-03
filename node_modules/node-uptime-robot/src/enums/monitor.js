'use strict'

const MonitorType = {
  HTTPs:   '1',
  Keyword: '2',
  Ping:    '3',
  Port:    '4'
}

const MonitorSubType = {
  HTTP:       '1',
  HTTPS:      '2',
  FTP:        '3',
  SMTP:       '4',
  POP3:       '5',
  IMAP:       '6',
  CustomPort: '99'
}

const MonitorKeywordType = {
  Exists:    '1',
  NotExists: '2'
}

const MonitorStatus = {
  Paused:        '0',
  NotCheckedYet: '1',
  Up:            '2',
  SeemsDown:     '8',
  Down:          '9'
}

MonitorType.toString = (type) => {
  switch (type) {
    case MonitorType.HTTPs:   return 'HTTP(s)'
    case MonitorType.Keyword: return 'Keyword'
    case MonitorType.Ping:    return 'Ping'
    case MonitorType.Port:    return 'Port'
    default:                  return `Unknown monitor type: ${type}`
  }
}

MonitorSubType.toString = (type) => {
  switch (type) {
    case MonitorSubType.HTTP:       return 'HTTP'
    case MonitorSubType.HTTPS:      return 'HTTPS'
    case MonitorSubType.FTP:        return 'FTP'
    case MonitorSubType.SMTP:       return 'SMTP'
    case MonitorSubType.POP3:       return 'POP3'
    case MonitorSubType.IMAP:       return 'IMAP'
    case MonitorSubType.CustomPort: return 'Custom Port'
    default:                        return `Unknown monitor sub type: ${type}`
  }
}

MonitorKeywordType.toString = (type) => {
  switch (type) {
    case MonitorKeywordType.Exists:    return 'Exists'
    case MonitorKeywordType.NotExists: return 'Not Exists'
    default:                           return `Invalid monitor keyword type: ${type}`
  }
}

MonitorStatus.toString = (status) => {
  switch (status) {
    case MonitorStatus.Paused:        return 'Paused'
    case MonitorStatus.NotCheckedYet: return 'Not checked yet'
    case MonitorStatus.Up:            return 'Up'
    case MonitorStatus.SeemsDown:     return 'Seems down'
    case MonitorStatus.Down:          return 'Down'
    default:                          return `Invalid monitor status: ${status}`
  }
}

module.exports = {MonitorType, MonitorSubType, MonitorKeywordType, MonitorStatus}
