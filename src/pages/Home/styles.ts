import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.backgroundAlt}, ${({ theme }) => theme.colors.background});
`;

export const Hero = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Logo = styled.img`
  height: 80px;
  width: auto;
`;

export const Title = styled.h1`
  font-size: 3.55rem;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Tagline = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  width: 65%;
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.primary};
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.05rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`; 