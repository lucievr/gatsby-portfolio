import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        helloImage: file(relativePath: { eq: "hello-img2.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="about" style={{ backgroundColor: `rgb(242, 242, 242)` }}>
        <h1>About</h1>
        <div style={{ maxWidth: `500px`, marginLeft: `auto` }}>
          <Img fluid={data.helloImage.childImageSharp.fluid} />
        </div>
        <p>Hello, my name is Lucie and I am a web developer.</p>
      </section>
    )}
  />
)

export default About
