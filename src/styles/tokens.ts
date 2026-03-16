export const tokens = {
  colors: {
    primary: '#1A202C',
    secondary: '#2D3748',
    accent: '#38B2AC',
    background: '#F7FAFC',
    text: '#2D3748',
    white: '#FFFFFF',
    black: '#000000',
    grayLight: '#E2E8F0',
    grayDark: '#4A5568',
    error: '#E53E3E',
    warning: '#DD6B20',
    success: '#38A169',
    info: '#3182CE',
  },
  fonts: {
    body: '"Inter", "Helvetica Neue", Arial, sans-serif',
    heading: '"Merriweather", serif',
    monospace: '"Fira Mono", "Menlo", monospace',
    arabic: '"Amiri", "Scheherazade", serif',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
}

export type Tokens = typeof tokens