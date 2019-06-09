import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Global } from "@emotion/core"
import GlobalStyles from "@components/style"

import SEO from "@components/seo"

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
      <>
        <Global styles={GlobalStyles} />
        <section className="section-suc">
          <SEO title="404: Not found" />
          <h2 className="title__name">NOTHING TO SEE HERE</h2>
          <p>Oops! You just hit a route that doesn&#39;t exist... Try again.</p>
          <div className="div--img">
            <Img fluid={data.notFoundImage.childImageSharp.fluid} />
          </div>
          <Link className="link--back" to="/">
            Go back to the homepage
          </Link>
          <footer style={{ backgroundColor: `#1a5365`, marginTop: `40px` }}>
            © {new Date().getFullYear()} Lucie Vrsovska
          </footer>
        </section>
      </>
    )}
  />
)

export default NotFoundPage
