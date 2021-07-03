import test from "ava";
import UptimeRobot from "../src";

const apiKey = process.env.API_KEY;

test.beforeEach(t => {
  t.context.ur = new UptimeRobot(apiKey);
});

test("UptimeRobot > invalid API key", t => {
  const error = t.throws(() => {
    const _ = new UptimeRobot();
  }, Error);
  t.is(error.message, "UptimeRobot API key must be provided.");
});

test("UptimeRobot > request valid method", async t => {
  const result = await t.context.ur.getAccountDetails();
  t.is(typeof result["account"], "object");
});

test("UptimeRobot > request invalid method", t => {
  t.throws(() => {
    t.context.ur.getAccountDetail();
  }, TypeError);
});

test("UptimeRobot > request error", async t => {
  const error = await t.throws(
    t.context.ur.getMonitors({
      types: "a"
    })
  );
  t.is(typeof error["error"], "object");
});
