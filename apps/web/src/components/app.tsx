import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/react-query"

import { trpc } from "../lib/trpc"
import { Devtools } from "./devtools"
import { Page } from "./page"

export function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: import.meta.env.VITE_API_URL,
        }),
      ],
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="h-screen w-svw">
          <Page />
        </div>
        <Devtools />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
