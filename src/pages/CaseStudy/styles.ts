import styled from 'styled-components';

export const CaseStudyWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.backgroundAlt} 0%, ${({ theme }) => theme.colors.background} 100%);
  padding: 120px 32px 80px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 80px 16px 40px;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Badge = styled.span`
  display: inline-block;
  background: rgba(255, 181, 181, 0.2);
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 32px;
  max-width: 900px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 0.9rem;
  
  div {
    span:first-child {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Section = styled.section`
  padding: 80px 32px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 16px;
  }
`;

export const SectionAlt = styled(Section)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 32px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
`;

export const StatCard = styled.div`
  text-align: center;
  
  h3 {
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }
`;

export const ProblemBox = styled.div`
  background: rgba(255, 181, 181, 0.1);
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 8px;
  
  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.8;
  }
`;

export const SubsectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: 16px;
`;

export const List = styled.ol`
  list-style-position: inside;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: 32px;
  
  li {
    margin-bottom: 8px;
  }
`;

export const InsightBox = styled.div`
  background: rgba(255, 181, 181, 0.05);
  padding: 24px;
  border-radius: 8px;
  
  h4 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-bottom: 48px;
`;

export const Card = styled.div`
  background: rgba(255, 181, 181, 0.05);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 181, 181, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3, h4 {
    font-weight: 600;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }
`;

export const ViolationCard = styled(Card)`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 0.95rem;
    
    strong {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const PrototypeCard = styled(Card)`
  h4 {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 1.25rem;
  }
`;

export const PrototypeBadge = styled.span<{ variant: 'blue' | 'purple' | 'green' }>`
  background: ${({ variant }) => 
    variant === 'blue' ? 'rgba(59, 130, 246, 0.2)' :
    variant === 'purple' ? 'rgba(147, 51, 234, 0.2)' :
    'rgba(34, 197, 94, 0.2)'
  };
  color: ${({ variant, theme }) => 
    variant === 'blue' ? '#60A5FA' :
    variant === 'purple' ? '#A78BFA' :
    '#4ADE80'
  };
  padding: 4px 12px;
  border-radius: 24px;
  font-size: 0.85rem;
  font-weight: 600;
`;

export const FeedbackBox = styled.div`
  background: rgba(255, 181, 181, 0.05);
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
  
  p:first-child {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 8px;
    
    strong {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  ul {
    list-style: disc;
    list-style-position: inside;
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.9rem;
    
    li {
      margin-bottom: 4px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  background: rgba(255, 181, 181, 0.05);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 181, 181, 0.1);
  
  thead {
    background: rgba(255, 181, 181, 0.1);
    
    th {
      padding: 16px;
      text-align: left;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 0.9rem;
      
      &:not(:first-child) {
        text-align: center;
      }
    }
  }
  
  tbody {
    tr {
      border-top: 1px solid rgba(255, 181, 181, 0.1);
      
      td {
        padding: 16px;
        color: ${({ theme }) => theme.colors.textLight};
        font-size: 0.9rem;
        
        &:not(:first-child) {
          text-align: center;
        }
        
        &:first-child {
          font-weight: 500;
        }
      }
      
      &:hover {
        background: rgba(255, 181, 181, 0.05);
      }
    }
  }
`;

export const HighlightedCell = styled.td`
  background: rgba(34, 197, 94, 0.1) !important;
  font-weight: 600 !important;
  color: #4ADE80 !important;
`;

export const SolutionBox = styled.div`
  background: rgba(255, 181, 181, 0.05);
  padding: 32px;
  border-radius: 16px;
  border: 1px solid rgba(255, 181, 181, 0.1);
  margin-bottom: 32px;
  
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.8;
    margin-bottom: 24px;
  }
`;

export const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  
  span:first-child {
    color: #4ADE80;
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  
  div {
    h5 {
      font-weight: 600;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.colors.text};
    }
    
    p {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textLight};
      margin: 0;
    }
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

export const ResultCard = styled.div`
  background: rgba(34, 197, 94, 0.1);
  padding: 24px;
  border-radius: 12px;
  border: 2px solid rgba(34, 197, 94, 0.3);
  
  div:first-child {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4ADE80;
    margin-bottom: 8px;
  }
  
  p:first-of-type {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    margin-bottom: 4px;
  }
  
  p:last-of-type {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Quote = styled.blockquote`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding-left: 24px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 24px;
  
  footer {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-top: 8px;
    font-style: normal;
    opacity: 0.7;
  }
`;

export const CTASection = styled.section`
  background: linear-gradient(135deg, rgba(255, 181, 181, 0.2) 0%, rgba(244, 228, 144, 0.2) 100%);
  padding: 80px 32px;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 16px;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 24px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 32px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 32px;
  background: linear-gradient(to right, #FFB5B5 62%, #f4e490 112%);
  color: #000000;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-block;
  padding: 12px 32px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 181, 181, 0.1);
    transform: translateY(-2px);
  }
`;

export const DetailsFooter = styled.section`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 48px 32px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px 16px;
  }
`;

export const DetailsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  
  h4 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 12px;
    font-size: 0.95rem;
  }
  
  ul {
    list-style: none;
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.9rem;
    
    li {
      margin-bottom: 4px;
    }
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.textLight};
  
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
    
    &:before {
      content: '•';
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.2rem;
      margin-right: 12px;
      flex-shrink: 0;
    }
    
    strong {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ViolationBadge = styled.span`
  background: rgba(239, 68, 68, 0.2);
  color: #EF4444;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 12px;
  flex-shrink: 0;
`;

export const PrototypeSection = styled.div`
  background: rgba(255, 181, 181, 0.05);
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 32px;
  
  h4 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;
  }
  
  ol {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.8;
    margin-left: 20px;
    
    li {
      margin-bottom: 8px;
      
      strong {
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

export const WarningBox = styled.div`
  background: rgba(234, 179, 8, 0.1);
  border-left: 4px solid #EAB308;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 4px;
  
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textLight};
    
    strong {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const ProtoLink = styled.div`
  background: rgba(255, 181, 181, 0.15);
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 32px;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  a {
    display: inline-block;
    margin-top: 16px;
    padding: 12px 24px;
    background: linear-gradient(to right, #FFB5B5 62%, #f4e490 112%);
    color: #000000;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

