import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ffffff;
    --secondary-color: #f8fafc;
    --accent-color: #667eea;
    --background-color: #0c0c0c;
    --border-color: rgba(255, 255, 255, 0.1);
    --text-muted: rgba(255, 255, 255, 0.7);
    --shadow-light: rgba(255, 255, 255, 0.1);
    --shadow-dark: rgba(0, 0, 0, 0.3);
    
    /* Gradientes personalizados */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--gradient-background);
    color: var(--primary-color);
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5555c4;
  }

  /* Seleção de texto personalizada */
  ::selection {
    background: var(--accent-color);
    color: white;
  }

  ::-moz-selection {
    background: var(--accent-color);
    color: white;
  }

  /* Tipografia melhorada */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1em;
  }

  /* Links com estilo melhorado */
  a {
    color: var(--accent-color);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #5555c4;
    text-decoration: underline;
  }

  /* Botões com estilo base */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  button:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }

  /* Inputs com estilo melhorado */
  input, textarea, select {
    font-family: inherit;
    outline: none;
    transition: all 0.3s ease;
  }

  input:focus, textarea:focus, select:focus {
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }

  /* Animações globais */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }

  /* Utilitários de animação */
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .slide-in-left {
    animation: slideInFromLeft 0.6s ease-out;
  }

  /* Responsividade melhorada */
  @media (max-width: 1200px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }

  /* Melhorias de acessibilidade */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Modo escuro aprimorado */
  @media (prefers-color-scheme: dark) {
    :root {
      --primary-color: #ffffff;
      --secondary-color: #f1f5f9;
      --background-color: #0a0a0a;
    }
  }

  /* Estados de foco melhorados para acessibilidade */
  .focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }

  /* Loader global */
  .loader {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: var(--accent-color);
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

