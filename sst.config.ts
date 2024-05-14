/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "app01",
      home: "aws",
      removal: input?.stage === "production" ? "retain" : "remove",
    }
  },
  async run() {
    const server = new sst.aws.Function("Server", {
      url: true,
      handler: "apps/server/index.handler",
      environment: {
        NODE_ENV: "production",
      },
    })

    const web = new sst.aws.StaticSite("Web", {
      path: "apps/web",
      build: {
        command: "pnpm run build",
        output: "dist",
      },
      environment: {
        VITE_SERVER_URL: server.url,
      },
    })

    return {
      server: server.url,
      web: web.url,
    }
  },
})
