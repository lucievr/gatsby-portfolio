import React from "react"

import SEO from "../components/seo"
import "../components/bootstrap.min.css"

import Home from "../sections/Home"
import About from "../sections/About"
import Projects from "../sections/Projects"
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
    word-wrap: break-word;
}

h1 {
    color: rgb(243, 129, 129);
    font-family: sans-serif;
}
`

const IndexPage = () => (
  <>
    <Global styles={globalStyles} />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Home />
    <About />
    <Projects />
    <Contact />

    <footer>© {new Date().getFullYear()}, Lucie Vrsovska</footer>
  </>
)

export default IndexPage
