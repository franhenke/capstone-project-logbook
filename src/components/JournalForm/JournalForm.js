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
        <option className="memory" value="<3Memory">
          Memory
        </option>
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
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 285px;
  font-family: Roboto;
  margin-bottom: 40px;
  label {
    color: #21374f;
    font-size: 14px;
    letter-spacing: 3.15px;
    height: 16px;
    opacity: 0.5;
    text-transform: uppercase;
    margin: 25px 0 5px;
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
    height: 200px;
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
    height: 300px;
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
  height: 200px;
  width: 285px;

  .memory {
    color: orange;
    &:checked {
      color: orange;
    }
  }
`