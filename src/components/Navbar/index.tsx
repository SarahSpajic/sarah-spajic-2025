import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo, NavLinks, NavItem } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">Sarah Spajic</Link>
      </Logo>
      <NavLinks>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 