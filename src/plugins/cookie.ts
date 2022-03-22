import fp from "fastify-plugin";
import cookie, { FastifyCookieOptions } from "fastify-cookie";

/**
 * Extend the DefaultConfig with our CookieConfig
 */
declare module "../config.d" {
  interface DefaultConfig {
    cookieConfig: CookieConfig;
  }
}

/**
 * Check out https://github.com/fastify/fastify-cookie for more configuration details
 */
export interface CookieConfig extends FastifyCookieOptions {}

export default fp(
  async function (fastify) {
    const { cookieConfig } = fastify.config;
    console.log(cookieConfig);
    fastify.register(cookie, cookieConfig);
  },
  {
    name: "cookie",
  }
);
