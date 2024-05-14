import { createLazyFileRoute } from "@tanstack/react-router"

import { trpc } from "../lib/trpc"

export const Route = createLazyFileRoute("/")({
  component: Index,
})

function Index() {
  const { data } = trpc.greet.useQuery()

  return (
    <div className="flex h-full items-center justify-center text-8xl">
      {data}
    </div>
  )
}
