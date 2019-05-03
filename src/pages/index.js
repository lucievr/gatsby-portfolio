import React from "react"

import SEO from "../components/seo"
import "../components/bootstrap.min.css"
// import "../components/anime.min"
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
  overflow-x: hidden;
}

body {
    margin: 0;
    text-align: center;
    font-size: calc(11px + 0.5vw);
    line-height: 1.5;
}

h1 {
  padding-top: 100px;
  color: rgb(243, 129, 129);
  font-size: calc(20px + 2vw);
}

h2 {
    color: rgb(243, 129, 129);
}
section {
  padding: 40px;
}

.colorSection {
  background-color: rgb(185, 225, 220);
  width: 100%;
}

.whiteSection {
  background-color: rgb(242, 242, 242);
}

.contactIcons {
  font-size: 5rem;
  color: #756c83;
}
.contactIcons:hover {
  background-color: rgb(242, 242, 242);
  border-radius: 50%;
}
footer {
  background-color: rgb(185, 225, 220);
  padding-bottom: 20px;
}
.ml11 {
  font-weight: 900;
  font-size: 3.5em;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 { 
  top: 0; 
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
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
