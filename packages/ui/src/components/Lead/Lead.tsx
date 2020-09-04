import React from "react"
import PropTypes, { InferProps } from "prop-types"
import css from "styled-jsx/css"

// language=scss
const style = css`
  @import "lib";
  @import "mixins";
 
  .lead {
    @include th-hs(niki);
    @include type-leader-clear;
  }
`

const propTypes = {
  content: PropTypes.string.isRequired
}

export const Lead = ({ content } : InferProps<typeof propTypes>): React.ReactNode => (
  <>
    <p className="lead">{ content }</p>
    <style jsx>{ style }</style>
  </>
)
