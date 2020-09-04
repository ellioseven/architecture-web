import React from "react"
import { StoryWrapperContained } from "./StoryWrapper"
import { Meta } from "@ellioseven/ui"

export default {
  title: "Meta",
  component: Meta
}

export const Default = args => (
  <StoryWrapperContained>
    <Meta { ...args } />
  </StoryWrapperContained>
)

Default.args = {
  items: [
    { label: "Written", value: <strong>10.09.2020 </strong> },
    { label: "Paradigm", value: <a href="#">Authentication</a> }
  ]
}
