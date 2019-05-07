import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Logo from "../images/favicon.png"
import { TiHome } from "react-icons/ti"
import Fade from "react-reveal/Fade"

const Nav = styled.nav`
  padding: 0 1rem;
  background-color: #756c83;
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
const NavListWrapper = styled.ul`
  list-style: none;
  margin-left: auto;
  margin-right: 20px;
  padding: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: row;

  ${({ mobile }) =>
    mobile &&
    `
        flex-direction: column;
        margin-top: 1em;
        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
        `};
`

const NavItem = styled.li`
  margin: 0 0.75em;
  display: block;
  a {
    text-decoration: none;
    color: rgb(251, 251, 251);
    padding: 2%;
    width: auto;
  }
  &.active {
    a {
      opacity: 1;
    }
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  display: inline-block;
  width: 50px;
  white-space: nowrap;
  vertical-align: top;
`

const Navbar = () => {
  return (
      <Nav id="navbar">
      <Fade top>
        <AnchorLink href="#home">
          <Avatar src={Logo} alt="logo" />
        </AnchorLink>
        </Fade>
      
        <NavListWrapper>
        <Fade top>
          <NavItem>
            <AnchorLink href="#home">
              <TiHome />
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink
              href="#about"
              offset={() => document.querySelector("#navbar").offsetHeight}
            >
              About
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink
              href="#projects"
              offset={() => document.querySelector("#navbar").offsetHeight}
            >
              Projects
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink
              href="#skills"
              offset={() => document.querySelector("#navbar").offsetHeight}
            >
              Skills
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink
              href="#contact"
              offset={() => document.querySelector("#navbar").offsetHeight}
            >
              Contact
            </AnchorLink>
          </NavItem>
          </Fade>
        </NavListWrapper>
      </Nav>
  )
}

export default Navbar
