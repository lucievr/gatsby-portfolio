import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
        <p>Check out my skillz</p>

        <Container>
          <Row>
    <Col>
      <img src={Bootstrap} alt="bootstrap" className="skillIcons circleIcons" />
    </Col>
          </Row>

          <Row>
          <Col>
          <img src={Webpack} alt="webpack" className="skillIcons" />
          </Col>
          <Col>
          <img src={Github} alt="github" className="skillIcons" />
          </Col>

          <Col>
          <img src={Gulp} alt="gulp" className="skillIcons" />
          </Col>
          <Col>
          <img src={Netlify} alt="netlify" className="skillIcons" />
          </Col>
          </Row>

          <Row>
          <Col>
          <img src={Sassicon} alt="sass" className="skillIcons" />
          </Col>
          <Col>
          <img src={Git} alt="git" className="skillIcons" />
          </Col>
          <Col>
          <img src={Jsicon} alt="javascript" className="skillIcons" />
          </Col>
          <Col>
          <img src={Reacticon} alt="react" className="skillIcons" />
          </Col>

          <Col>
          <img src={Mongo} alt="mongodb" className="skillIcons" />
          </Col>
          </Row>

          <Row>
          <Col>
          <img src={Cssicon} alt="css" className="skillIcons circleIcons" />
          </Col>
          <Col>
          <img src={Graphqlicon} alt="graphql" className="skillIcons" />
          </Col>
          <Col>
          <img src={Gatsby} alt="gatsby" className="skillIcons circleIcons gatsbyicon" />
          </Col>
          <Col>
          <img src={Htmlicon} alt="html" className="skillIcons circleIcons" />
          </Col>
          </Row>

          <Row>
          <Col>
          <img src={Code} alt="vs code" className="skillIcons" />
          </Col>

          </Row>

        

        </Container>

      </section>
    )}

export default Skills