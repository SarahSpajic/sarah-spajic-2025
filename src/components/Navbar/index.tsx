import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo, NavLinks, NavItem, HamburgerButton } from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <Logo>
        <Link to="/">Sarah Spajic</Link>
      </Logo>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerButton>
      <NavLinks isOpen={isOpen}>
        <NavItem>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Connect</Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 