import { Subset, ServerConfig } from "./../src/config.d";

const serverConfig: Subset<ServerConfig> = {
  port: 3999,
};

export default {
  serverConfig,
};
