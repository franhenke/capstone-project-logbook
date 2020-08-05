import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    --background: #F8FBFD;
    --primary: #727C86;
    --lighter: #A9AAAD;
    --secondary: #6D7885;
    --text: #6E7A85;
    --lightgrey: #C3C6C9;
    --mint: #8DACAB;
    --highlight: #64B2D0;
    --icon: #ACB6CE;
    --iconactive: #49567E;
  }
 * {
    box-sizing: border-box;
    margin: 0;
  padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
	  background-color: var(--background);
    color: var(--text);
  
  }
  `
