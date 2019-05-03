import React from "react"

import SEO from "../components/seo"
import "../components/bootstrap.min.css"
import { css, Global } from "@emotion/core"

import Home from "../sections/Home"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Contact from "../sections/Contact"

const globalStyles = css`
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  overflow-y: scroll;
}

body {
    margin: 0;
    text-align: center;
    font-size: calc(11px + 0.5vw);
    line-height: 1.5;
    overflow-x: hidden;
}

h1 {
  padding-top: 100px;
  color: rgb(243, 129, 129);
}

h2 {
    color: rgb(243, 129, 129);
}
section {
  padding: 1px;
}

.colorSection {
  background-color: rgb(185, 225, 220);
  width: 100%;
}

.whiteSection {
  background-color: rgb(242, 242, 242);
}
`

const IndexPage = () => (
  <>
    <Global styles={globalStyles} />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />

    <footer>© {new Date().getFullYear()}, Lucie Vrsovska</footer>
  </>
)

export default IndexPage
