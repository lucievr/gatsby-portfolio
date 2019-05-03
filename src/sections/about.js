import React from "react"
// import css from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        helloImage: file(relativePath: { eq: "hello-img.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="about" className="whiteSection">
        <h2>About</h2>
        <div style={{ maxWidth: `500px`, marginLeft: `auto` }}>
          <Img fluid={data.helloImage.childImageSharp.fluid} />
        </div>
        <p>Hello, my name is Lucie and I am a web developer.</p>
      </section>
    )}
  />
)

export default About
