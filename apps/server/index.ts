import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda"

import { router } from "./src/lib/trpc"

export const handler = awsLambdaRequestHandler({
  router: router,
  // createContext() {
  //   return {}
  // },
  onError({ error, ctx }) {
    console.error("Error", error)
  },
  responseMeta({ data, ctx, errors, type }) {
    return {
      status: errors ? 400 : 200,
      headers: {
        "Access-Control-Allow-Origin": getAccessControlAllowOrigin("dev"),
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    }
  },
})

function getAccessControlAllowOrigin(stage: string) {
  if (stage === "prod") {
    return "https://example.com"
  } else {
    return "http://localhost:5173"
  }
}
