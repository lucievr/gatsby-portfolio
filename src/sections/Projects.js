import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../components/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Fade from "react-reveal/Fade"
import { FaLink, FaCode } from "react-icons/fa";

const cardStyle = css`
width: 20rem;
min-width: 0;
max-width: 400px;
margin: 10px auto;
box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
background-color: rgba(255, 255, 255, 0.15);
position: relative;
display: flex;
flex-direction: column;
word-wrap: break-word;
background-clip: border-box;
border: 1px solid rgba(0,0,0,.125);
border-radius: .25rem;
`

const cardTitle = css`
  margin: 16px;
  padding: 4px;
  color: #F2B134;
`


const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        plantypusImage: file(relativePath: { eq: "plantypus-cafe.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        portfolioImage: file(relativePath: { eq: "portfolio.jpg" }) {
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
        <h2 className="heading--teal"><span className="dot--orange">+</span> Projects <span className="dot--orange">+</span></h2>
        <p>Here is a selection of my projects</p>
        <Container>
          <Row>
            <Col>
            <Fade bottom>
              <Card css={cardStyle}>
                <Card.Title css={cardTitle} style={{borderBottom: `3px dotted #ff7f50`, fontWeight: `400`, margin: `16px`, paddingBottom: `12px`}}>
                  Plantypus Café
                </Card.Title>
                <Card.Body style={{paddingTop: `0`}}>
                  <Img fluid={data.plantypusImage.childImageSharp.fluid} />
                  <Card.Text>
                  <p style={{marginTop: `16px`}}>Website of an ethical vegan café.</p> 
                  <p style={{margin: 0}}>Technologies used: HTML, CSS, Sass, JavaScript, Gulp.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link style={{color: `#F2B134`}} href="#"><FaLink /> Demo</Card.Link>
                  <Card.Link style={{color: `#F2B134`}} href="#"><FaCode /> GitHub</Card.Link>
                </Card.Footer>
              </Card>
              </Fade>
            </Col>
            <Col>
            <Fade bottom delay={200}>
              <Card css={cardStyle}>
                <Card.Title css={cardTitle} style={{borderBottom: `3px dotted #ff7f50`, fontWeight: `400`, margin: `16px`, paddingBottom: `12px`}}>
                  Personal Portfolio
                </Card.Title>
                <Card.Body style={{paddingTop: `0`}}>
                  <Img fluid={data.portfolioImage.childImageSharp.fluid} />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link style={{color: `#F2B134`}} href="#"><FaLink /> Demo</Card.Link>
                  <Card.Link style={{color: `#F2B134`}} href="#"><FaCode /> GitHub</Card.Link>
                </Card.Footer>
              </Card>
              </Fade>
            </Col>
          </Row>

          <Row>
            <Col>
            <Fade bottom delay={100}>
              <Card css={cardStyle}>
                <Card.Title css={cardTitle} style={{borderBottom: `3px dotted #ff7f50`, fontWeight: `400`, margin: `16px`, paddingBottom: `12px`}}>
                  Project III Title
                </Card.Title>
                <Card.Body style={{paddingTop: `0`}}>
                  <Img fluid={data.laptopImage.childImageSharp.fluid} />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link style={{color: `#F2B134`}} href="#"><FaLink /> Demo</Card.Link>
                  <Card.Link style={{color: `#F2B134`}} href="#"><FaCode /> GitHub</Card.Link>
                </Card.Footer>
              </Card>
              </Fade>
            </Col>
            <Col>
            <Fade bottom delay={200}>
              <Card css={cardStyle}>
                <Card.Title css={cardTitle} style={{borderBottom: `3px dotted #ff7f50`, fontWeight: `400`, margin: `16px`, paddingBottom: `12px`}}>
                  Project IV Title
                </Card.Title>
                <Card.Body style={{paddingTop: `0`}}>
                  <Img fluid={data.plantypusImage.childImageSharp.fluid} />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link style={{color: `#F2B134`}} href="#"><FaLink /> Demo</Card.Link>
                  <Card.Link style={{color: `#F2B134`}} href="#"><FaCode /> GitHub</Card.Link>
                </Card.Footer>
              </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    )}
  />
)

export default Projects
