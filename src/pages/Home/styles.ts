import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 24px 16px;
  padding-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 0 24px 0;
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    margin: 0;
    width: 100%;
    padding: 0;
  }
`;

export const TextContent = styled.div`
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: 0;
    margin: 0;
    width: 90%;
    overflow-wrap: anywhere;
  }

  @media (max-width: 415px) {
    width: 80vw;
  }

  @media (max-width: 360px) {
    width: 75vw;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    white-space: normal;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: clamp(1.4rem, 5vw, 2rem);
      padding: 0;
      width: 90%;
      overflow-wrap: anywhere;
      word-break: break-word;
      white-space: pre-wrap;
      max-width: 90%;
    }

    @media (max-width: 415px) {
      font-size: clamp(1.2rem, 4.5vw, 1.4rem);
    }

    @media (max-width: 360px) {
      font-size: clamp(1.1rem, 4vw, 1.2rem);
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.textLight};
    white-space: normal;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: clamp(0.75rem, 3.5vw, 0.9rem);
      margin-bottom: 1.5rem;
      padding: 0;
      width: 90%;
      overflow-wrap: anywhere;
      word-break: break-word;
      white-space: pre-wrap;
      max-width: 90%;
    }

    @media (max-width: 415px) {
      font-size: clamp(0.7rem, 3vw, 0.75rem);
      width: 80vw;
    }

    @media (max-width: 360px) {
      font-size: clamp(0.65rem, 2.8vw, 0.7rem);
      width: 75vw;
    }
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 350px;
  height: 350px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 220px;
    height: 220px;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
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
    padding: 16px;
    padding-top: 64px;
    gap: 1rem;
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

export const ImageWrapper = styled.div<{ x: number; y: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 570px;
  margin: 0 auto;
  perspective: 1000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 427px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    height: 285px;
    margin-top: 1rem;
  }

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