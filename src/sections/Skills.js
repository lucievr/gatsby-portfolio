import React from "react"
import Fade from "react-reveal/Fade"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Firebase from "@images/firebase.png"
import Gatsby from "@images/gatsby.png"
import Git from "@images/git.png"
import Graphql from "@images/graphql.png"
import Jsicon from "@images/js.png"
import Mongo from "@images/mongodb.png"
import MySql from "@images/mysql.png"
import Next from "@images/nextjs.png"
import NodeJs from "@images/nodejs.png"
import Python from "@images/python.png"
import Reacticon from "@images/react.png"
import Redux from "@images/redux.png"
import Ubuntu from "@images/ubuntu.png"
import VsCode from "@images/vscode.png"
import Webpack from "@images/webpack.png"

const Skills = () => {
  return (
    <section id="skills" className="section--bgImage">
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
                title="Next.js"
              >
                <img
                  src={Next}
                  alt="nextjs"
                  className="icon--skill hvr-grow mid"
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
                title="Webpack"
              >
                <img
                  src={Webpack}
                  alt="webpack"
                  className="icon--skill hvr-grow med"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="GraphQL"
              >
                <img
                  src={Graphql}
                  alt="graphql"
                  className="icon--skill hvr-grow"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Gatsby"
              >
                <img
                  src={Gatsby}
                  alt="gatsby"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="Node.js"
              >
                <img
                  src={NodeJs}
                  alt="nodejs"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>
          </Row>

          <Row>
            <Col>
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Firebase"
              >
                <img
                  src={Firebase}
                  alt="firebase"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Git"
              >
                <img src={Git} alt="git" className="icon--skill hvr-grow mid" />
              </a>
            </Col>
            <Col>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
                target="_blank"
                rel="noopener noreferrer"
                title="JavaScript"
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
                title="React"
              >
                <img
                  src={Reacticon}
                  alt="react"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>

            <Col>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="VS Code"
              >
                <img
                  src={VsCode}
                  alt="vs code"
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
                title="Redux"
              >
                <img
                  src={Redux}
                  alt="redux"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="MongoDB"
              >
                <img
                  src={Mongo}
                  alt="mongo db"
                  className="icon--skill hvr-grow big"
                />
              </a>
            </Col>

            <Col>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="Python"
              >
                <img
                  src={Python}
                  alt="python"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://ubuntu.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Ubuntu"
              >
                <img
                  src={Ubuntu}
                  alt="ubuntu"
                  className="icon--skill hvr-grow mid"
                />
              </a>
            </Col>
          </Row>

          <Row>
          <Col>
              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="MySQL"
              >
                <img
                  src={MySql}
                  alt="mysql"
                  className="icon--skill hvr-grow mid"
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
