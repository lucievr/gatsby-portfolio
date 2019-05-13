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
        <div style={{ width: `700px`, height: `700px`, margin: `0 auto`, borderRadius: `50%`, padding: `20px`, border: `2px solid rgb(248, 124, 124)`, 
        backgroundColor: `rgba(166,202,198, 0.5)`, boxShadow: `0 12px 16px rgba(0, 0, 0, 0.2)` }}>
                <img src={Logo} alt="logo" style={{ maxWidth: `150px`, borderRadius: `50%` }} />
          <p>Hello, my name is Lucie and I am a web developer with a passion for modern technologies and creative ways of
          solving problems. I am currently enrolled in Coding Bootcamp Praha – a
          12-week intensive Full-stack Developer programme to level up my skills
          and get more experience in team programming and Agile practices.</p>
        </div>
        </Fade>
  
      </section>
    )
    }

export default About
