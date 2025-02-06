import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo, NavLinks, NavItem, HamburgerButton } from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav as="header">
      <Logo>
        <Link to="/">Sarah Spajic</Link>
      </Logo>
      <HamburgerButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </HamburgerButton>
      <NavLinks isOpen={isOpen} as="nav">
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