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
  text-shadow: ${({ theme }) => theme.shadows.neon};
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
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
      text-shadow: ${({ theme }) => theme.shadows.neon};
      
      &:before {
        width: 100%;
      }
    }
  }
`; 