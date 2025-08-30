import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #0d0d1e;
    --primary-color: #f0f0f0;
    --accent-color: #6a6ad4;
    --card-background: rgba(255, 255, 255, 0.05);
    --border-color: rgba(255, 255, 255, 0.1);
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--primary-color);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;