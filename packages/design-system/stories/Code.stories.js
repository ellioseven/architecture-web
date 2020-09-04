import React from "react"
import { StoryWrapperContained } from "./StoryWrapper"
import { Gist } from "@ellioseven/ui"

const Component = () => <Gist id="458ae152cc3449e7e59d07ecf8ab9f6a" />

export default {
  title: "Code",
  component: Component
}

export const Default = args => (
  <StoryWrapperContained>
    <Component { ...args } />
  </StoryWrapperContained>
)

Default.args = {}
