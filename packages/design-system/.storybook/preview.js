import React from "react"
import { Global } from "@ellioseven/ui"

export const decorators = [
  (Story) => (
    <>
      <Global />
      <Story />
    </>
  )
]
