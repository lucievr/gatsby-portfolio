import React from "react"
import styled from "styled-components"
import Scroll from "@components/Scroll"
import DarkModeToggle from "@components/DarkModeToggle"
import Scrollspy from "react-scrollspy"
import { TiHome } from "react-icons/ti"

const Nav = styled.nav`
  padding: 0 1rem 0 0;
  background: rgb(73,73,171);
  background: linear-gradient(90deg, rgba(73,73,171,1) 0%, rgba(85,86,200,1) 50%, rgba(73,73,171,1) 100%);
  transition: background-color 0.6s ease;
  position: fixed;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
`

const NavItem = styled.li`
  margin: 0 0.75em;
  display: block;
  a {
    text-decoration: none;
    color: white;
    font-weight: 400;
    padding: 2%;
    width: auto;
    :hover {
      color: #ff7f50;
    }
  }
  &.is-active {
    a {
      color: #ff7f50;
    }
  }
`

const Navbar = () => {
  return (
    <Nav id="navbar">
          <NavItem>
        <DarkModeToggle />
      </NavItem>
      <Scrollspy
        items={["home", "about", "projects", "skills", "contact"]}
        currentClassName="is-active"
        offset={-200}
        className="nav__wrapper"
      >

        <NavItem>
          <Scroll type="id" element="home">
            <a href="/">
              <TiHome
                style={{ fontSize: `calc(10px + 0.9vw)`, marginBottom: `4px` }}
              />
            </a>
          </Scroll>
        </NavItem>

        <NavItem>
          <Scroll type="id" element="about">
            <a href="/">About</a>
          </Scroll>
        </NavItem>

        <NavItem>
          <Scroll type="id" element="projects">
            <a href="/">Projects</a>
          </Scroll>
        </NavItem>
        <NavItem>
          <Scroll type="id" element="skills">
            <a href="/">Skills</a>
          </Scroll>
        </NavItem>

        <NavItem>
          <Scroll type="id" element="contact">
            <a href="/">Contact</a>
          </Scroll>
        </NavItem>
      </Scrollspy>
    </Nav>
  )
}

export default Navbar
