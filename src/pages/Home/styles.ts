import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 24px 16px;
  padding-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
    padding-top: 72px;
  }
`;

export const Hero = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 64px;
  padding-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 32px;
    padding-top: 72px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
    padding-top: 64px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
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

export const HighlightedText = styled.span`
  background: linear-gradient(
    to right,
    #FFB5B5 20%,
    #f4e490 40%,
    #f4e490 60%,
    #FFB5B5 80%
  );
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: 500;
  animation: shine 3s ease-in-out infinite;

  @keyframes shine {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 670px;
  margin: 0 auto;
  padding: 100px;
  background: radial-gradient(
    circle at center,
    transparent 40%,
    ${({ theme }) => theme.colors.background} 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 400px;
    height: 528px;
    padding: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 350px;
    height: 457px;
    padding: 60px;
  }
`;

export const ImageWrapper = styled.div<{ x: number; y: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 570px;
  margin: 0 auto;
  perspective: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 0 37% 37%;
    box-shadow: 
      0 0 40px 20px rgba(0, 0, 0, 0.8),
      0 0 80px 40px rgba(0, 0, 0, 0.6);
    transform: rotateY(${props => (props.x - 50) * 0.15}deg)
              rotateX(${props => (props.y - 50) * -0.15}deg);
    transition: transform 0.1s ease-out;
  }
`;

export const Logo = styled.img`
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