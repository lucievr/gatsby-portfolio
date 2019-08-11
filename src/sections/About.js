import React from "react"
import Fade from "react-reveal/Fade"
import Logo from "@images/favicon.png"

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
            Welcome to my site! I am a full-stack web developer based in Prague,
            Czech Republic, who is passionate about modern technologies and
            creative ways of solving problems.
          </p>
          <span className="symbol--orange" style={{ fontWeight: `900` }}>
            . . .
          </span>
          <p className="par--bottom">
            My current tech stack is mostly JavaScript and React, and I love
            experimenting with JAMstack and serverless architectures.
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
