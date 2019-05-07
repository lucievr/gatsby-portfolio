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
  overflow-x: hidden;
}

body {
    margin: 0;
    text-align: center;
    font-size: calc(11px + 0.5vw);
    line-height: 1.5;
}

.bigHeading {
  color: rgb(243, 129, 129);
  font-size: calc(20px + 2vw);
  font-weight: 700;
}
.Typist .Cursor {
  display: inline-block; 
  color: rgb(243, 129, 129);
  font-size: calc(18px + 2vw);
  }
  .Typist .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite; }

@keyframes blink {
  0% {
    opacity: 1; }
  50% {
    opacity: 0; }
  100% {
    opacity: 1; } }

h2 {
    color: rgb(243, 129, 129);
}
section {
  padding: 40px;
}

container {
  display: flex;
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
