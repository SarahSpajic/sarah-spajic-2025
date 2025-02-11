import React from 'react';
import { HomeSection, Hero, Title, Tagline, TitleWrapper, ContentWrapper, ImageWrapper, LinkedInButton, HighlightedText } from './styles';
import profileImage from '../../assets/sarah-spajic.png';

const Home = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    setMousePosition({
      x: (clientX / innerWidth) * 100,
      y: (clientY / innerHeight) * 100
    });
  };

  return (
    <HomeSection as="main" onMouseMove={handleMouseMove}>
      <Hero>
        <ContentWrapper>
          <TitleWrapper>
            <Title>Hello!</Title>
          </TitleWrapper>
          <Tagline>
            I'm <HighlightedText>Sarah</HighlightedText>, I connect human needs with tech solutions through intuitive design
          </Tagline>
          <LinkedInButton 
            href="https://www.linkedin.com/in/sarah-spajic/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </LinkedInButton>
        </ContentWrapper>
        <ImageWrapper x={mousePosition.x} y={mousePosition.y}>
          <img src={profileImage} alt="Sarah Spajic" />
        </ImageWrapper>
      </Hero>
    </HomeSection>
  );
};

export default Home; 