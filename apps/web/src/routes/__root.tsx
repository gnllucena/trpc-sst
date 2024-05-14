import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { httpBatchLink } from "@trpc/react-query"

import { Devtools } from "../components/devtools"
import { trpc } from "../lib/trpc"

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            throwOnError: true,
            retry: import.meta.env.NODE_ENV === "production" ? 3 : false,
          },
          mutations: {
            retry: false,
            // onError: () => {
            //   toast.error("Algo deu errado, tente novamente mais tarde")
            // },
          },
        },
      })
  )

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: import.meta.env.VITE_SERVER_URL,
          // fetch(url, options) {
          //   return fetch(url, {
          //     ...options,
          //     credentials: "include",
          //   })
          // },
        }),
      ],
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="h-screen w-svw">
          <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>{" "}
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </div>
          <hr />
          <Outlet />
        </div>
        <Devtools />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
