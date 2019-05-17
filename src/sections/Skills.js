import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Fade from "react-reveal/Fade"
import Bootstrap from "../images/bootstrap.png"
import Code from "../images/code.png"
import Cssicon from "../images/css.png"
import Gatsby from "../images/gatsby.png"
import Git from "../images/git.png"
import Github from "../images/github.png"
import Graphqlicon from "../images/graphql.png"
import Gulp from "../images/gulp.png"
import Htmlicon from "../images/html.png"
import Jsicon from "../images/js.png"
import Mongo from "../images/mongodb.png"
import Netlify from "../images/netlify.png"
import Reacticon from "../images/react.png"
import Sassicon from "../images/sass.png"
import Webpack from "../images/webpack.png"

const Skills = () => {
  return (
    <section id="skills" className="whiteSection">
      <h2>SKILLS</h2>
      <p>Skills, technologies and tools I use:</p>

      <Container>
        <Row>
          <Col>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Bootstrap}
                alt="bootstrap"
                className="skillIcons circleIcons hvr-grow"
              />
            </a>
          </Col>
        </Row>

        <Row>
          <Col>
            <a
              href="https://webpack.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Webpack}
                alt="webpack"
                className="skillIcons hvr-grow"
              />
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="github" className="skillIcons hvr-grow" />
            </a>
          </Col>

          <Col>
            <a
              href="https://gulpjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Gulp} alt="gulp" className="skillIcons hvr-grow" />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Netlify}
                alt="netlify"
                className="skillIcons hvr-grow"
              />
            </a>
          </Col>
        </Row>

        <Row>
          <Col>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Sassicon} alt="sass" className="skillIcons hvr-grow" />
            </a>
          </Col>
          <Col>
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Git} alt="git" className="skillIcons hvr-grow" />
            </a>
          </Col>
          <Col>
            <a href="" target="_blank" rel="noopener noreferrer" />
            <img
              src={Jsicon}
              alt="javascript"
              className="skillIcons hvr-grow"
            />
          </Col>
          <Col>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Reacticon}
                alt="react"
                className="skillIcons hvr-grow"
              />
            </a>
          </Col>

          <Col>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Mongo} alt="mongodb" className="skillIcons hvr-grow" />
            </a>
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="" target="_blank" rel="noopener noreferrer" />
            <img
              src={Cssicon}
              alt="css"
              className="skillIcons circleIcons hvr-grow"
            />
          </Col>
          <Col>
            <a
              href="https://graphql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Graphqlicon}
                alt="graphql"
                className="skillIcons hvr-grow"
              />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Gatsby}
                alt="gatsby"
                className="skillIcons circleIcons gatsbyicon hvr-grow"
              />
            </a>
          </Col>
          <Col>
            <a href="" target="_blank" rel="noopener noreferrer" />
            <img
              src={Htmlicon}
              alt="html"
              className="skillIcons circleIcons hvr-grow"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Code} alt="vs code" className="skillIcons hvr-grow" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
