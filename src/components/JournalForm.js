import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Datepicker from './Datepicker'

export default function JournalForm() {
  const { register, handleSubmit, errors } = useForm()

  return (
    <JournalFormStyled onSubmit={handleSubmit}>
      <label>Date</label>
      <Datepicker
        name="Day"
        aria-invalid={errors.Day ? 'true' : 'false'}
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.day && 'Please select a date'}
      <label>City</label>
      <input
        label="City"
        type="search"
        name="City"
        aria-invalid={errors.City ? 'true' : 'false'}
        ref={register({ required: true, min: 3, maxLength: 100 })}
      />
      {errors.City && 'Please select a city'}
      <label>Caption</label>
      <input
        type="text"
        name="Caption"
        aria-invalid={errors.Memory ? 'true' : 'false'}
        ref={register({ required: true, min: 5, maxLength: 50 })}
      />
      {errors.Caption && 'Please add a caption'}
      <label>Memory</label>
      <textarea
        name="Memory"
        aria-invalid={errors.Memory ? 'true' : 'false'}
        ref={register({ required: true, min: 10, maxLength: 500 })}
      />
      {errors.Memory && 'Memory field cannot be empty'}

      <input type="submit" />
    </JournalFormStyled>
  )
}

const JournalFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  height: 238px;
  width: 285px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;

  label {
    color: #21374f;
    font-size: 12px;
    letter-spacing: 3.15px;
    height: 16px;
    opacity: 0.5;
    text-transform: uppercase;
    margin: 15px 0 10px;
  }

  input,
  textarea {
    background: var(--background);
    color: var(--text);
    border: none;
    border-bottom-style: solid;
    border-bottom-color: #979797;
    border-bottom-width: 1px;
    opacity: 0.5;
    width: 275px;
  }
`
