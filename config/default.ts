import { ServerConfig, DefaultConfig } from "../src/config.d";
import type { CookieConfig } from "./../src/plugins/cookie";
import type { SessionConfig } from "./../src/plugins/session";

const serverConfig: ServerConfig = {
  listenAddress: "localhost",
  port: 3030,
};

const cookieConfig: CookieConfig = {
  secret:
    "CookieSecret, OVERWRITE IT in development.json or production.json AND DO NEVER COMMIT CREDENTIALS TO GIT!",
  parseOptions: {
    signed: true, // when disabled, everything works fine
  },
};

const sessionConfig: SessionConfig = {
  secret:
    "SessionSecret, OVERWRITE IT in development.json or production.json AND DO NEVER COMMIT CREDENTIALS TO GIT!",
  // unsignSignedCookie: true,
  cookie: { secure: "auto" },
};

const config: DefaultConfig = {
  serverConfig,
  cookieConfig,
  sessionConfig,
};

export default config;
