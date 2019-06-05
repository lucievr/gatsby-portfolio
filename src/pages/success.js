import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "@components/seo"

const SuccessPage = () => (
  <StaticQuery
    query={graphql`
      query {
        successImage: file(relativePath: { eq: "success.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{textAlign: `center`, lineHeight: 2}}>
        <SEO title="Success: Form sent" />
        <h1>Success</h1>
        <p>Your form has been successfully sent.</p>
        <div style={{ maxWidth: `500px`, margin: `20px auto` }}>
          <Img fluid={data.successImage.childImageSharp.fluid} />
        </div>
      </div>
    )}
  />
)

export default SuccessPage
