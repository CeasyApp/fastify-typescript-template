/**
 * Use Subset Type because Partial<T> does not work for nested properties
 * In development.ts and production.ts we only want to overwrite some parts of the default config
 */
export type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object ? Subset<K[attr]> : K[attr];
};

export interface ServerConfig {
  /**
   * The address to which the server should be bind to. To listen on every network adapter, use 0.0.0.0
   */
  listenAddress: string;
  /**
   * The port under which the clients can connect to this server
   */
  port: number;
}

export interface DefaultConfig {
  serverConfig: ServerConfig;
}
