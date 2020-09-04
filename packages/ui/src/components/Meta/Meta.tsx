import React from "react"
import PropTypes, { InferProps } from "prop-types"
import css from "styled-jsx/css"

// language=scss
const style = css`
  @import "lib";
  @import "mixins";

  .meta {
    @include type-leader;
    @include type-leader-clear;
    @include th-hs($heading: junior, $include: font-size line-height);
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }

  .meta__item :global(strong, a) {
    font-weight: 700;
  }

  .meta__item {
    @include type-leader(.25);
    @include type-leader-clear;
    display: block;
  }
  
  .meta__label {
    color: $color-grey-ash;
  }
`

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.element.isRequired
    }).isRequired
  ).isRequired
}

export const Meta = ({ items } : InferProps<typeof propTypes>): React.ReactNode => (
  <ul className="meta">
    { items.map(({ label, value }) => (
      <li key={ label } className="meta__item">
        <span className="meta__label">{ label }: </span>
        { value }
      </li>
    )) }
    <style jsx>{ style }</style>
  </ul>
)

Meta.propTypes = propTypes
