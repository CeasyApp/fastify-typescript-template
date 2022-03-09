import closeWithGrace, { Signals } from "close-with-grace";
import fp from "fastify-plugin";

type CallbackOptions = {
  manual?: boolean;
  err?: Error;
  signal?: Signals;
};

export default fp(
  async function (fastify) {
    const closeFastify = async (cbOpts: CallbackOptions) => {
      if (cbOpts.err) {
        fastify.log.error(cbOpts.err);
      }
      await fastify.close();
    };

    const closeListeners = closeWithGrace({ delay: 500 }, closeFastify);

    fastify.addHook("onClose", async (instance, done) => {
      closeListeners.uninstall();
      done();
    });
  },
  {
    name: "closeGraceful",
  }
);
