import React from "react"
import Fade from "react-reveal/Fade"
import Logo from "@images/favicon.png"

const About = () => {
  return (
    <section id="about" className="section--bgImage">
      <h2>
        <span className="symbol--orange">+</span> About{" "}
        <span className="symbol--orange">+</span>
      </h2>
      <Fade left>
        <div className="div--circle">
          <img src={Logo} alt="logo" className="img--avatar" />
          <p className="par--top">
            Welcome to my site! I am a software developer based in Lisbon,
            Portugal, who is passionate about modern technologies and
            creative ways of solving problems.
          </p>
          <span className="symbol--orange" style={{ fontWeight: `900` }}>
            . . .
          </span>
          <p className="par--bottom">
          In addition to fullstack web development I&nbsp;love experimenting with mobile apps, UI/UX, and modern tech stacks and software architectures.
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
