import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Logo from "../images/favicon.png"

const Nav = styled.nav`
  padding: .5rem 1rem;
  background-color: orange;
  position: fixed;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
`
const NavListWrapper = styled.ul`
    list-style: none;
    margin-left: auto;
    padding: 0;
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
`;

const NavItem = styled.li`
  margin: 0 0.75em;
  display: block;
  a {
    text-decoration: none;
    opacity: 0.8;
    color: white;
    padding: 2%;
    width: auto;
  }
  &.active {
    a {
      opacity: 1;
    }
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  display: inline-block;
  width: 50px;
  white-space: nowrap;
  vertical-align: top;
`;

const Navbar = () => {
  return (
    <Nav>
        <AnchorLink href="#home">
          <Avatar
            src={Logo}
            alt="logo"
          />
        </AnchorLink>
        <NavListWrapper>
          <NavItem>
            <AnchorLink href="#about">About</AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink href="#projects">Projects</AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </NavItem>
        </NavListWrapper>
    </Nav>
  );
};

export default Navbar
