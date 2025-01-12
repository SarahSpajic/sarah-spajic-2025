import styled from 'styled-components';

export const ContactSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.55rem;
  margin-bottom: 2rem;
  font-weight: 700;
`;

export const LinkButton = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.primary};
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.05rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`; 