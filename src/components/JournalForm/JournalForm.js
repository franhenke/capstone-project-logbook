import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import useForm from '../../hooks/useForm'

export default function Form({ onFormSubmit }) {
  const [values, handleChange, handleSubmit] = useForm(exportEntries)

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
        id="memory"
        required
      />
      <Button text="Save" />
    </JournalFormStyled>
  )
  function exportEntries(values) {
    onFormSubmit(values)
    console.log(values)
    return values
  }
}

const JournalFormStyled = styled.form`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 340px;
  width: 285px;
  font-family: Roboto;

  label {
    color: #21374f;
    font-size: 20px;
    letter-spacing: 3.15px;
    opacity: 0.5;
    text-transform: uppercase;
    margin: 18px 0 5px;
  }

  input,
  textarea {
    color: var(--text);
    border: none;
    border-bottom-style: solid;
    border-bottom-color: #979797;
    border-bottom-width: 1px;
    opacity: 0.5;
  }

  textarea {
    margin-bottom: 20px;
  }

  [type='date'] {
    width: 140px;
  }
`
