import Fastify from "fastify";
import app from "./app";
import config from "./config";
const fastify = Fastify();

// attach config
config(fastify);

// register plugins & routes
fastify.register(app);

fastify.listen(
  fastify.config.get("port"),
  fastify.config.get("host"),
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
