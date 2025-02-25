import { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.get("/", async function (request, reply) {
    const sessionId = request.session.sessionId
    return { root: true, sessionId };
  });

  fastify.get("/ping", opts, async (request, reply) => {
    return { pong: "it worked!" };
  });
}
