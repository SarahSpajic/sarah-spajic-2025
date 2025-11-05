import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ExperienceSection, 
  TimelineContainer, 
  TimelineItem, 
  DateLabel, 
  TimelineContent, 
  Company, 
  Role, 
  Description, 
  TimelineDot, 
  TimelineLine,
  EducationGrid,
  EducationCard,
  Status,
  Highlight,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectLinks,
  ProjectButton
} from './styles';

const Experience = () => {
  return (
    <ExperienceSection>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h1>
      <TimelineContainer>
        <TimelineItem
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <DateLabel>2023 - Present</DateLabel>
          <TimelineContent>
            <Company>Freelance Web Developer</Company>
            <Role>Self-Employed</Role>
            <Description>
              <li>Implemented responsive front-end frameworks using <Highlight>React</Highlight>, HTML, CSS, and <Highlight>JavaScript</Highlight></li>
              <li>Ensured all projects met <Highlight>accessibility</Highlight> and compliance standards, including <Highlight>WCAG 2.1</Highlight></li>
            </Description>
          </TimelineContent>
          <TimelineDot />
          <TimelineLine />
        </TimelineItem>

        <TimelineItem
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DateLabel>2021 - 2023</DateLabel>
          <TimelineContent>
            <Company>Credit One Bank</Company>
            <Role>Web Developer</Role>
            <Description>
              <li>Utilized <Highlight>JavaScript</Highlight>, <Highlight>React</Highlight>, <Highlight>TypeScript</Highlight>, HTML, and CSS to develop web pages and components following <Highlight>Agile</Highlight> practices</li>
              <li>Streamlined testing processes using <Highlight>Playwright</Highlight>, led peer code reviews and collaborated with UX designers</li>
              <li>Ensured <Highlight>WCAG 2.1</Highlight> compliance and managed version control with <Highlight>Git</Highlight></li>
              <li>Contributed to project reporting using <Highlight>Jira</Highlight> and maintained documentation</li>
            </Description>
          </TimelineContent>
          <TimelineDot />
          <TimelineLine />
        </TimelineItem>

        <TimelineItem
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <DateLabel>2018 - 2021</DateLabel>
          <TimelineContent>
            <Company>Credit One Bank</Company>
            <Role>Business Analyst | UAT</Role>
            <Description>
              <li>Conducted <Highlight>User Acceptance Testing (UAT)</Highlight> for financial applications, ensuring feature functionality</li>
              <li>Automated testing processes and developed detailed <Highlight>test cases</Highlight></li>
              <li>Partnered with development teams to optimize <Highlight>banking applications</Highlight> and <Highlight>workflow automation</Highlight></li>
            </Description>
          </TimelineContent>
          <TimelineDot />
          <TimelineLine />
        </TimelineItem>
      </TimelineContainer>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '4rem' }}
      >
        Education
      </motion.h1>
      <EducationGrid>
        <EducationCard
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Georgia Institute of Technology</h3>
          <Role>Master of Science in Computer Science</Role>
          <p>Expected Graduation: 2026</p>
          <Status>In Progress</Status>
        </EducationCard>

        <EducationCard
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Western Governors University</h3>
          <Role>Master of Business Administration in IT Management</Role>
          <p>Expected Graduation: 2025</p>
          <Status>In Progress</Status>
        </EducationCard>

        <EducationCard
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Western Governors University</h3>
          <Role>Bachelor of Science in Software Development</Role>
          <p>Graduated: 2023</p>
          <Status>Completed</Status>
        </EducationCard>
      </EducationGrid>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '4rem' }}
      >
        Projects
      </motion.h1>
      <ProjectGrid>
        <ProjectCard
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProjectContent>
            <h3>Outlook Timezone Scheduling</h3>
            <Role>UX Research & Design Case Study</Role>
            <Description>
              <li>Conducted <Highlight>UX research</Highlight> with 20+ Executive Assistants to identify timezone scheduling pain points</li>
              <li>Designed and prototyped solution using <Highlight>React</Highlight>, <Highlight>TypeScript</Highlight>, and <Highlight>Tailwind CSS</Highlight></li>
              <li>Achieved <Highlight>4.71/5</Highlight> user preference rating and eliminated manual timezone configuration</li>
            </Description>
            <ProjectLinks>
              <ProjectButton as={Link} to="/case-study">
                View Full Case Study
              </ProjectButton>
              <ProjectButton href="https://microsoft-scheduling-timezones.vercel.app/" target="_blank" rel="noopener noreferrer">
                Live Prototype
              </ProjectButton>
              <ProjectButton href="https://github.com/SarahSpajic/microsoft-scheduling-timezones" target="_blank" rel="noopener noreferrer">
                GitHub
              </ProjectButton>
            </ProjectLinks>
          </ProjectContent>
        </ProjectCard>
      </ProjectGrid>
    </ExperienceSection>
  );
};

export default Experience; 