import { ServerConfig, DefaultConfig } from "../src/config.d";

const serverConfig: ServerConfig = {
  listenAddress: "localhost",
  port: 3030,
};

const config: DefaultConfig = {
  serverConfig,
};

export default config;
