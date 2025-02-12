import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Logo, NavLinks, NavItem, HamburgerButton } from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <Nav as="header">
      <Logo>
        <Link to="/">Sarah Spajic</Link>
      </Logo>
      <HamburgerButton 
        $isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </HamburgerButton>
      <NavLinks $isOpen={isOpen} as="nav">
        <NavItem $isActive={location.pathname === "/"}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </NavItem>
        <NavItem $isActive={location.pathname === "/experience"}>
          <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
        </NavItem>
        <NavItem $isActive={location.pathname === "/contact"}>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Connect</Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 