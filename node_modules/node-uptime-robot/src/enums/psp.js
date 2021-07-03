'use strict'

const PSPSort = {
  FriendlyNameUpperCase: '1',
  FriendlyNameLowerCase: '2',
  StatusUpDownPaused:    '3',
  StatusDownUpPaused:    '4'
}

const PSPStatus = {
  Paused: '0',
  Active: '1'
}

PSPSort.toString = (type) => {
  switch (type) {
    case PSPSort.FriendlyNameUpperCase: return 'A-Z'
    case PSPSort.FriendlyNameLowerCase: return 'a-z'
    case PSPSort.StatusUpDownPaused:    return 'up-down-paused'
    case PSPSort.StatusDownUpPaused:    return 'down-up-paused'
    default:                            return `Invaliv status-page sort type: ${type}`
  }
}

PSPStatus.toString = (status) => {
  switch (status) {
    case PSPStatus.Paused: return 'Paused'
    case PSPStatus.Active: return 'Active'
    default:               return `Invalid status-page status: ${status}`
  }
}

module.exports = {PSPSort, PSPStatus}
