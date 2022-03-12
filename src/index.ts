import { ServerConfig } from "./config.d";
import Fastify from "fastify";
import app from "./app";
import config from "./config";
import closeGraceful from "./closeGraceful";

const fastify = Fastify();

// attach config
config(fastify);

// register plugins & routes
fastify.register(app);

fastify.register(closeGraceful);

const {
  serverConfig: { listenAddress, port },
} = fastify.config;

fastify.listen(port, listenAddress, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
