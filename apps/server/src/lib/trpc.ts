import { initTRPC } from "@trpc/server"
import {
  APIGatewayEvent,
  CreateAWSLambdaContextOptions,
} from "@trpc/server/adapters/aws-lambda"
import { z } from "zod"

const t = initTRPC
  .context<CreateAWSLambdaContextOptions<APIGatewayEvent>>()
  .create()

const GreetSchema = z.object({
  name: z.string(),
})

export const router = t.router({
  greet: t.procedure.query(() => {
    return "Hello, World! - From AWS!"
  }),
  login: t.procedure.input(GreetSchema).mutation(({ input: { name } }) => {
    return {
      user: {
        name: name,
        role: "ADMIN",
      },
    }
  }),
})

export type AppRouter = typeof router
