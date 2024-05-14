import { createLazyFileRoute } from "@tanstack/react-router"

import { trpc } from "../lib/trpc"

export const Route = createLazyFileRoute("/about")({
  component: About,
})

function About() {
  const { mutate } = trpc.login.useMutation()

  return (
    <div className="p-2">
      <button
        onClick={() => {
          const data = {
            name: "John Doe",
          }

          mutate(data, {
            onSuccess: (data) => {
              console.log("User logged in", data)
            },
          })
        }}
      >
        Save
      </button>
    </div>
  )
}
