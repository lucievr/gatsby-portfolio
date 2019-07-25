import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Fade from "react-reveal/Fade"
import { FaLink, FaCode } from "react-icons/fa"

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
        droneImage: file(relativePath: { eq: "dronify.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        shoolixImage: file(relativePath: { eq: "shoolix.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="projects" className="section--dark">
        <h2 className="heading--teal">
          <span className="symbol--orange">+</span> Projects{" "}
          <span className="symbol--orange">+</span>
        </h2>
        <p>Here is a selection of my projects.</p>
        <Container>
          <Row>
            <Col>
              <Fade bottom>
                <Card className="card--main">
                  <Card.Title className="card__title">
                    PLANTYPUS CAFÉ
                  </Card.Title>
                  <Card.Body className="card__body">
                    <Img fluid={data.plantypusImage.childImageSharp.fluid} />
                    <Card.Text>
                      <p className="card__subtitle">Website of a vegan café.</p>
                      <p style={{ margin: 0 }}>
                        <span style={{ color: `#ff7f50`, fontWeight: `500` }}>
                          Technologies used:
                        </span>{" "}
                        HTML, SCSS + BEM methodology, Bootstrap, vanilla
                        JavaScript, Gulp.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link
                      className="card__link"
                      href="https://plantypus.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> Demo
                    </Card.Link>
                    <Card.Link
                      className="card__link"
                      href="https://github.com/lucievr/plantypus-cafe-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCode /> GitHub
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </Fade>
            </Col>
            <Col>
              <Fade bottom delay={200}>
                <Card className="card--main">
                  <Card.Title className="card__title">
                    DEVELOPER PORTFOLIO
                  </Card.Title>
                  <Card.Body className="card__body">
                    <Img fluid={data.portfolioImage.childImageSharp.fluid} />
                    <Card.Text>
                      <p className="card__subtitle">Personal portfolio site.</p>
                      <p style={{ margin: 0 }}>
                        <span style={{ color: `#ff7f50`, fontWeight: `500` }}>
                          Technologies used:
                        </span>{" "}
                        JavaScript, React, Gatsby, GraphQL, Babel, Webpack,
                        Styled Components.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link
                      className="card__link"
                      href="https://www.lucie.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> Demo
                    </Card.Link>
                    <Card.Link
                      className="card__link"
                      href="https://github.com/lucievr/gatsby-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCode /> GitHub
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </Fade>
            </Col>
          </Row>

          <Row>
            <Col>
              <Fade bottom delay={100}>
                <Card className="card--main">
                  <Card.Title className="card__title">DRONIFY</Card.Title>
                  <Card.Body className="card__body">
                    <Img fluid={data.droneImage.childImageSharp.fluid} />
                    <Card.Text>
                      <p className="card__subtitle">
                        E-commerce site for high-tech multi-purpose drones.
                      </p>
                      <p style={{ margin: 0 }}>
                        <span style={{ color: `#ff7f50`, fontWeight: `500` }}>
                          Technologies used:
                        </span>{" "}
                        JAMstack with JavaScript, React, Redux, Gatsby, GraphQL,
                        MongoDB, Auth0, Emotion, Netlify.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link
                      className="card__link"
                      href="https://dronify.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> Demo
                    </Card.Link>
                    <Card.Link
                      className="card__link"
                      href="https://github.com/n0rtt/dronify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCode /> GitHub
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </Fade>
            </Col>
            <Col>
              <Fade bottom delay={200}>
                <Card className="card--main">
                  <Card.Title className="card__title">SHOOLIX</Card.Title>
                  <Card.Body className="card__body">
                    <Img fluid={data.shoolixImage.childImageSharp.fluid} />
                    <Card.Text>
                      <p className="card__subtitle">
                        Sport & leisure shoe product compare app. [WIP]
                      </p>
                      <p style={{ margin: 0 }}>
                        <span style={{ color: `#ff7f50`, fontWeight: `500` }}>
                          Technologies used:
                        </span>{" "}
                        JavaScript, React, Gatsby, GraphQL, Firebase, Emotion.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link
                      className="card__link"
                      href="#"
                      style={{ color: `grey` }}
                    >
                      <FaLink /> Demo
                    </Card.Link>
                    <Card.Link
                      className="card__link"
                      href="#"
                      style={{ color: `grey` }}
                    >
                      <FaCode /> GitHub
                    </Card.Link>
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
