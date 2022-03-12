# Getting Started with Fastify-CLI [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)

This project was bootstrapped with Fastify-CLI.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).

## Overwriting Config with config/development.ts or config/production.ts

Here is an example how to overwrite settings in development or production from the `default.ts` configuration.

To learn `node-config`, check out the [node-config README](https://www.npmjs.com/package/config)

`config/production.ts`

```javascript
import { Subset, ServerConfig } from "./../src/config.d";

const serverConfig: Subset<ServerConfig> = {
  port: 3999,
};

export default {
  serverConfig,
};
```

# **MAKE SURE TO NEVER COMMIT CREDENTIALS TO GIT!**
