import sharedConfig from "@repo/configuration-tailwind"
import type { Config } from "tailwindcss"

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
