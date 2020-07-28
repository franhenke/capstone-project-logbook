import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import useForm from '../../hooks/useForm'
import dayjs from 'dayjs'

export default function Form({ onFormSubmit }) {
  const [values, handleChange, handleSubmit] = useForm(exportEntries)
  const currentDate = dayjs().format('DD/MM/YYYY')
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
        max={currentDate}
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
        type="text"
        name="caption"
        id="caption"
        min="5"
        required
      />
      <label htmlFor="category">Category</label>
      <SelectStyled
        onChange={(event) => handleChange(event)}
        value={values.category || ''}
        name="category"
        id="category"
        required
      >
        <option value="" disabled hidden></option>
        <option value="Experience">Experience</option>
        <option value="Review">Review</option>
        <option value="Thoughts">Thoughts</option>
      </SelectStyled>
      <label htmlFor="memory">Memory</label>
      <textarea
        onChange={(event) => handleChange(event)}
        value={values.memory || ''}
        type="text"
        name="memory"
        id="memory"
        min="10"
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
margin-top: 150px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 520px;
  width: 285px;
  font-family: Roboto;
  
  label {
    color: #21374f;
    font-size: 16px;
    letter-spacing: 2px;
    height: 16px;
    opacity: 0.5;
    margin: 25px 0 10px;
  }

  input,
  textarea {
    background: var(--background);
    color: var(--text);
    outline: none;
    border: none;
    border-bottom-style: solid;
    border-bottom-color: #979797;
    border-bottom-width: 1px;
    font-size: 16px;
    opacity: 0.5;
    width: 285px;

    &:focus {
      border: none;
      border-bottom-style: solid;
      border-bottom-color: var(--highlight);
      border-bottom-width: 1px;
    }
  }

  textarea {
    margin-bottom: 15px;
    height: 60px;
  }
`
const SelectStyled = styled.select`
  background: var(--background);
  color: var(--text);
  outline: none;
  border: none;
  border-bottom-style: solid;
  border-bottom-color: #979797;
  border-bottom-width: 1px;
  font-size: 16px;
  opacity: 0.5;
  width: 285px;
`
