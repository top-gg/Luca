import Client from "./client";

const METHODS = [
  "getAccountDetails",
  "getMonitors",
  "newMonitor",
  "editMonitor",
  "deleteMonitor",
  "resetMonitor",
  "getAlertContacts",
  "newAlertContact",
  "editAlertContact",
  "deleteMonitor",
  "getMWindows",
  "newMWindow",
  "editMWindow",
  "deleteMWindow",
  "getPSPs",
  "newPSP",
  "editPSP",
  "deletePSP"
];

class UptimeRobot {
  constructor(key) {
    if (!key || typeof key !== "string") {
      throw new Error("UptimeRobot API key must be provided.");
    }
    this.__client = new Client(key);
  }
}

for (let method of METHODS) {
  UptimeRobot.prototype[method] = function(options) {
    return this.__client.request(method, options);
  };
}

export default UptimeRobot;
