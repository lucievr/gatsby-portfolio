import React from "react"
import Scroll from "@components/Scroll"
import DarkModeToggle from "@components/DarkModeToggle"
import Scrollspy from "react-scrollspy"
import { TiHome } from "react-icons/ti"


const Navigation = () => {
  return (
    <nav id="navbar">
      <span className="darkmode__wrapper">
        <DarkModeToggle />
      </span>
      <Scrollspy
        items={["home", "about", "projects", "skills", "contact"]}
        currentClassName="is-active"
        offset={-200}
        className="nav__wrapper"
      >

        <li>
          <Scroll type="id" element="home">
            <a href="/">
              <TiHome
                style={{ fontSize: `calc(10px + 0.9vw)`, marginBottom: `4px` }}
              />
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
    </nav>
  )
}

export default Navigation