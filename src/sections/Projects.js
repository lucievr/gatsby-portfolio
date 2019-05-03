import React from "react"
// import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../components/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card"

const Projects = () => (
    <StaticQuery
    query={graphql`
      query {
        workingImage: file(relativePath: { eq: "working.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
  <section id="projects" className="colorSection">
    <h2>Projects</h2>
    <p>Here is a selection of my projects</p>
      <Container style={{justifyContent: `center`, alignContent: `space-around`, alignItems: `center`}}>
      <Row>
      <Col><Card style={{ width: `20rem`, margin: `10px auto`}}>
      <Card.Title style={{borderBottom: `5px solid rgb(117, 108, 131)`, margin: `16px`, padding: `4px`}}>Project I Title</Card.Title>
      <Card.Body>
      <Img fluid={data.workingImage.childImageSharp.fluid} />
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href="#">Demo</Card.Link>
        <Card.Link href="#">View source</Card.Link>
      </Card.Footer>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: `20rem`, margin: `10px auto` }}>
    <Card.Title style={{borderBottom: `5px solid rgb(117, 108, 131)`, margin: `16px`, padding: `4px`}}>Project II Title</Card.Title>
      <Card.Body>
      <Img fluid={data.laptopImage.childImageSharp.fluid} />
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href="#">Demo</Card.Link>
        <Card.Link href="#">View source</Card.Link>
      </Card.Footer>
    </Card>
    </Col>
    </Row>

    <Row>
    <Col>
    <Card style={{ width: `20rem`, margin: `10px auto` }}>
    <Card.Title style={{borderBottom: `5px solid rgb(117, 108, 131)`, margin: `16px`, padding: `4px`}}>Project III Title</Card.Title>
      <Card.Body>
      <Img fluid={data.laptopImage.childImageSharp.fluid} />
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href="#">Demo</Card.Link>
        <Card.Link href="#">View source</Card.Link>
      </Card.Footer>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: `20rem`, margin: `10px auto` }}>
      <Card.Title style={{borderBottom: `5px solid rgb(117, 108, 131)`, margin: `16px`, padding: `4px`}}>Project IV Title</Card.Title>
      <Card.Body>
      <Img fluid={data.workingImage.childImageSharp.fluid} />
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href="#">Demo</Card.Link>
        <Card.Link href="#">View source</Card.Link>
      </Card.Footer>
    </Card>
    </Col>
    </Row>
  </Container>
  </section>
  )}
  />
)

export default Projects
