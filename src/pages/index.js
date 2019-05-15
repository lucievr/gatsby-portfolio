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
    font-family: 'Playfair Display', serif;
    color: white;
    background-color: #112F41;
}

.topHeading {
  color: white;
  font-size: calc(24px + 3vw);
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  padding-top: 120px;

}
.bottomHeading {
  color: #4FB99F;
  font-size: calc(16px + 2vw);
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  padding: 40px 10px 80px;
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
  font-weight: 900;
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
    opacity: 1; } }

h2 {
    color: white;
    font-size: calc(16px + 2vw);
    padding: 10px 10px 30px;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
}
section {
  padding: 40px;
  min-height: 100vh;
  width: 100%;
}

hr {
  margin: 0;
  border: 0;
  border-top: 2px dashed #F2B134;
}

container {
  display: flex;
}

.colorSection {
  background-color: #112F41;
}

.whiteSection {
  ${'' /* background-color: #113541; */}
  background-image: url('/background.svg');
}

.contactIcons {
  font-size: 5rem;
  color: #F2B134;
}
.contactIcons:hover {
  background-color: rgb(242, 242, 242);
  border-radius: 50%;
}
footer {
  background-color: #112F41;
  padding-bottom: 20px;
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

    <footer>© {new Date().getFullYear()}, Lucie Vrsovska</footer>
  </>
)

export default IndexPage
