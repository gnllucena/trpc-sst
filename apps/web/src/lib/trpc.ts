import { createTRPCReact } from "@trpc/react-query"

import type { AppRouter } from "../../../server/src/lib/trpc"

export const trpc = createTRPCReact<AppRouter>()
