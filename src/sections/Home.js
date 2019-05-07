import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navbar from "../components/Navbar"
import Typist from "react-typist"

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
        <div style={{ margin: `60px`, marginLeft: `200px` }}>
          <Typist cursor={{ hideWhenDone: `true`, hideWhenDoneDelay: `8000` }}>
            <span className="bigHeading">
              {"<"} Lucie {">"}
            </span>
            <Typist.Delay ms={500} /> <br />
            <span className="bigHeading">
              {"{"} Full-stack web developer {"}"}
            </span>
          </Typist>
        </div>

        <div style={{ maxWidth: `400px`}}>
          <Img fluid={data.laptopImage.childImageSharp.fluid} />
        </div>
      </section>
    )}
  />
)

export default Home
