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
  
        <div style={{ margin: `60px` }}>
          <Typist cursor={{ hideWhenDone: `true`, hideWhenDoneDelay: `8000` }}>
            <span className="topHeading">
              Hello, I'm {"<"} <span className="name">Lucie</span> {"/>"}
            </span>
            <Typist.Delay ms={500} /> <br />
            <span className="bottomHeading">
              {"{"} a full-stack <span className="name">web developer</span> {"}"}
            </span>
          </Typist>
        </div>

        <div style={{ maxWidth: `400px`, margin: `0 auto`}}>
          <Img fluid={data.laptopImage.childImageSharp.fluid} />
        </div>
      </section>
    )}
  />
)

export default Home
