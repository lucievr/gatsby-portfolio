import React from "react"
// import styled from "styled-components"
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
      <section
        id="home"
        style={{ width: `100%`, backgroundColor: `rgb(185, 225, 220)` }}
      >
        <Navbar />
        <h1
          style={{
            paddingTop: `100px`,
            color: `rgb(243, 129, 129)`,
            fontFamily: "sans-serif",
          }}
        >
          Lucie
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
