import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navbar from "@components/Navbar"
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
      <section id="home" className="section--dark">
        <Navbar />

        <div>
          <div className="title__top">
            <Typist
              cursor={{ hideWhenDone: `true`, hideWhenDoneDelay: `8000` }}
            >
              <span>
                Hello, this is <span className="title__name">Lucie</span>
              </span>
            </Typist>
          </div>
          <div className="title__bottom">
            {"{"} a software <span className="title__dev"> developer</span>{" "}
            {"}"}
          </div>
        </div>
        <div className="div--laptop">
          <Img fluid={data.laptopImage.childImageSharp.fluid} />
        </div>
      </section>
    )}
  />
)

export default Home
