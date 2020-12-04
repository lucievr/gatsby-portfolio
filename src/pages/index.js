import React from "react"

import SEO from "@components/seo"
import "@components/bootstrap.min.css"

import { Global } from "@emotion/core"
import GlobalStyles from "@components/style"
import { injectGlobal } from 'emotion'
import Mellanie from "../fonts/mellanie.otf"

import Home from "@sections/Home"
import About from "@sections/About"
import Projects from "@sections/Projects"
import Skills from "@sections/Skills"
import Contact from "@sections/Contact"

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Mellanie";
    font-style: normal;
    src: url(${Mellanie});
    font-display: swap;
  }
`

const IndexPage = () => (
  <>
    <Global styles={GlobalStyles} />
    <SEO title="Home" keywords={[`web developer`, `portfolio`, `lucie vrsovska`, `lucie.dev`, `react developer`, `prague`, `frontend`, `react`, `javascript`, `gatsby`]} />

    <Home />
    <hr />
    <About />
    <hr />
    <Projects />
    <hr />
    <Skills />
    <hr />
    <Contact />

    <footer>© {new Date().getFullYear()} Lucie Vrsovska. 
    Code-crafted by <a href="https://www.lucie.dev/" target="_blank" rel="noopener noreferrer" style={{fontWeight: `bold`}}>
    Lucie</a>
    </footer>
    </>
)

export default IndexPage
