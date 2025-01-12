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