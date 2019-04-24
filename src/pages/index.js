import React from "react"

import SEO from "../components/seo"
import "../components/main.css"
import Home from "../sections/Home"
import About from "../sections/About"
import Contact from "../sections/Contact"

const IndexPage = () => (
    <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home />
    <About />

    <section id="projects" style={{backgroundColor: `rgb(185, 225, 220)`}}>
    <h1>Projects</h1>
    <p>Here is a selection of my projects</p>
    </section>

    <Contact />

    <footer>© {new Date().getFullYear()}, Lucie Vrsovska</footer>
    </>
);

export default IndexPage
