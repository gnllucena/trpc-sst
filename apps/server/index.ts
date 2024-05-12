import { initTRPC } from "@trpc/server"
import {
  APIGatewayEvent,
  awsLambdaRequestHandler,
  CreateAWSLambdaContextOptions,
} from "@trpc/server/adapters/aws-lambda"

const t = initTRPC
  .context<CreateAWSLambdaContextOptions<APIGatewayEvent>>()
  .create()

const router = t.router({
  greet: t.procedure.query(() => {
    return "Hello, World from AWS!"
  }),
})

export type AppRouter = typeof router

export const handler = awsLambdaRequestHandler({
  router: router,
  createContext: (opts) => opts,
})
