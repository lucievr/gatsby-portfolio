import React from 'react'

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
        <h2>Skills</h2>
        <p>Check out my skillz</p>
        <div style={{ maxWidth: `500px` }}>
          <Img fluid={data.contactImage.childImageSharp.fluid} />
        </div>
      </section>
    )}
  />
)

export default Skills