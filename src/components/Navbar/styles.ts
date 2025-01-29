import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(255, 139, 139, 0.15);
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 2.05rem;
  font-weight: bold;
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
    padding: 0.5rem 1rem;
    font-size: 1.05rem;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      
      &:before {
        width: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 1rem 0;
    
    a {
      font-size: 1.2rem;
    }
  }
`;

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 8px;

    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`; 