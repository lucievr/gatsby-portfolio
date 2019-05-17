import React from "react"
// import css from "@emotion/core"
import Fade from "react-reveal/Fade"
import Logo from "../images/favicon.png"

const About = () => { 
  
    return (
      <section id="about" className="whiteSection">
        <h2><span className="dot--orange">+</span> About <span className="dot--orange">+</span></h2>
        <Fade left>
        <div style={{ width: `80vmin`, height: `80vmin`, maxWidth: `480px`, maxHeight: `480px`, margin: `0 auto`, borderRadius: `50%`, padding: `calc(1px + 1vw)`, border: `3px solid #F2B134`, 
        backgroundColor: `#068587`, boxShadow: `0 12px 16px rgba(0, 0, 0, 0.2)`, color: `white` }}>
                <img src={Logo} alt="logo" style={{ width: `calc(80px + 3vw)`,
                  borderRadius: `50%`, margin: `0` }} />
          <p style={{ fontSize: `calc(10px + 0.5vw)`, lineHeight: `1.5`, margin: `0 auto`, width: `80%`, paddingTop: `calc(5px + 1vw)` }}>
          Hello, my name is Lucie and I am a web developer based in Prague, Czech Republic. I am passionate about modern technologies and creative ways of
          solving problems. <br /><span className="dot--orange" style={{fontWeight: `900`}}>. . .</span><br />Get in touch if you think I would be a good fit for your team – I am open to new positions starting this July.</p>
        </div>
        </Fade>
      </section>
    )}

export default About
