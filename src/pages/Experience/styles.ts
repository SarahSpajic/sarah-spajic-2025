import styled from 'styled-components';

export const AboutSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 3.55rem;
  margin-bottom: 2rem;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 3rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const SkillItem = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.subtle};
  }
`;

export const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 120px 32px;
  background: ${({ theme }) => theme.colors.background};

  h1 {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 3rem;
  }
`;

export const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

export const TimelineItem = styled.div`
  padding: 2rem 0;
  position: relative;
  margin-left: 50px;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: -2px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #FFB5B5 0%, #f4e490 100%);
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: -10px;
  top: 2rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 1;
`;

export const DateLabel = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  font-weight: 500;
`;

export const TimelineContent = styled.div`
  background: rgba(255, 181, 181, 0.05);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 181, 181, 0.1);
`;

export const Company = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const Role = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

export const Description = styled.ul`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  list-style: none;
  padding-left: 1.2rem;

  li {
    position: relative;
    margin-bottom: 0.5rem;

    &:before {
      content: '•';
      color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: -1.2rem;
    }
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1000px;
  padding: 0 1rem;
`;

export const EducationCard = styled.div`
  background: rgba(255, 181, 181, 0.05);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 181, 181, 0.1);
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    margin-top: 0.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.subtle};
  }
`;

export const Status = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  margin-top: 1rem;
  background: ${props => props.children === 'Completed' 
    ? 'rgba(144, 238, 144, 0.2)' 
    : 'rgba(255, 181, 181, 0.2)'};
  color: ${props => props.children === 'Completed' 
    ? '#90EE90' 
    : props.theme.colors.primary};
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1000px;
  padding: 0 1rem;
`;

export const ProjectCard = styled.div`
  background: rgba(255, 181, 181, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 181, 181, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.subtle};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 181, 181, 0.1);
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const ProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 181, 181, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;

  i {
    font-size: 1.1rem;
  }

  &:hover {
    background: rgba(255, 181, 181, 0.2);
    transform: translateY(-2px);
  }
`; 