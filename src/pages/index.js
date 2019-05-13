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

.topHeading {
  color: white;
  font-size: calc(20px + 2vw);
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  line-height: 2.5;
}
.bottomHeading {
  color: #756c83;
  font-size: calc(12px + 1.5vw);
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}

.name {
  color: rgb(248, 124, 124);
  font-weight: 900;
}

.Typist .Cursor {
  display: inline-block; 
  color: 	rgb(248, 124, 124);
  font-size: calc(12px + 1.5vw);
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
    color: 	rgb(248, 124, 124);
}
section {
  padding: 40px;
  min-height: 100vh;
  width: 100%;
}

container {
  display: flex;
}

.colorSection {
  background-color: rgb(166,202,198);
}

.whiteSection {
  ${'' /* background-color: rgb(242, 242, 242); */}
  background-color: #756c83;
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
  background-color: rgb(166,202,198);
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
