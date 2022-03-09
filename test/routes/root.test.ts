import { test } from "tap";
const { build } = require("../helper");

test("default root route", async (t) => {
  const fastify = await build(t);

  const res = await fastify.inject({
    url: "/",
  });
  t.same(JSON.parse(res.payload), { root: true });
});

test("ping route", async (t) => {
  const fastify = await build(t);

  const res = await fastify.inject({
    url: "/ping",
  });
  t.same(JSON.parse(res.payload), { pong: "it worked!" });
});
