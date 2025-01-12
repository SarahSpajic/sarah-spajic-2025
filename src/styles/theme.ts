export const theme = {
  colors: {
    primary: '#FFB5B5',
    primaryDark: '#FF9494',
    text: '#FFFFFF',
    textLight: '#CCCCCC',
    background: '#000000',
    backgroundAlt: '#0A0A0A',
    accent: '#FFB5B5'
  },
  breakpoints: {
    mobile: '768px',
  },
  spacing: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
  shadows: {
    neon: '0 0 10px rgba(255, 181, 181, 0.5), 0 0 20px rgba(255, 181, 181, 0.3)',
    subtle: '0 2px 8px rgba(255, 181, 181, 0.1)'
  }
};

export type Theme = typeof theme; 