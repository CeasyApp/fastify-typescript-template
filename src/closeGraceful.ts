import closeWithGrace, { Signals } from "close-with-grace";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

type CallbackOptions = {
  manual?: boolean;
  err?: Error;
  signal?: Signals;
};

export const closeFastifyGraceful =
  (fastify: FastifyInstance) => async (cbOpts?: CallbackOptions) => {
    if (cbOpts && cbOpts.err) {
      fastify.log.error(cbOpts.err);
    }
    // close external connections etc

    await fastify.close();
  };

export default fp(
  async function (fastify) {
    const closeListeners = closeWithGrace(
      { delay: 5000 },
      closeFastifyGraceful(fastify)
    );

    fastify.addHook("onClose", async (instance, done) => {
      await closeListeners.uninstall();
      done();
    });
  },
  {
    name: "closeGraceful",
  }
);
