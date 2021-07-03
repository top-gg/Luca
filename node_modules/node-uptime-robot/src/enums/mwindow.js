'use strict'

const MWindowType = {
  Once:    '1',
  Daily:   '2',
  Weekly:  '3',
  Monthly: '4'
}

const MWindowStatus = {
  Paused: 0,
  Active: 1
}

MWindowType.toString = (type) => {
  switch (type) {
    case MWindowType.Once:    return 'Once'
    case MWindowType.Daily:   return 'Daily'
    case MWindowType.Weekly:  return 'Weekly'
    case MWindowType.Monthly: return 'Monthly'
    default:                  return `Invalid mainteance window type: ${type}`
  }
}

MWindowStatus.toString = (status) => {
  switch (status) {
    case MWindowStatus.Paused: return 'Paused'
    case MWindowStatus.Active: return 'Active'
    default:                   return `Invalid mainteance window status: ${status}`
  }
}

module.exports = {MWindowType, MWindowStatus}
