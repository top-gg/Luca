'use strict'

const request = require('request')

const passInto = (output, keyName, input) => {
  if (input !== undefined && input !== null ) {
    output[keyName] = typeof(input) === 'object'
      ? JSON.stringify(input)
      : `${input}`
  }
}

module.exports = class UptimeRobot
{
  constructor(apiKey, parseBody = false)
  {
    this._apiKey    = apiKey
    this._parseBody = parseBody
  }

  _createRequest(methodName, options = null)
  {
    const form = {
      api_key: this._apiKey,
      format:  'json'
    }

    if (options !== null) {
      Object.keys(options).forEach((key) => form[key] = options[key])
    }

    return {
      method: 'POST',
      url: `https://api.uptimerobot.com/v2/${methodName}`,
      headers: {
       'cache-control': 'no-cache',
       'content-type': 'application/x-www-form-urlencoded'
      },
      form
    }
  }

  _sendRequest(methodName, options = null)
  {
    return new Promise((resolve, reject) => {
      request(this._createRequest(methodName, options), (err, response, body) => {
        if (err) {
          return reject(err)
        }
        return resolve(this._parseBody === true ? JSON.parse(body) : body)
      })
    })
  }

  getAccountDetails()
  {
    return this._sendRequest('getAccountDetails')
  }

  getMonitors(
    logs                   = 1,
    customUptimeRatios     = undefined,
    customUptimeRanges     = undefined,
    monitors               = undefined,
    types                  = undefined,
    statuses               = undefined,
    allTimeUptimeRatio     = undefined,
    allTimeUptimeDurations = undefined,
    logsStartDate          = undefined,
    logsEndDate            = undefined,
    logsType               = undefined,
    logsLimit              = undefined,
    responseTime           = undefined,
    responseTimesLimit     = undefined,
    responseTimeAverage    = undefined,
    responseTimesStartDate = undefined,
    responseTimesEndDate   = undefined,
    alertContacts          = undefined,
    mwindows               = undefined,
    ssl                    = undefined,
    customHttpHeaders      = undefined,
    customHttpStatuses     = undefined,
    timezone               = undefined,
    offset                 = undefined,
    limit                  = undefined,
    search                 = undefined)
  {
    const options = {logs: `${logs}`}

    passInto(options, 'monitors',                  monitors)
    passInto(options, 'types',                     types)
    passInto(options, 'statuses',                  statuses)
    passInto(options, 'custom_uptime_ratios',      customUptimeRatios)
    passInto(options, 'custom_uptime_ranges',      customUptimeRanges)
    passInto(options, 'all_time_uptime_ratio',     allTimeUptimeRatio)
    passInto(options, 'all_time_uptime_durations', allTimeUptimeDurations)
    passInto(options, 'logs_start_date',           logsStartDate)
    passInto(options, 'logs_end_date',             logsEndDate)
    passInto(options, 'log_types',                 logsType)
    passInto(options, 'logs_limit',                logsLimit)
    passInto(options, 'response_times',            responseTime)
    passInto(options, 'response_times_limit',      responseTimesLimit)
    passInto(options, 'response_times_average',    responseTimeAverage)
    passInto(options, 'response_times_start_date', responseTimesStartDate)
    passInto(options, 'response_times_end_date',   responseTimesEndDate)
    passInto(options, 'alert_contacts',            alertContacts)
    passInto(options, 'mwindows',                  mwindows)
    passInto(options, 'ssl',                       ssl)
    passInto(options, 'custom_http_headers',       customHttpHeaders)
    passInto(options, 'custom_http_statuses',      customHttpStatuses)
    passInto(options, 'timezone',                  timezone)
    passInto(options, 'offset',                    offset)
    passInto(options, 'limit',                     limit)
    passInto(options, 'search',                    search)


    return this._sendRequest('getMonitors', options)
  }

  newMonitor(
    friendlyName,
    url,
    type,
    subType       = undefined,
    port          = undefined,
    keywordType   = undefined,
    keywordValue  = undefined,
    interval      = undefined,
    httpUsername  = undefined,
    httpPassword  = undefined,
    alertContacts = undefined)
  {
    const options = {
      friendly_name: friendlyName,
      url,
      type: `${type}`
    }

    passInto(options, 'sub_type',       subType)
    passInto(options, 'port',           port)
    passInto(options, 'keyword_type',   keywordType)
    passInto(options, 'keyword_value',  keywordValue)
    passInto(options, 'interval',       interval)
    passInto(options, 'http_username',  httpUsername)
    passInto(options, 'http_password',  httpPassword)
    passInto(options, 'alert_contacts', alertContacts)

    return this._sendRequest('newMonitor', options)
  }

  editMonitor(
    id,
    friendlyName  = undefined,
    url           = undefined,
    subType       = undefined,
    port          = undefined,
    keywordType   = undefined,
    keywordValue  = undefined,
    interval      = undefined,
    status        = undefined,
    httpUsername  = undefined,
    httpPassword  = undefined,
    alertContacts = undefined)
  {
    const options = {id: `${id}`}

    passInto(options, 'friendly_name',  friendlyName)
    passInto(options, 'url',            url)
    passInto(options, 'sub_type',       subType)
    passInto(options, 'port',           port)
    passInto(options, 'keyword_type',   keywordType)
    passInto(options, 'keyword_value',  keywordValue)
    passInto(options, 'interval',       interval)
    passInto(options, 'status',         status)
    passInto(options, 'http_username',  httpUsername)
    passInto(options, 'http_password',  httpPassword)
    passInto(options, 'alert_contacts', alertContacts)

    return this._sendRequest('editMonitor', options)
  }

  deleteMonitor(id)
  {
    return this._sendRequest('deleteMonitor', {id: `${id}`})
  }

  resetMonitor(id)
  {
    return this._sendRequest('resetMonitor', {id: `${id}`})
  }

  getAlertContacts(alertContacts = undefined, offset = undefined, limit = undefined)
  {
    const options = {}

    passInto(options, 'alert_contacts', alertContacts)
    passInto(options, 'offset',         offset)
    passInto(options, 'limit',          limit)

    return this._sendRequest('getAlertContacts', options)
  }

  newAlertContact(type, value, friendlyName = undefined)
  {
    const options = {
      type:  `${type}`,
      value: `${value}`
    }

    passInto(options, 'friendly_name', friendlyName)

    return this._sendRequest('newAlertContact', options)
  }

  editAlertContact(id, friendlyName = undefined, value = undefined)
  {
    const options = {id: `${id}`}

    passInto(options, 'friendly_name', friendlyName)
    passInto(options, 'value',         value)

    return this._sendRequest('editAlertContact', options)
  }

  deleteAlertContact(id)
  {
    return this._sendRequest('deleteAlertContact', {id: `${id}`})
  }

  getMWindows(mwindows = undefined, offset = undefined, limit = undefined)
  {
    const options = {}

    passInto(options, 'mwindows', mwindows)
    passInto(options, 'offset',   offset)
    passInto(options, 'limit',    limit)

    return this._sendRequest('getMWindows', options)
  }

  newMWindow(friendlyName, type, value, startTime, duration)
  {
    return this._sendRequest('newMWindow', {
      friendly_name: friendlyName,
      type:          `${type}`,
      value:         `${value}`,
      start_time:    `${startTime}`,
      duration:      `${duration}`
    })
  }

  editMWindow(id, friendlyName, value, startTime, duration)
  {
    const options = {id: `${id}`}

    passInto(options, 'friendly_name', friendlyName)
    passInto(options, 'value',         friendlyName)
    passInto(options, 'start_time',    startTime)
    passInto(options, 'duration',      duration)

    return this._sendRequest('editMWindow', options)
  }

  deleteMWindow(id)
  {
    return this._sendRequest('deleteMWindow', {id: `${id}`})
  }

  getPSPs(psps = undefined, offset = undefined, limit = undefined)
  {
    const options = {}

    passInto(options, 'psps',   psps)
    passInto(options, 'offset', offset)
    passInto(options, 'limit',  limit)

    return this._sendRequest('getPSPs', options)
  }

  newPSP(type, friendlyName, monitors, customDomain = undefined, password = undefined, sort = undefined, hideUrlLinks = undefined, status = undefined)
  {
    const options = {
      type:          `${type}`,
      friendly_name: `${friendlyName}`,
      monitors:      `${monitors}`
    }

    passInto(options, 'custom_domain',  customDomain)
    passInto(options, 'password',       password)
    passInto(options, 'sort',           sort)
    passInto(options, 'hide_url_links', hideUrlLinks)
    passInto(options, 'status',         status)

    return this._sendRequest('newPSP', options)
  }

  editPSP(id, friendlyName, monitors, customDomain, password, sort, hideUrlLinks, status)
  {
    const options = {id: `${id}`}

    passInto(options, 'friendly_name',  friendlyName)
    passInto(options, 'monitors',       monitors)
    passInto(options, 'custom_domain',  customDomain)
    passInto(options, 'password',       password)
    passInto(options, 'sort',           sort)
    passInto(options, 'hide_url_links', hideUrlLinks)
    passInto(options, 'status',         status)

    return this._sendRequest('editPSP', options)
  }

  deletePSP(id)
  {
    return this._sendRequest('deletePSP', {id: `${id}`})
  }
}
