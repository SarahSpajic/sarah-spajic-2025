import React from 'react';
import { ContactSection, Content, Title, ButtonContainer, SocialButton } from './styles';

const Contact = () => {
  return (
    <ContactSection>
      <Content>
        <Title>Connect With Me</Title>
        <ButtonContainer>
          <SocialButton 
            href="https://www.linkedin.com/in/sarah-spajic/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </SocialButton>
          <SocialButton 
            href="https://github.com/sarahspajic" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </SocialButton>
        </ButtonContainer>
      </Content>
    </ContactSection>
  );
};

export default Contact; 