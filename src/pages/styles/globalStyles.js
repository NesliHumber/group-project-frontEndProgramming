import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primaryDark: ${({ theme }) => theme.colors.primaryDark};
    --largeFontSize: ${({ theme }) => theme.fontSizes.xLarge};
    --secondaryLight: ${({ theme }) => theme.colors.secondaryLight};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.neutralDark};
    background-color: ${({ theme }) => theme.colors.neutralLight};
    line-height: 1.6; /* Increased line spacing for better readability */
    letter-spacing: 0.5px; /* Slightly increased letter spacing */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin-bottom: 1rem;
    line-height: 1.4; /* Professional look for headings */
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      background-color: ${({ theme }) => theme.colors.neutralLight};
      color: ${({ theme }) => theme.colors.neutralDark};
    }
  }

  ul {
    list-style-type: none;
  }

  header.page-header {
    padding: 2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    text-align: center;
    margin-bottom: 2rem;

    h1 {
      font-size: ${({ theme }) => theme.fontSizes.xLarge};
      margin: 0;
      letter-spacing: 1px;
    }
  }

   /* Footer styles */
  .site-footer {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: white;
    padding: 2rem 0;
    margin-top: 3rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
  }

  .footer-nav {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    a {
      color: white;
      opacity: 0.8;
      transition: opacity 0.3s ease;
      font-size: 0.9rem;

      &:hover {
        opacity: 1;
        text-decoration: underline;
      }
    }
  }

  .copyright {
    font-size: 0.8rem;
    opacity: 0.7;
    margin-top: 1rem;
  }

  /* Ensure footer stays at bottom */
  html, body, #__next {
    height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }
`;

export default GlobalStyles;