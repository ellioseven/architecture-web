import React from "react"
import { StoryWrapperContained } from "./StoryWrapper"
import { Gist, Lead, Meta } from "@ellioseven/ui"

const Component = () => (
  <article>
    <h1>Cypress & Github Actions.</h1>
    <Meta items={ metaItems } />
    <Lead content="I provide frontend, backend and operations services for web solutions. I'm based in Sydney, Australia. I work well in Agile teams and play nicely with other developers, designers, UX and project managers." />
    <hr />
    <p>As to my job and my color vision, no, colorblindness doesn’t affect my work as much as you’d think. <strong>During design meetings</strong>, I can quickly point out areas where we need to <a href="#">reconsider our color palette</a>. While reviewing layouts, I’m able to explain why we need to evaluate how—and if—we’re only conveying information with color. I like that I can bring a singular perspective to the table and a voice for <code>rm -rf</code> others like me; I am able to offer insights that others don’t necessarily have.</p>
    <Gist id="458ae152cc3449e7e59d07ecf8ab9f6a" />
    <p>I like that I can bring a singular perspective to the table and a voice for others like me; I am able to offer insights that others don’t necessarily have.</p>
    <h2>What If Development Is A Bottleneck?</h2>
    <p>As to my job and my color vision, no, colorblindness doesn’t affect my work as much as you’d think. During design meetings, I can quickly point out areas where we need to reconsider our color palette. While reviewing layouts, I’m able to explain why we need to evaluate how—and if—we’re only conveying information with color. I like that I can bring a singular perspective to the table and a voice for others like me; I am able to offer insights that others don’t necessarily have.</p>
    <h3>But Surely Not</h3>
    <p>I provide frontend, backend and operations services for web solutions. I'm based in Sydney, Australia. I work well in Agile teams and play nicely with other developers, designers, UX and project managers.</p>
  </article>
)

const metaItems = [
  { label: "Written", value: <strong>10.09.2020 </strong> },
  { label: "Paradigm", value: <a href="#">Authentication</a> }
]

export default {
  title: "Article",
  component: Component
}

export const Default = args => (
  <StoryWrapperContained>
    <Component />
  </StoryWrapperContained>
)

Default.args = {}
