import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

export const CubeWrapper = styled.div`
  perspective: 1000px;
  width: 200px;
  height: 200px;
  margin: 100px auto;
`;

export const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotate} 20s infinite linear;
`;

export const Face = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: ${({ theme }) => theme.shadows.neon};
  box-shadow: ${({ theme }) => theme.shadows.neon};

  &.front { transform: translateZ(100px); }
  &.back { transform: translateZ(-100px) rotateY(180deg); }
  &.right { transform: rotateY(90deg) translateZ(100px); }
  &.left { transform: rotateY(-90deg) translateZ(100px); }
  &.top { transform: rotateX(90deg) translateZ(100px); }
  &.bottom { transform: rotateX(-90deg) translateZ(100px); }
`; 