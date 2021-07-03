# node-uptime-robot

A complete node.js wrapper for [uptime robot API](https://uptimerobot.com/api), with Promise!

## Example

```js
const UptimeRobot = require('node-uptime-robot'),
      bot = UptimeRobot.create('api-key')

bot.getMonitors(1, '1-7-30') // or UptimeRobot.mix(1, 7, 30)
.then((monitors) => console.log(monitors))
.catch((err) => console.log(err))
```

## API

Every method returns a `Promise` with `body` as parameter as long as the `Promise` has been resolved.
The body is by default the JSON string and can be automatically parsed into a JSON by passing `true`
as second parameter into the `UptimeRobot.create()` method.

To append mulitple parameters like for a custom uptime ratios, use the `UptimeRobot.mix()` function.
You can pass single values into it or array(s).

## Enumerations

I've implemented every enumeration from their parameter api.

- `AlertContactType`
- `AlertContactStatus`
- `LogType`
- `MonitorType`
- `MonitorSubType`
- `MonitorKeywordType`
- `MonitorStatus`
- `MWindowType`
- `MWindowStatus`
- `PSPSort`
- `PSPStatus`
