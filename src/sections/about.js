import React from "react"
// import css from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

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
        <Fade right>
        <div style={{ maxWidth: `500px`, marginLeft: `auto` }}>
          <Img fluid={data.helloImage.childImageSharp.fluid} />
        </div>
        </Fade>
        <p>Hello, my name is Lucie and I am a web developer.</p>
      </section>
    )}
  />
)

export default About
