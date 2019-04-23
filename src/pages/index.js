import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="home">
      <h1>Lucie</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </section>
    <section id="about">About</section>
    <p>Hello, my name is Lucie and I am a web developer.</p>
    <section id="projects">Projects</section>
    <p>Here is a selection of my projects</p>
    <section id="contact">Contact</section>
    <p>Get in touch</p>
  </Layout>
)

export default IndexPage
