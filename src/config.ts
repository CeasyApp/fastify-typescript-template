import config, { IConfig } from "config";
import { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    config: IConfig;
  }
}

export default (fastify: FastifyInstance) => (fastify.config = config);
