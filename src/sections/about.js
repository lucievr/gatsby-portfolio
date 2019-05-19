import React from "react"

import Fade from "react-reveal/Fade"
import Logo from "../images/favicon.png"

const About = () => {
  return (
    <section id="about" className="section--light">
      <h2>
        <span className="symbol--orange">+</span> About{" "}
        <span className="symbol--orange">+</span>
      </h2>
      <Fade left>
        <div className="div--circle">
          <img src={Logo} alt="logo" className="img--avatar" />
          <p className="par--top">
            Hello, my name is Lucie and I am a web developer based in Prague,
            Czech Republic. I am passionate about modern technologies and
            creative ways of solving problems.
          </p>
          <span className="symbol--orange" style={{ fontWeight: `900` }}>
            . . .
          </span>
          <p className="par--bottom">
            Get in touch if you think I would make a good addition to your team
            – I am open to new positions starting this July.
          </p>
          <span className="symbol--orange" style={{ fontWeight: `900` }}>
            . . .
          </span>
        </div>
      </Fade>
    </section>
  )
}

export default About
