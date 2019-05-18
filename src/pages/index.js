import React from "react"

import SEO from "../components/seo"
import "../components/bootstrap.min.css"

import { css, Global } from "@emotion/core"

import Home from "../sections/Home"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Contact from "../sections/Contact"

const globalStyles = css`
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

body {
    margin: 0;
    text-align: center;
    font-size: calc(11px + 0.5vw);
    line-height: 1.5;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: white;
    background-color: #112F41;
}

.topHeading {
  color: white;
  font-size: calc(18px + 2.5vw);
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  padding-top: calc(60px + 3vw);
}

.bottomHeading {
  color: #4FB99F;
  font-size: calc(12px + 1.2vw);
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  padding-top: 20px;
  padding-bottom: calc(60px + 3vw)
}

.heading--teal {
  color: #4FB99F;
}

.name {
  color: #F2B134;
  font-weight: 900;
}

.nameBottom {
  color: #ff7f50;
  font-weight: 700;
}

.Typist .Cursor {
  display: inline-block; 
  color: 	#F2B134;
  font-size: calc(20px + 2.5vw);
  }
  .Typist .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite; }

@keyframes blink {
  0% {
    opacity: 1; }
  50% {
    opacity: 0; }
  100% {
    opacity: 1; } 
    }

h2 {
    color: white;
    font-size: calc(16px + 2vw);
    padding: 10px 10px 30px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    letter-spacing: 1px;
}
section {
  padding: 5px;
  padding-top: calc(25px + 1.5vw);
  padding-bottom: calc(35px + 1.5vw);
  width: 100%;
}

hr {
  margin: 0;
  border: 0;
  border-top: 2px dashed #F2B134;
}

.colorSection {
  background-color: #112F41;
}

.whiteSection {
  ${'' /* background-color: #113541; */}
  background-image: url('/background.svg');
}

.dot--orange {
  color: #ff7f50;
}

.card-style {
width: calc(270px + 4vw);
max-width: 90vw;
margin: 20px auto;
margin-top: calc(20px + 1vw);
margin-bottom: calc(20px + 1vw);
box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
background-color: rgba(255, 255, 255, 0.15);
position: relative;
display: flex;
flex-direction: column;
word-wrap: break-word;
background-clip: border-box;
border: 1px solid rgba(0,0,0,.125);
border-radius: .25rem;
}

.card-title {
  color: #ff7f50;
  font-weight: 500;
  font-size: calc(14px + 0.6vw);
  letter-spacing: 1px;
  margin: 16px;
  padding: 4px;
  padding-bottom: 12px;
  border-bottom: 3px dotted #4FB99F;
}

.card-body {
  padding-top: 0;
}

.card-link {
  color: #F2B134;
}

.card-link:hover {
  color: #ff7f50;
}

img.skillIcons.hvr-grow.small {
  margin: 20px;
  width: calc(60px + 2vw);
}

img.skillIcons.hvr-grow {
  margin: 20px;
  width: calc(55px + 1.9vw);
}

img.skillIcons.hvr-grow.big {
  width: calc(50px + 1.2vw);
}

.circleIcons {
  border-radius: 50%;
}

.gatsbyicon {
  border: 4px solid #663399;
  border-radius: 50%;
}

.contactIcons {
  font-size: calc(52px + 2.5vw);
  margin: 10px;
  color: #F2B134;
}
.contactIcons:hover {
  color: #ff7f50;
}

.form-style {
  padding: 20px;
  margin: 0 auto;
  max-width: 90vw;
  @media (min-width: 700px) {
    max-width: 70vw;
  } 
  @media (min-width: 1000px) {
    max-width: 60vw;
  } 
}

.form-control {
  margin-bottom: calc(10px + 0.5vw);
}

.form-control ::placeholder {
  font-size: calc(11px + 0.5vw);
}

${'' /* .form-control ::focus {
  border: 2px solid #F2B134;
} */}

.btn-submit {
  font-size: calc(13px + 0.6vw);
  background-color: rgba(255,255,255,0.1);
  font-weight: 500;
  color: #4FB99F;
  border: 2px solid #ff7f50;
  letter-spacing: 2px;
}

.btn-submit:hover {
  background-color: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid #ff7f50;
}

footer {
  background-color: #112F41;
  padding-bottom: 20px;
}

/* Bob */
@-webkit-keyframes hvr-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes hvr-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@-webkit-keyframes hvr-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes hvr-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
.hvr-bob {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {
  -webkit-animation-name: hvr-bob-float, hvr-bob;
  animation-name: hvr-bob-float, hvr-bob;
  -webkit-animation-duration: .3s, 1.5s;
  animation-duration: .3s, 1.5s;
  -webkit-animation-delay: 0s, .3s;
  animation-delay: 0s, .3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}

/* Grow */
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  cursor: pointer;
}

/* Glow */
.hvr-glow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
}
.hvr-glow:hover, .hvr-glow:focus, .hvr-glow:active {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}

`
const IndexPage = () => (
  <>
    <Global styles={globalStyles} />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Home />
    <hr />
    <About />
    <hr />
    <Projects />
    <hr />
    <Skills />
    <hr />
    <Contact />

    <footer>© {new Date().getFullYear()} Lucie Vrsovska</footer>
  </>
)

export default IndexPage
