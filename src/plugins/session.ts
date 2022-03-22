import fp from "fastify-plugin";
import session from "@fastify/session";

/**
 * Extend the DefaultConfig with our CookieConfig
 */
declare module "../config.d" {
  interface DefaultConfig {
    sessionConfig: SessionConfig;
  }
}

/**
 * Check out https://github.com/fastify/session for more configuration details
 */
export interface SessionConfig extends session.Options {}

export default fp(
  async function (fastify) {
    const { sessionConfig } = fastify.config;
    console.log(sessionConfig);
    await fastify.register(session, sessionConfig);
  },
  {
    name: "session",
    // as we attach the session to a cookie, we need a dependency to the cookie plugin
    dependencies: ["cookie"],
  }
);
