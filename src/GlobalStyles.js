import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  :root {
    --background: #F6F6F6;
    --primary: #1E81A0;
    --secondary: #64B2D0;
    --text: #21374F;
    --hightlight: #FF9B7B;
  }
 * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
	  background-color: var(--background);
    color: var(--text);
  }
  `
