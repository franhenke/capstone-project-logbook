import styled from 'styled-components'

export const BackgroundImage = styled.div`
 position: relative;
  display: flex;
  justify-content: center;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
