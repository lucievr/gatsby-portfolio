import React from "react"

import SEO from "../components/seo"
import "../components/bootstrap.min.css"

import { Global } from "@emotion/core"
import GlobalStyles from "../components/style"

import Home from "../sections/home"
import About from "../sections/about"
import Projects from "../sections/projects"
import Skills from "../sections/skills"
import Contact from "../sections/contact"


const IndexPage = () => (
  <>
    <Global styles={GlobalStyles} />
    <SEO title="Home" keywords={[`developer`, `portfolio`, `prague`, `gatsby`, `react` ]} />

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
