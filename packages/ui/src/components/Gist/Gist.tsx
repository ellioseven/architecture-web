import React from "react"
import PropTypes, { InferProps } from "prop-types"
import GistEmbed from "react-gist"
import css from "styled-jsx/css"

const style = css`
  .gist {
    margin-bottom: -26px;
    margin-top: -8px;
  }
`

const propTypes = {
  id: PropTypes.string.isRequired
}

export const Gist = ({ id }: InferProps<typeof propTypes>): React.ReactNode => (
  <div className="gist">
    <GistEmbed id={ id } />
    <style jsx>{ style }</style>
  </div>
)
