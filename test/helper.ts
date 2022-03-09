import path from "path";

const { build: buildApplication } = require("fastify-cli/helper");
const AppPath = path.join(__dirname, "../src", "app.ts");

console.log(AppPath);

// Fill in this config with all the configurations
// needed for testing the application
export function config() {
  return {};
}

// automatically build and tear down our instance
export async function build(t: any) {
  // you can set all the options supported by the fastify CLI command
  const argv = [AppPath];

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  const app = await buildApplication(argv, config());

  // tear down our app after we are done
  t.teardown(app.close.bind(app));

  return app;
}
