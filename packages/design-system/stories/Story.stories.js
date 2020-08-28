import React from "react"
import { Welcome } from "@storybook/react/demo"
import { Logo } from "@ellioseven/ui"

export default {
  title: "Welcome",
  component: Welcome,
}

export const ToStorybook = () => <Logo />

ToStorybook.story = {
  name: "to Storybook",
}
