import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Css from "../components/main.css"
import About from "../sections/about"


const IndexPage = () => (
    <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="home" style={{width: `100%`, backgroundColor: `rgb(185, 225, 220)`}}>
    <Navbar />
      <h1 style={{paddingTop: `100px`, color: `rgb(243, 129, 129)`, fontFamily: 'sans-serif'}}>Lucie</h1>
      <p>Welcome to my portfolio site.</p>
      <div style={{ maxWidth: `400px`}}>
        <Image />
      </div>
    </section>
    <About />
    <section id="projects" style={{backgroundColor: `rgb(185, 225, 220)`}}>
    <h1>Projects</h1>
    <p>Here is a selection of my projects</p>
    </section>
    <section id="contact" style={{backgroundColor: `rgb(242, 242, 242)`}}>
    <h1>Contact</h1>
    <p>Get in touch</p>
    </section>
    <footer>© {new Date().getFullYear()}, Lucie Vrsovska</footer>
    </>
);

export default IndexPage
