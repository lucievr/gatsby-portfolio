import React from "react"
// import css from "@emotion/core"
import Fade from "react-reveal/Fade"
import Logo from "../images/favicon.png"

const About = () => { 
  
    return (
      <section id="about" className="whiteSection">
        <h2><span className="dot--orange">+</span> About <span className="dot--orange">+</span></h2>
        <Fade left>
        <div style={{  width: `calc(280px + 15vw)`, height: `calc(280px + 15vw)`, minWidth: `280px`, minHeight: `280px`, maxWidth: `90vw`, maxHeight: `90vw`, margin: `0 auto`, borderRadius: `50%`, padding: `2px`, border: `3px solid #F2B134`, 
        backgroundColor: `#068587`, boxShadow: `0 12px 16px rgba(0, 0, 0, 0.2)`, color: `white` }}>
                <img src={Logo} alt="logo" style={{ width: `calc(55px + 6vw)`,
                  borderRadius: `50%`, margin: `0`, paddingTop: `calc(5px + 1vw)` }} />
          <p style={{ fontSize: `calc(9px + 0.5vw)`, lineHeight: `1.7`, margin: `0 auto`, width: `80%`, paddingTop: `calc(5px + 1.3vw)` }}>
          Hello, my name is Lucie and I am a web developer based in Prague, Czech Republic. I am passionate about modern technologies and creative ways of
          solving problems.</p><span className="dot--orange" style={{fontWeight: `900`}}>. . .</span>
          <p style={{ fontSize: `calc(9px + 0.5vw)`, lineHeight: `1.7`, margin: `0 auto`, width: `71%` }}>Get in touch if you think I would make a good addition to your team – I am open to new positions starting this July.</p><span className="dot--orange" style={{fontWeight: `900`}}>. . .</span>
        </div>
        </Fade>
      </section>
    )}

export default About
