import React from "react"
import { StoryWrapperContained } from "./StoryWrapper"
import { Lead } from "@ellioseven/ui"

export default {
  title: "Lead",
  component: Lead
}

export const Default = args => (
  <StoryWrapperContained>
    <Lead { ...args } />
  </StoryWrapperContained>
)

Default.args = {
  content: "I provide frontend, backend and operations services for web solutions. I'm based in Sydney, Australia. I work well in Agile teams and play nicely with other developers, designers, UX and project managers."
}
