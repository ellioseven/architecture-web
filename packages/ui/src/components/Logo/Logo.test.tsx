import React from "react"
import { render } from "@testing-library/react"
import { waitFor } from "@testing-library/dom"
import { Logo } from "./Logo"

test("Component renders", async () => {
  const { getByTestId } = render(<Logo />)
  const output = await waitFor(() => getByTestId("logo"))
  expect(output).toBeInTheDocument()
})
