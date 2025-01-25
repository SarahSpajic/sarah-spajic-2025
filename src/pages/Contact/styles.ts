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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

export const SocialButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  padding-right: 2.5rem;
  background: linear-gradient(to right, #FFB5B5 62%, #f4e490 112%);
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 1.05rem;
  width: 11rem;
  position: relative;

  &:after {
    content: '›';
    position: absolute;
    right: 1.5rem;
    transition: all 0.3s ease;
    transform: translateX(0);
  }

  &:hover {
    transform: translateY(-2px);

    &:after {
      transform: translateX(5px);
    }
  }
`; 