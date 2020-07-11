import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import dayjs from 'dayjs'

export default function Form({ onFormSubmit }) {
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [caption, setCaption] = useState('')
  const [memory, setMemory] = useState('')

  const currentDate = dayjs().format('YYYY-MM-DD')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (city && date && caption && memory) {
      onFormSubmit({ date, city, caption, memory })
      setCity('')
      setDate('')
      setCaption('')
      setMemory('')
    }
  }

  return (
    <JournalFormStyled onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input
        onChange={(event) => setDate(event.target.value)}
        value={date}
        type="date"
        max={currentDate}
        id="date"
        autoFocus
        required
      />
      <label htmlFor="city">City</label>
      <input
        onChange={(event) => setCity(event.target.value)}
        value={city}
        type="text"
        min="1"
        max="15"
        id="city"
        required
      />

      <label htmlFor="caption">Caption</label>
      <input
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
        type="text"
        min="1"
        max="25"
        id="caption"
        required
        autoFocus
      />
      <label htmlFor="memory">Memory</label>
      <textarea
        onChange={(event) => setMemory(event.target.value)}
        value={memory}
        type="text"
        min="1"
        max="250"
        id="memory"
        required
      />
      <Button text="Save" />
    </JournalFormStyled>
  )
}

const JournalFormStyled = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 390px;
  width: 285px;
  font-family: Roboto;

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
    height: 200px;
    width: 275px;
  }
`
