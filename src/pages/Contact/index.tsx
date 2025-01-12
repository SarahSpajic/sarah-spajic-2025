import React from 'react';
import { ContactSection, Content, Title, LinkButton } from './styles';

const Contact = () => {
  return (
    <ContactSection>
      <Content>
        <Title>Contact Me</Title>
        <LinkButton 
          href="https://www.linkedin.com/in/sarah-spajic/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </LinkButton>
      </Content>
    </ContactSection>
  );
};

export default Contact; 