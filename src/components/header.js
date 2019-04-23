import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Logo from "../images/favicon.png"

const Nav = styled.div`
  padding: 16px 0;
  background-color: orange;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  a {
    text-decoration: none;
    color: white;
    padding: 2%;
  }
`


const Header = ( ) => {
  return (
  <Nav>
    <div
      style={{
        maxWidth: 960,
      }}
    >
      
      <AnchorLink href="#home"><img src={Logo} alt="logo" width="50px" style={{
                  borderRadius: '50%',
                }} /></AnchorLink>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </div>
  </Nav>
  )
}



export default Header
