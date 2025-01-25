import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const Hero = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 8rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const Tagline = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 570px;
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0 0 37% 37%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 0 37% 37%;
    box-shadow: 
      0 0 40px 20px rgba(0, 0, 0, 0.8),
      0 0 80px 40px rgba(0, 0, 0, 0.6);
  }
`;

export const Logo = styled.img`
  height: 80px;
  width: auto;
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

export const LinkedInButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  padding-right: 2.5rem;
  background: linear-gradient(to right, #FFB5B5 62%, #f4e490 112%);
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 1.05rem;
  width: 11rem;
  position: relative;

  &:after {
    content: '›';
    position: absolute;
    right: 1.5rem;
    transition: all 0.3s ease;
    transform: translateX(0);
  }

  &:hover {
    transform: translateY(-2px);

    &:after {
      transform: translateX(5px);
    }
  }
`; 