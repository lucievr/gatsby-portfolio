import React from "react"
// import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Contact = () => (
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
      <section id="contact" style={{ backgroundColor: `rgb(242, 242, 242)` }}>
        <h1>Contact</h1>
        <p>Get in touch</p>
        <div style={{ maxWidth: `500px` }}>
          <Img fluid={data.contactImage.childImageSharp.fluid} />
        </div>
      </section>
    )}
  />
)

export default Contact
