import React from "react"
// import css from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import Logo from "../images/favicon.png"
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const About = () => { 
  
    return (
      <section id="about" className="whiteSection">
        <h2>ABOUT</h2>
  
        <Fade left>
        <div style={{ minHeight: `80vh`, maxWidth: `100vmin`, maxHeight: `100vmin`, margin: `0 auto`, borderRadius: `50%`, padding: `calc(1px + 1vw)`, border: `20px solid rgb(166,202,198)`, 
        backgroundColor: `rgba(117, 108, 131, 0.9)`, boxShadow: `0 12px 16px rgba(0, 0, 0, 0.2)`, color: `white` }}>
                <img src={Logo} alt="logo" style={{ maxWidth: `30vmin`, borderRadius: `50%`, margin: `0` }} />
          <p style={{ fontSize: `calc(12px + 0.5vw)`, lineHeight: `1.5`, margin: `0` }}>Hello, my name is Lucie and I am a web developer based in Prague, Czech Republic. I am passionate about modern technologies and creative ways of
          solving problems. My current jam is mostly JavaScript and React. </p>
        </div>
        </Fade>
  
      </section>
    )
    }

export default About
