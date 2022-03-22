import { ServerConfig, DefaultConfig } from "../src/config.d";
import type { CookieConfig } from "./../src/plugins/cookie";
import type { SessionConfig } from "./../src/plugins/session";

const serverConfig: ServerConfig = {
  listenAddress: "localhost",
  port: 3030,
};

const cookieConfig: CookieConfig = {
  secret:
    "OVERWRITE IT in development.json or production.json AND DO NEVER COMMIT CREDENTIALS TO GIT!",
  parseOptions: {
    signed: true, // when disabled, everything works fine
  },
};

const sessionConfig: SessionConfig = {
  secret:
    "Needs to be the same than Cookie Secret. OVERWRITE IT in development.json or production.json AND DO NEVER COMMIT CREDENTIALS TO GIT!",
  // unsignSignedCookie: true,
  cookie: { secure: "auto" },
};

const config: DefaultConfig = {
  serverConfig,
  cookieConfig,
  sessionConfig,
};

export default config;
