'use strict'

const AlertContactType = {
  SMS:        '1',
  Mail:       '2',
  TwitterDM:  '3',
  Boxcar:     '4',
  WebHook:    '5',
  Pushbullet: '6',
  Zapier:     '7',
  Pushover:   '9',
  HipChat:    '10',
  Slack:      '11'
}

const AlertContactStatus = {
  NotActivated: '0',
  Paused:       '1',
  Active:       '2'
}

AlertContactType.toString = (type) => {
  switch (type) {
    case AlertContactType.SMS:        return 'SMS'
    case AlertContactType.Mail:       return 'Mail'
    case AlertContactType.TwitterDM:  return 'TwitterDM'
    case AlertContactType.Boxcar:     return 'Boxcar'
    case AlertContactType.WebHook:    return 'Web Hook'
    case AlertContactType.Pushbullet: return 'Pushbullet'
    case AlertContactType.Zapier:     return 'Zapier'
    case AlertContactType.Pushover:   return 'Pushover'
    case AlertContactType.HipChat:    return 'HipChat'
    case AlertContactType.Slack:      return 'Slack'
    default:                          return `Invalid alert contact type: ${type}`
  }
}

AlertContactStatus.toString = (status) => {
  switch (status) {
    case AlertContactStatus.NotActivated: return 'Not activated'
    case AlertContactStatus.Paused:       return 'Paused'
    case AlertContactStatus.Active:       return 'Active'
    default:                              return `Invalid alert contact status: ${status}`
  }
}

module.exports = {AlertContactType, AlertContactStatus}
