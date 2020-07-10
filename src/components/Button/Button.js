import React from 'react'
import styled from 'styled-components'

export default function Button({ text, disabled }) {
  return <StyledButton disabled={disabled}>{text}</StyledButton>
}

const StyledButton = styled.button`
  color: var(--background);
  width: 100px;
  height: 25px;
  padding: auto;
  margin-top: 10px;
  border-radius: 16px;
  border: none;
  box-shadow: 6px 6px 12px -4px rgba(77, 180, 219, 0.68),
    inset -6px -5px 13px 0 #147491, inset -6px -6px 15px 0 #4bafd6;
  background-color: #64b2d0;
  color: #f6f6f6;
  text-align: center;
  letter-spacing: 2.63px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: Poppins;
  font-weight: 400;

  &:disabled {
    cursor: not-allowed;
    opacity: 20%;
  }
`
