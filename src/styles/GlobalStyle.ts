import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    perspective: 1000px;
  }

  #root {
    min-height: 100vh;
  }

  section {
    padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.medium};
  }

  h1, h2, h3 {
    margin-bottom: ${props => props.theme.spacing.medium};
    color: ${props => props.theme.colors.primary};
    text-shadow: ${props => props.theme.shadows.neon};
  }

  ::selection {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
  }
`; 