import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export function Devtools() {
  if (import.meta.env.NODE_ENV === "production") return null

  return (
    <>
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </>
  )
}
