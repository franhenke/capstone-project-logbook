import React from 'react'
import styled from 'styled-components'
import loading from '../images/loading.svg'

export default function LoadingScreen() {
  return (
    <LoadingScreenStyled>
      <img src={loading} alt="loading" />
    </LoadingScreenStyled>
  )
}

const LoadingScreenStyled = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-content: center;

img {
  width: 60px;
      @keyframes loading-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
}
`
