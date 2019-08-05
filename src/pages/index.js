import React from "react"

import SEO from "@components/seo"
import "@components/bootstrap.min.css"

import { Global } from "@emotion/core"
import GlobalStyles from "@components/style"

import Home from "@sections/Home"
import About from "@sections/About"
import Projects from "@sections/Projects"
import Skills from "@sections/Skills"
import Contact from "@sections/Contact"


const IndexPage = () => (
  <>
    <Global styles={GlobalStyles} />
    <SEO title="Home" keywords={[`developer`, `portfolio`, `prague`, `gatsby`, `react`, `frontend`, `lucie vrsovska`]} />

    <Home />
    <hr />
    <About />
    <hr />
    <Projects />
    <hr />
    <Skills />
    <hr />
    <Contact />

    <footer>© {new Date().getFullYear()} Lucie Vrsovska</footer>
  </>
)

export default IndexPage
