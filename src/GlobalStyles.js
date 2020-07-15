import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  :root {
    --background: #F6F6F6;
    --primary: #727C86;
    --secondary: #6D7885;
    --text: #21374F;
    --highlight: #64B2D0;
  }
 * {
    box-sizing: border-box;
    margin: 0;
  padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
	  background-color: var(--background);
    color: var(--text);
  
  }
  `
