import React from 'react'

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

const Skills = () => (
  <StaticQuery
    query={graphql`
      query {
        contactImage: file(relativePath: { eq: "contact-img.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="skills" className="whiteSection">
        <h2>SKILLS</h2>
        <p>Check out my skillz</p>
        <Fade left>
        <div style={{ maxWidth: `500px` }}>
          <Img fluid={data.contactImage.childImageSharp.fluid} />
        </div>
        </Fade>
      </section>
    )}
  />
)

export default Skills