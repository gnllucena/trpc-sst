import { trpc } from "../lib/trpc"

export function Page() {
  const { data } = trpc.greet.useQuery()

  return (
    <div className="flex h-full items-center justify-center text-8xl">
      {data}
    </div>
  )
}
