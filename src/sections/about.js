import React from "react"
// import css from "@emotion/core"
import Fade from "react-reveal/Fade"
import Logo from "../images/favicon.png"

const About = () => { 
  
    return (
      <section id="about" className="whiteSection">
        <h2>ABOUT</h2>
        <Fade left>
        <div style={{ width: `80vmin`, height: `80vmin`, maxWidth: `480px`, maxHeight: `480px`, margin: `0 auto`, borderRadius: `50%`, padding: `calc(1px + 1vw)`, border: `3px solid #F2B134`, 
        backgroundColor: `#068587`, boxShadow: `0 12px 16px rgba(0, 0, 0, 0.2)`, color: `white` }}>
                <img src={Logo} alt="logo" style={{ width: `100px`,
                  borderRadius: `50%`, margin: `0` }} />
          <p style={{ fontSize: `calc(12px + 0.5vw)`, lineHeight: `1.5`, margin: `0 auto`, color: `black`, width: `80%`, paddingTop: `calc(5px + 3vw)` }}>Hello, my name is Lucie and I am a web developer based in Prague, Czech Republic. I am passionate about modern technologies and creative ways of
          solving problems. My current jam is mostly JavaScript and React. </p>
        </div>
        </Fade>
      </section>
    )}

export default About
