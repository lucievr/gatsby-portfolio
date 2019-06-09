import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Global } from "@emotion/core"
import GlobalStyles from "@components/style"

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
      <>
        <Global styles={GlobalStyles} />
        <section className="section-suc">
          <SEO title="Success: Form sent" />
          <h2 className="title__name">Success!</h2>
          <p>Your form has been successfully submitted.</p>
          <div className="div--img">
            <Img fluid={data.successImage.childImageSharp.fluid} />
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

export default SuccessPage
