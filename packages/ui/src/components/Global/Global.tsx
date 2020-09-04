import React from "react"
import css from "styled-jsx/css"

// language=scss
const style = css.global`
  @import "lib";
  @import "mixins";

  @include establish-baseline;

  html {
    -webkit-text-size-adjust: none;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: $color-white;
    color: $color-body;
    font-family: $type-font-family-body;
    font-weight: 500;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  address,
  blockquote,
  hr {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    @include type-leader-clear;
    color: $color-display;
    font-weight: 500;
  }

  h1 {
     @include th-hs(walter);
  }

  h2 {
    @include th-hs(mike);
  }

  h3 {
    @include th-hs(junior);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h4, h5, h6 {
    @include th-hs(saul);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  p {
    @include type-leader;
    @include type-leader-clear;
  }

  address {
    @include type-leader;
    @include type-leader-clear;
    font-style: normal;
  }

  blockquote {
    @include type-leader;
    @include type-leader-clear;
    @include type-leader-clear('*');
    font-style: italic;
    padding-left: 2em;

    cite {
      display: block;
    }
  }

  cite {
    font-style: italic;
  }
  
  strong {
    color: $color-display;
    font-weight: 500;
  }

  hr {
    @include type-leader-step($steps: 1 2);
    @include type-leader-clear;
    background: $color-grey-steam;
    border: 0;
    height: 4px;
  }

  a {
    color: $color-link;
    text-decoration: underline;
    word-wrap: break-word;

    &:hover,
    &:focus {
      color: $color-link-hover;
    }
  }

  small {
    @include th-h(
      $heading: saul,
      $include: font-size line-height
    );
  }

  img,
  iframe,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }

  embed,
  img,
  object,
  video {
    height: auto;
    max-width: 100%;
  }

  figure {
    @include type-leader;
    @include type-leader-clear;

    figcaption {
      @include type-leader(.5);
      @include type-leader-clear
    }
  }

  ul,
  ol,
  li,
  dl,
  dt,
  dd {
    margin: 0;
    padding: 0;
  }

  ul,
  ol,
  dl {
    @include type-leader;
    @include type-leader-clear;
  }

  ul,
  ol {
    padding-left: 1em;

    ul,
    ol {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  dl {

    dt {
      font-weight: bold;
    }

    dd {
      @include type-leader(.25);
      @include type-leader-clear;
    }
  }

  table,
  caption,
  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    margin: 0;
    padding: 0;
  }

  table {
    @include type-leader;
    @include type-leader-clear;
    background-color: $color-white;
    border-bottom: 1px solid $color-grey-cement;
    border-collapse: collapse;
    border-radius: 4px;
    border-top: 1px solid $color-grey-cement;
    width: 100%;

    table {
      border: 0;
      margin-bottom: 0;
      margin-top: 0;
    }

    caption {
      @include type-leader;
      @include type-leader-clear;
      text-align: left;
    }

    td,
    th {
      background-color: $color-white;
      border-bottom: 1px solid $color-grey-cement;
      text-align: left;
      vertical-align: middle;

      &:last-child {
        border-right: 0;
      }
    }

    th {
      font-weight: 700;
    }

    thead th {
      background-color: $color-grey-steam;
    }
  }

  code,
  pre {
    font-family: $type-font-family-mono;
    font-weight: 500;
    margin: 0;
    padding: 0;
    tab-size: 4;
  }

  code {
    color: $color-green-retro;
    display: inline-block;
  }
  
  p code {
    @include th-hs($heading: saul, $include: (font-size, line-height));
    border: 1px solid $color-grey-cement;
    padding: rem(4px 8px);
    border-radius: rem(4px);
  }

  pre {
    @include type-leader;
    @include type-leader-clear;
    @include th-hs($heading: saul, $include: (font-size, line-height));
    border: 1px solid $color-grey-cement;
    border-radius: 6px;
    color: $color-grey-abyss;
    display: block;
    max-width: 100%;
    overflow: auto;
    padding: rem(20px);

    code {
      background: none;
      color: inherit;
      display: block;
      padding: 0;
      width: 100%;
    }
  }
  
  .gist {
    @include type-leader;
    @include type-leader-clear;
  }

`

export const Global: React.FunctionComponent = () => (
  <style jsx global>{ style }</style>
)
