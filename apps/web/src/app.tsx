import { StrictMode } from "react"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"

import { routeTree } from "./route-tree.gen"

import "./globals.css"

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const element = document.getElementById("app")!

if (!element.innerHTML) {
  const root = ReactDOM.createRoot(element)

  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
