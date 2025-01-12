import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: ${({ theme }) => theme.shadows.neon};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(255, 16, 240, 0.1),
      rgba(16, 255, 241, 0.1)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transform: translateZ(20px);
`;

export const ProjectInfo = styled.div`
  padding: 2rem;
  background: rgba(10, 10, 10, 0.9);
  transform: translateZ(30px);
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  text-shadow: ${({ theme }) => theme.shadows.neon};
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.neon};
    transform: translateZ(40px);
  }
`; 