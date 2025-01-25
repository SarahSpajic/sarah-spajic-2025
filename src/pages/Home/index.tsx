import React from 'react';
import { HomeSection, Hero, Title, Tagline, TitleWrapper, ContentWrapper, ImageWrapper, LinkedInButton } from './styles';
import profileImage from '../../assets/sarah-spajic.png';

const Home = () => {
  return (
    <HomeSection>
      <Hero>
        <ContentWrapper>
          <TitleWrapper>
            <Title>Hello!</Title>
          </TitleWrapper>
          <Tagline>
            I connect human needs with tech solutions through intuitive design
          </Tagline>
          <LinkedInButton 
            href="https://www.linkedin.com/in/sarah-spajic/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </LinkedInButton>
        </ContentWrapper>
        <ImageWrapper>
          <img src={profileImage} alt="Sarah Spajic" />
        </ImageWrapper>
      </Hero>
    </HomeSection>
  );
};

export default Home; 