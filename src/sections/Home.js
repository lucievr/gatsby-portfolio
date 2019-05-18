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
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="home" className="colorSection">
        <Navbar />

        <div>
          <div className="topHeading">
          <Typist cursor={{ hideWhenDone: `true`, hideWhenDoneDelay: `8000` }}>
            <span>
              Hello, I'm {"<"} <span className="name">Lucie</span> {"/>"}
            </span>
          </Typist>
        </div>
          <div className="bottomHeading">
            {"{"} a full-stack <span className="nameBottom">web developer</span> {"}"}
          </div>
        </div>

        <div style={{ width: `calc(220px + 10vw)`, margin: `0 auto`, paddingBottom: `20px` }}>
          <Img fluid={data.laptopImage.childImageSharp.fluid} />
        </div>
      </section>
    )}
  />
)

export default Home
