import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Fade from "react-reveal/Fade"
import { FaLink, FaCode } from "react-icons/fa"
import DronifyVid from "../images/dronify.mp4"
import PlantypusVid from "../images/plantypus.mp4"
import ShoolixVid from "../images/shoolix.mp4"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        portfolioImage: file(relativePath: { eq: "portfolio.jpg" }) {
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
        <h2>
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
                  <video
                      id="plantypus-video"
                      width="100%"
                      height="100%"
                      src={PlantypusVid}
                      preload="auto"
                      autoPlay
                      muted
                      loop
                    />
                    <Card.Text>
                      <p className="card__subtitle">
                        Plant-based café website.
                      </p>
                      <p className="text--tech">
                        <span className="span--tech">Technologies used:</span>{" "}
                        HTML, SCSS + BEM styling, Bootstrap, vanilla JavaScript,
                        Gulp.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <OutboundLink
                      className="card__link"
                      href="https://plantypus.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> Demo
                    </OutboundLink>
                    <OutboundLink
                      className="card__link"
                      href="https://github.com/lucievr/plantypus-cafe-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: `1.25rem` }}
                    >
                      <FaCode /> GitHub
                    </OutboundLink>
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
                      <p className="text--tech">
                        <span className="span--tech">Technologies used:</span>{" "}
                        JavaScript, React, Gatsby, GraphQL, Babel, Webpack,
                        Styled Components.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <OutboundLink
                      className="card__link"
                      href="https://www.lucie.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> Demo
                    </OutboundLink>
                    <OutboundLink
                      className="card__link"
                      href="https://github.com/lucievr/gatsby-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: `1.25rem` }}
                    >
                      <FaCode /> GitHub
                    </OutboundLink>
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
                    <video
                      id="dronify-video"
                      width="100%"
                      height="100%"
                      src={DronifyVid}
                      preload="auto"
                      autoPlay
                      muted
                      loop
                    />
                    <Card.Text>
                      <p className="card__subtitle">
                        E-commerce site for high-tech multi-purpose drones.
                      </p>
                      <p className="text--tech">
                        <span className="span--tech">Technologies used:</span>{" "}
                        JAMstack with JavaScript, React, Redux, Gatsby, GraphQL,
                        MongoDB, Auth0, Emotion, Netlify.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <OutboundLink
                      className="card__link"
                      href="https://dronify.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> Demo
                    </OutboundLink>
                    <OutboundLink
                      className="card__link"
                      href="https://github.com/n0rtt/dronify"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: `1.25rem` }}
                    >
                      <FaCode /> GitHub
                    </OutboundLink>
                  </Card.Footer>
                </Card>
              </Fade>
            </Col>
            <Col>
              <Fade bottom delay={200}>
                <Card className="card--main">
                  <Card.Title className="card__title">SHOOLIX</Card.Title>
                  <Card.Body className="card__body">
                  <video
                      id="shoolix-video"
                      width="100%"
                      height="100%"
                      src={ShoolixVid}
                      preload="auto"
                      autoPlay
                      muted
                      loop
                    />
                    <Card.Text>
                      <p className="card__subtitle">
                        Sport & leisure shoe product compare app. [WIP]
                      </p>
                      <p className="text--tech">
                        <span className="span--tech">Technologies used:</span>{" "}
                        JavaScript, React, Gatsby, GraphQL, Firebase, Emotion, Netlify serverless functions.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <OutboundLink
                      className="card__link"
                      href="#"
                      style={{ color: `grey` }}
                    >
                      <FaLink /> Demo
                    </OutboundLink>
                    <OutboundLink
                      className="card__link"
                      href="#"
                      style={{ color: `grey`, marginLeft: `1.25rem` }}
                    >
                      <FaCode /> GitHub
                    </OutboundLink>
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
