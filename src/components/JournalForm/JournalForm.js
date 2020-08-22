import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import dayjs from 'dayjs'

import useForm from '../../services/useForm'
import LoginContext from '../../services/auth/LoginContext'
import validateJournalEntry from './JournalFormValidation.js'
import AddJournalEntryToDbButton from '../Button/AddJournalEntryToDbButton'
import ImageUpload from '../../services/imageUpload'


JournalForm.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
}

export default function JournalForm() {
  const [values, inputErrors, handleChange, handleSubmit, setUrlToValues] = useForm(validateJournalEntry)
  const [fileUrl, setFileUrl] = useState(null)
  const currentDate = dayjs().format('DD/MM/YYYY')
  const { user } = useContext(LoginContext)

  const disableButton =
    !values.date ||
    !values.category ||
    !values.place ||
    !values.caption ||
    !values.entry ||
    Object.keys(inputErrors).length !== 0


  useEffect(() => {
    setUrlToValues(fileUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUrl])

  return (
    <>
      <HeadlineStyled>Create a memory</HeadlineStyled>
      <JournalFormStyled onSubmit={handleSubmit} noValidate>
        <FirstSectionStyled>
          <DatePickerStyled >
            <DatePickerLabelStyled htmlFor="date">
              Date
              </DatePickerLabelStyled>
            <DatePickerInputStyled
              onChange={(event) => handleChange(event)}
              value={values.date || ''}
              setValue={values.date || ''}
              type="date"
              name="date"
              id="date"
              autoFocus
              max={currentDate}
              required
            />

          </DatePickerStyled>
          <CategoryStyled>
            <label htmlFor="category">Category</label>
            <SelectStyled
              onChange={(event) => handleChange(event)}
              value={values.category || ''}
              name="category"
              id="category"
              required
            >
              <option value="" hidden> Category</option>
              <option value="Memory">Memory</option>
              <option value="Review">Review</option>
              <option value="Thoughts">Thoughts</option>
            </SelectStyled>
          </CategoryStyled>
        </FirstSectionStyled>
        <label htmlFor="place">Place</label>
        <input
          onChange={(event) => handleChange(event)}
          value={values.place || ''}
          type="text"
          name="place"
          id="place"
          required
          placeholder="Add a place or location to your entry"
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
          data-testid="caption"
          placeholder="Add a title to your entry"
        />
        <TextAreaSection>
          <label htmlFor="Entry">Entry</label>
          <StyledTextAreaInputField>
            <StyledTextArea
              onChange={(event) => handleChange(event)}
              value={values.entry || ''}
              type="text"
              name="entry"
              id="entry"
              min="10"
              required
              placeholder="tell your story.."
              error={inputErrors.entry}
            />
          </StyledTextAreaInputField>
        </TextAreaSection>
        <ImageUpload
          setFileUrl={setFileUrl} />
        {user ? (
          <AddJournalEntryToDbButton userId={user.uid} values={values} disabled={disableButton} />
        ) : null}
      </JournalFormStyled>
    </>
  )
}

const HeadlineStyled = styled.h2`
  place-self: center start;
  color: var(--mint);
  padding-left: 2.5em;
  margin-top: 2em;
  width: 10em;
  `

const JournalFormStyled = styled.form`
background-size: cover;
background-repeat: no-repeat;
grid-row: 2/3;
margin: 2.5em;
`

const FirstSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  justify-content: space-between;
  margin-bottom: 2em;
  `

const DatePickerStyled = styled.div`
  position: relative;

`
const DatePickerLabelStyled = styled.label`
  color: var(--background);
`

const DatePickerInputStyled = styled.input`

  font-size: 1rem;
  opacity: 0.5;
  color: var(--text);
  opacity: 0.5;
  `

const SelectStyled = styled.select`
  background: var(--background);
  color: var(--text);
  outline: none;
  border: none;
  font-size: 1em;
  width: 8em;
  margin: 0.5em 0 2em;
`

const CategoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  label {
    opacity: 0;
  }
`

const TextAreaSection = styled.section`
  margin: 1em 0;
  height: 10em;
  overflow-y: scroll;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

const StyledTextAreaInputField = styled.div`
 margin-bottom: 2.2em;
`

const StyledTextArea = styled(TextareaAutosize)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   
`
