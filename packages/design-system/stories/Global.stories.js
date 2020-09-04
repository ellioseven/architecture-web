import React from "react"
import { StoryWrapperContained } from "./StoryWrapper"
import { Global } from "@ellioseven/ui"

export default {
  title: "Global",
  component: Global
}

export const Default = args => (
  <StoryWrapperContained>
    <h1>Curabitur vitae nibh pellentesque, efficitur urna eu, feugiat mauris.</h1>
    <h2>Vestibulum vulputate iaculis purus, quis tempus urna</h2>
    <h3>Vivamus quis nisi fringilla, commodo augue non, feugiat arcu</h3>
    <h4>Donec sed risus a dui fringilla venenatis id sollicitudin velit</h4>
    <p>As to my job and my color vision, no, colorblindness doesn’t affect my work as much as you’d think. <strong>During design meetings</strong>, I can quickly point out areas where we need to <a href="#">reconsider our color palette</a>. While reviewing layouts, I’m able to explain why we need to evaluate how—and if—we’re only conveying information with color. I like that I can bring a singular perspective to the table and a voice for <code>rm -rf</code> others like me; I am able to offer insights that others don’t necessarily have.</p>
    <pre>
      <code>$ ls -la</code>
    </pre>
    <hr />
  </StoryWrapperContained>
)

Default.args = {
  global: {}
}
