import { DefaultConfig } from "./config.d";
import config from "config";
import { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    config: DefaultConfig;
  }
}

export default (fastify: FastifyInstance) =>
  (fastify.config = JSON.parse(JSON.stringify(config)));
