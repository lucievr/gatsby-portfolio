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
                    Plantypus Café
                  </Card.Title>
                  <Card.Body className="card__body">
                    <Img fluid={data.plantypusImage.childImageSharp.fluid} />
                    <Card.Text>
                      <p style={{ marginTop: `16px` }}>
                        Website of a vegan café.
                      </p>
                      <p style={{ margin: 0 }}>
                        <span style={{ color: `#ff7f50`, fontWeight: `500` }}>
                          Technologies used:
                        </span>{" "}
                        HTML, SCSS + BEM, Bootstrap, JavaScript, Gulp.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link className="card__link" href="https://plantypus.netlify.com/" target="_blank"
        rel="noopener noreferrer">
                      <FaLink /> Demo
                    </Card.Link>
                    <Card.Link className="card__link" href="https://github.com/lucievr/plantypus-cafe-website" target="_blank"
        rel="noopener noreferrer">
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
                      <p style={{ marginTop: `16px` }}>
                        Personal portfolio site.
                      </p>
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
                    <Card.Link className="card__link" href="https://www.lucie.dev/" target="_blank"
        rel="noopener noreferrer">
                      <FaLink /> Demo
                    </Card.Link>
                    <Card.Link className="card__link" href="https://github.com/lucievr/gatsby-portfolio" target="_blank"
        rel="noopener noreferrer">
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
                  <Card.Title className="card__title">
                    DRONIFY
                  </Card.Title>
                  <Card.Body className="card__body">
                    <Img fluid={data.laptopImage.childImageSharp.fluid} />
                    <Card.Text>
                      <p style={{ marginTop: `16px`, color: `white`, fontWeight: `600`, letterSpacing: `1px` }}>
                        E-commerce site of high-tech multi-purpose drones.
                      </p>
                      <p style={{ margin: 0 }}>
                        <span style={{ color: `#ff7f50`, fontWeight: `500` }}>
                          Technologies used:
                        </span>{" "}
                        JAMstack with JavaScript, React, Gatsby, Snipcart, GraphQL, MongoDB, Netlify, AWS Lambda.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link className="card__link" href="#">
                      <FaLink /> Demo
                    </Card.Link>
                    <Card.Link className="card__link" href="#">
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
                    Project IV Title
                  </Card.Title>
                  <Card.Body className="card__body">
                    <Img fluid={data.plantypusImage.childImageSharp.fluid} />
                    <Card.Text>
                      <p style={{ marginTop: `16px` }}>
                        Website of a vegan café.
                      </p>
                      <p style={{ margin: 0 }}>
                        <span style={{ color: `#ff7f50`, fontWeight: `500` }}>
                          Technologies used:
                        </span>{" "}
                        HTML, CSS, Sass, JavaScript, Gulp.
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link className="card__link" href="#">
                      <FaLink /> Demo
                    </Card.Link>
                    <Card.Link className="card__link" href="#">
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
