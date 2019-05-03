import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navbar from "../components/Navbar"

const Home = () => (
  <StaticQuery
    query={graphql`
      query {
        laptopImage: file(relativePath: { eq: "laptop.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="home" className="colorSection">
        <Navbar />
        <h1 className="ml11">
          <span class="text-wrapper">
            <span class="line line1" />
            <span class="letters">
              {"<"} Lucie {">"}
            </span>
          </span>
        </h1>
        <p>Welcome to my portfolio site.</p>
        <div style={{ maxWidth: `400px` }}>
          <Img fluid={data.laptopImage.childImageSharp.fluid} />
        </div>
      </section>
    )}
  />
)

export default Home
