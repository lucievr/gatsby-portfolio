import React from "react"

import Fade from "react-reveal/Fade"
import bgUrl from "@images/background.svg"
import Logo from "@images/favicon.png"

const About = () => {
  return (
    <section id="about" className="section--light" style={{ backgroundImage: `url(${bgUrl})` }}>
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
            My current tech stack is mostly JavaScript and React, and I am eager to start working with JAMstack and serverless architectures.
            {/* Get in touch if you think I would make a good addition to your team
            – I am open to new positions starting this July. */}
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
