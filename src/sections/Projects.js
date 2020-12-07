import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Card from "react-bootstrap/Card"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import Fade from "react-reveal/Fade"
import { FaLink, FaCode } from "react-icons/fa"

import projects from "../components/projects"
import dronifyVid from "../images/dronify.mp4"
import padmaVid from "../images/padma.mp4"

export const VIDEO = {
  DRONIFY: dronifyVid,
  PADMA: padmaVid,
}

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      flatsy: file(relativePath: { eq: "flatsy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menshouting: file(relativePath: { eq: "menshouting.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plantypus: file(relativePath: { eq: "plantypus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolio: file(relativePath: { eq: "portfolio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Link soon (app being approved by Google Play)
    </Tooltip>
  )

  return (
    <section id="projects" className="section--plain">
      <h2>
        <span className="symbol--orange">+</span>
        &nbsp; Projects &nbsp;
        <span className="symbol--orange">+</span>
      </h2>
      <p>Here is a selection of my projects.</p>
      <div className="container--projects">
        {projects.map(project => (
          <div className="container__item" key={project.title}>
            <Fade bottom delay={project.delay}>
              <Card className="card--main">
                <Card.Title className="card__title">{project.title}</Card.Title>
                <Card.Body className="card__body">
                  {project.video ? (
                    <video
                      id={`${project.name}-video`}
                      width="100%"
                      height="100%"
                      src={VIDEO[project.name.toUpperCase()]}
                      preload="auto"
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <Img
                      className={`img ${project.name}`}
                      fluid={data[project.name].childImageSharp.fluid}
                    />
                  )}
                  <Card.Text>
                    <p className="card__subtitle">{project.subtitle}</p>
                    <p className="text--tech">
                      <span className="span--tech">Technologies used:</span>
                      &nbsp;
                      {project.tech}
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {project.name === "menshouting" ? (
                    <>
                      <OutboundLink
                        className="card__link"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink /> Info
                      </OutboundLink>
                      <p className="wip">[WIP]</p>
                    </>
                  ) : (
                    <>
                      {project.name === "flatsy" ? (
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <div
                            className="card__link"
                          >
                            <FaLink /> Demo
                          </div>
                        </OverlayTrigger>
                      ) : (
                        <OutboundLink
                          className="card__link"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink /> Demo
                        </OutboundLink>
                      )}
                      <OutboundLink
                        className="card__link"
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginLeft: `1.25rem` }}
                      >
                        <FaCode /> Code
                      </OutboundLink>
                    </>
                  )}
                </Card.Footer>
              </Card>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
