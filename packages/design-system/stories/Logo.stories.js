import React from "react"
import { Logo } from "@ellioseven/ui"

export default {
  title: "Logo",
  component: Logo
}

export const Default = args => (
  <Logo { ...args } />
)

Default.args = {}
