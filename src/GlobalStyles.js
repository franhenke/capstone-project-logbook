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
    --lowopacity: RGBA(195,198,201,0.41);
    --iconactive: #49567E;
    --placeholder: #abb3bb;
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

  h2 {
    font-size: 1.3em;
    font-weight: 600;
  }

  input, textarea {
    font-size: 1em;
    background-color: var(--background);
    color: #808E8E;
    font-weight: 300;
    outline: none;
    border: none;
    width: 90%;
    margin: 0.5em 0 2em;

    &:focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: var(--placeholder);
    font-size: 1em;
  }
  }
  `
