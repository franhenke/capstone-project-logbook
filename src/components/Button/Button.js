import React from 'react'
import styled from 'styled-components'

export default function Button({ text, disabled }) {
  return <StyledButton disabled={disabled}>{text}</StyledButton>
}

const StyledButton = styled.button`
  color: var(--background);
  align-self: center;
  letter-spacing: 2.5px;
  width: 285px;
  height: 40px;
  border-radius: 10px;
  background-color: #6d7885;
  border: none;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin-top: 15px;
  padding: 5px 5px;
  margin-bottom: 20px;

  &:disabled {
    cursor: not-allowed;
    opacity: 20%;
  }
`
