import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        notFoundImage: file(relativePath: { eq: "404.png" }) {
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
        <SEO title="404: Not found" />
        <h1>NOTHING TO SEE HERE</h1>
        <p>Oops! You just hit a route that doesn&#39;t exist... Try again.</p>
        <div style={{ maxWidth: `500px`, margin: `20px auto` }}>
          <Img fluid={data.notFoundImage.childImageSharp.fluid} />
        </div>
      </div>
    )}
  />
)

export default NotFoundPage
