import React from 'react';
import { AboutSection, Content, Title, Subtitle, Text, SkillsGrid, SkillItem } from './styles';

const About = () => {
  return (
    <AboutSection>
      <Content>
        <Title>About Me</Title>
        <Text>
          I'm a Software Developer with over three years of professional web development experience, 
          specializing in creating accessible, efficient, and user-friendly web applications. 
          Currently pursuing a Master's in Computer Science at Georgia Tech with a focus on 
          Human-Computer Interaction, I combine technical expertise with a deep understanding of user needs.
        </Text>

        <Subtitle>Technical Expertise</Subtitle>
        <SkillsGrid>
          <SkillItem>
            <h3>Web Development</h3>
            <p>JavaScript, React, Next.js, TypeScript, and Java</p>
          </SkillItem>
          <SkillItem>
            <h3>UX/UI Design</h3>
            <p>Figma, Canva, Adobe Suite, WCAG Accessibility</p>
          </SkillItem>
          <SkillItem>
            <h3>Project Management</h3>
            <p>Certified Scrum Master, Agile Methodologies, Jira</p>
          </SkillItem>
          <SkillItem>
            <h3>Version Control</h3>
            <p>Git, Bitbucket, GitLab, GitHub</p>
          </SkillItem>
        </SkillsGrid>

        <Subtitle>Professional Journey</Subtitle>
        <Text>
          At Credit One Bank, I worked on enterprise-level React applications while ensuring 
          accessibility standards and optimal performance. As a Scrum Master, 
          I facilitated Agile practices and fostered team collaboration. My experience extends 
          to freelance work, where I've developed dynamic solutions using Next.js and modern web technologies.
        </Text>

        <Text>
          My background in UAT and Business Analysis gives me a unique perspective on software development, 
          allowing me to bridge the gap between technical implementation and business needs effectively.
        </Text>
      </Content>
    </AboutSection>
  );
};

export default About; 