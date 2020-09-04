import React from "react"

export const StoryWrapperContained = ({ children }) => (
  <div style={{ maxWidth: 640, margin: "40px auto"}}>
    { children }
  </div>
)
