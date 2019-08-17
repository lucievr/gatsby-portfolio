import React from "react"
import Fade from "react-reveal/Fade"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Auth from "@images/auth0.png"
import Code from "@images/code.png"
import Gatsby from "@images/gatsby.png"
import Git from "@images/git.png"
import Github from "@images/github.png"
import Graphqlicon from "@images/graphql.png"
import Gulp from "@images/gulp.png"
import Jsicon from "@images/js.png"
import Mongo from "@images/mongodb.png"
import Netlify from "@images/netlify.png"
import Next from "@images/nextjs.png"
import Reacticon from "@images/react.png"
import Redux from "@images/redux.png"
import Snipcart from "@images/snipcart.png"
import Webpack from "@images/webpack.png"

const Skills = () => {
  return (
    <section id="skills" className="section--light">
      <h2>
        <span className="symbol--orange">+</span> Skills{" "}
        <span className="symbol--orange">+</span>
      </h2>
      <div className="div--skills">
        As a fullstack developer, I have picked up a lot of different skills and
        used various technologies and tools.
      </div>
      <Fade right>
        <Container>
          <Row>
            <Col>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="next js"
              >
                <img
                  src={Next}
                  alt="next js"
                  className="icon--skill icon--circle hvr-grow mid"
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
                title="webpack"
              >
                <img
                  src={Webpack}
                  alt="webpack"
                  className="icon--skill hvr-grow big"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="github"
              >
                <img
                  src={Github}
                  alt="github"
                  className="icon--skill hvr-grow small"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="gatsby"
              >
                <img
                  src={Gatsby}
                  alt="gatsby"
                  className="icon--skill icon--circle icon--gatsby hvr-grow mid"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://gulpjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="gulp"
              >
                <img
                  src={Gulp}
                  alt="gulp"
                  className="icon--skill hvr-grow small"
                />
              </a>
            </Col>
          </Row>

          <Row>
            <Col>
              <a
                href="https://snipcart.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="snipcart"
              >
                <img
                  src={Snipcart}
                  alt="snipcart"
                  className="icon--skill hvr-grow big"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="git"
              >
                <img src={Git} alt="git" className="icon--skill hvr-grow mid" />
              </a>
            </Col>
            <Col>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
                target="_blank"
                rel="noopener noreferrer"
                title="javascript"
              >
                <img
                  src={Jsicon}
                  alt="javascript"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="react"
              >
                <img
                  src={Reacticon}
                  alt="react"
                  className="icon--skill hvr-grow sem"
                />
              </a>
            </Col>

            <Col>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="mongo db"
              >
                <img
                  src={Mongo}
                  alt="mongo db"
                  className="icon--skill hvr-grow big"
                />
              </a>
            </Col>
          </Row>

          <Row>
            <Col>
              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="redux"
              >
                <img
                  src={Redux}
                  alt="redux"
                  className="icon--skill icon--circle hvr-grow mid"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="graph ql"
              >
                <img
                  src={Graphqlicon}
                  alt="graph ql"
                  className="icon--skill hvr-grow sem"
                />
              </a>
            </Col>

            <Col>
              <a
                href="https://auth0.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="auth 0"
              >
                <img
                  src={Auth}
                  alt="auth 0"
                  className="icon--skill icon--circle hvr-grow small"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="netlify"
              >
                <img
                  src={Netlify}
                  alt="netlify"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>
          </Row>

          <Row>
            <Col>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="vs code"
              >
                <img
                  src={Code}
                  alt="vs code"
                  className="icon--skill hvr-grow med"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  )
}

export default Skills
