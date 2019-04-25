import React from "react"

import SEO from "../components/seo"
import "../components/bootstrap.min.css"
import "../components/main.css"

import Home from "../sections/Home"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Home />
    <About />
    <Projects />
    <Contact />

    <footer>© {new Date().getFullYear()}, Lucie Vrsovska</footer>
  </>
)

export default IndexPage
