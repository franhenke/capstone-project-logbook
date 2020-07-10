import React from 'react'
import styled from 'styled-components'
import Button from './Button/Button'
import useForm from '../hooks/useForm'

export default function Form({ onFormSubmit }) {
  const [values, handleChange] = useForm({})

  return (
    <JournalFormStyled onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input
        onChange={(event) => handleChange(event)}
        value={values.date || ''}
        type="date"
        name="date"
        id="date"
        autoFocus
        required
      />
      <label htmlFor="city">City</label>
      <input
        onChange={(event) => handleChange(event)}
        value={values.city || ''}
        type="text"
        name="city"
        id="city"
        required
      />

      <label htmlFor="caption">Caption</label>
      <input
        onChange={(event) => handleChange(event)}
        value={values.caption || ''}
        name="caption"
        type="text"
        id="caption"
        min="5"
        required
        autoFocus
      />
      <label htmlFor="memory">Memory</label>
      <textarea
        onChange={(event) => handleChange(event)}
        value={values.memory || ''}
        type="text"
        name="memory"
        min="10"
        id="month"
        required
      />
      <Button text="Save" />
    </JournalFormStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const entry = { values }
    onFormSubmit(entry)
  }
}

const JournalFormStyled = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 340px;
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
    color: var(--text);
    border: none;
    border-bottom-style: solid;
    border-bottom-color: #979797;
    border-bottom-width: 1px;
    opacity: 0.5;
    width: 275px;
  }

  textarea {
    margin-bottom: 20px;
  }

  [type='date'] {
    width: 140px;
  }
`
