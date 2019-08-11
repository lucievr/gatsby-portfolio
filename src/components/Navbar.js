import React, { useState } from "react"
import Scroll from "@components/Scroll"
import DarkModeToggle from "@components/DarkModeToggle"
import Scrollspy from "react-scrollspy"
import { TiHome, TiThMenu } from "react-icons/ti"

const Navigation = () => {

  const [ menuActive, setMenuState ] = useState(false);

  return (
    <nav id="navbar">
      <span className="darkmode__wrapper">
        <DarkModeToggle />
      </span>
      <Scrollspy
        items={["home", "about", "projects", "skills", "contact"]}
        currentClassName="is-active"
        offset={-200}
        className={`nav__wrapper ${menuActive ? "active" : ""}`}
      >
        <li>
          <Scroll type="id" element="home">
            <a href="/" className="navlink--home">
              <TiHome />
            </a>
          </Scroll>
        </li>

        <li>
          <Scroll type="id" element="about">
            <a href="/">About</a>
          </Scroll>
        </li>

        <li>
          <Scroll type="id" element="projects">
            <a href="/">Projects</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="skills">
            <a href="/">Skills</a>
          </Scroll>
        </li>

        <li>
          <Scroll type="id" element="contact">
            <a href="/">Contact</a>
          </Scroll>
        </li>
      </Scrollspy>
      <div className="menu--burger" onClick={() => setMenuState((prevMenuActive) => !prevMenuActive)}>
        <TiThMenu />
      </div>
    </nav>
  )
}

export default Navigation
