import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { TiHome } from "react-icons/ti"
import Fade from "react-reveal/Fade"

const Nav = styled.nav`
  padding: 0 1rem;
  background-color: #068587;
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
  ${'' /* margin-left: auto;
  margin-right: 20px; */}
  margin: 0 20px 10px auto;
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

const Navbar = () => {
  return (
      <Nav id="navbar">
      
        <NavListWrapper>
        <Fade top>
          <NavItem>
            <AnchorLink href="#home">
              <TiHome style={{fontSize: `calc(10px + 0.9vw)`, marginBottom: `4px`}} />
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
