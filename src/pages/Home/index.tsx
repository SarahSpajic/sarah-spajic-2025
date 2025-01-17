import React from 'react';
import { HomeSection, Hero, Title, Tagline, CTAButton, TitleWrapper } from './styles';

const Home = () => {
  return (
    <HomeSection>
      <Hero>
        <TitleWrapper>
          <Title>Hello, I'm Sarah Spajic</Title>
        </TitleWrapper>
        <Tagline>
          Connecting human needs with tech solutions through intuitive design
        </Tagline>
        <CTAButton to="/contact">Contact Me</CTAButton>
      </Hero>
    </HomeSection>
  );
};

export default Home; 