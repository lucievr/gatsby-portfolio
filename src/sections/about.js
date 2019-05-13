import React from "react"
// import css from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        helloImage: file(relativePath: { eq: "hello-img.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="about" className="whiteSection">
        <h2>About</h2>
        <Container>
        <Row>
        <Col sm={12} md={6} style={{ alignSelf: `center`, textAlign: `justify` }}>
        <Fade left>
        <div style={{ maxWidth: `80%`, padding: `20px`, border: `2px solid rgb(248, 124, 124)`, 
        borderRadius: `10px`, backgroundColor: `rgba(166,202,198, 0.5)`, boxShadow: `0 12px 16px rgba(0, 0, 0, 0.2)` }}>
          Hello, my name is Lucie and I am a web developer with a passion for modern technologies and creative ways of
          solving problems. I am currently enrolled in Coding Bootcamp Praha – a
          12-week intensive Full-stack Developer programme to level up my skills
          and get more experience in team programming and Agile practices.
        </div>
        </Fade>
        </Col>
        <Col sm={12} md={6}>
        <Fade right>
            <Img fluid={data.helloImage.childImageSharp.fluid} />
        </Fade>
        </Col>
        </Row>
        </Container>
      </section>
    )}
  />
)

export default About
