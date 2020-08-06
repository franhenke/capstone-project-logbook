import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useForm from '../../services/useForm'
import dayjs from 'dayjs'
import dateIcon from '../../images/datePicker.svg'
import { useContext } from 'react'
import LoginContext from '../auth/LoginContext'
import AddJournalEntryToDbButton from '../Button/AddJournalEntryToDbButton'
import TextareaAutosize from 'react-textarea-autosize'
import PropTypes from 'prop-types'
import 'react-toastify/dist/ReactToastify.css'
import ImageUpload from '../imageUpload'

JournalForm.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
}

export default function JournalForm() {
  const [values, handleChange, handleSubmit, setUrlToValues] = useForm()
  const [fileUrl, setFileUrl] = useState(null)
  const currentDate = dayjs().format('DD/MM/YYYY')
  const { user } = useContext(LoginContext)

  useEffect(() => {
    setUrlToValues(fileUrl)
  }, [fileUrl])

  return (
    <JournalFormStyled onSubmit={handleSubmit} noValidate>
      <FirstSectionStyled>
        <DatePickerStyled>
          <DatePickerLabelStyled htmlFor="date">
            Date
            <img src={dateIcon} alt="calendar icon" data-cy="dateIcon" />
            <DatePickerInputStyled
              onChange={(event) => handleChange(event)}
              value={values.date || ''}
              type="date"
              name="date"
              id="date"
              autoFocus
              max={currentDate}
              required
            />
          </DatePickerLabelStyled>
        </DatePickerStyled>
        <CategoryStyled>
          <label htmlFor="category">Category</label>
          <SelectStyled
            defaultValue=""
            onChange={(event) => handleChange(event)}
            value={values.category || ''}
            name="category"
            id="category"
            required
          >
            <option value="" hidden>
              Category
            </option>
            <option value="Memory">Memory</option>
            <option value="Review">Review</option>
            <option value="Thoughts">Thoughts</option>
          </SelectStyled>
        </CategoryStyled>
      </FirstSectionStyled>
      <PlaceStyled>
        <label htmlFor="place">Place</label>
        <input
          onChange={(event) => handleChange(event)}
          value={values.place || ''}
          type="text"
          name="place"
          id="place"
          required
        />
      </PlaceStyled>
      <label htmlFor="caption">Caption</label>
      <input
        onChange={(event) => handleChange(event)}
        value={values.caption || ''}
        type="text"
        name="caption"
        id="caption"
        min="5"
        required
        placeholder="Add a titel to your entry"
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
          />
        </StyledTextAreaInputField>
      </TextAreaSection>
      <ImageUpload setFileUrl={setFileUrl} />

      {user ? (
        <AddJournalEntryToDbButton userId={user.uid} values={values} />
      ) : null}
    </JournalFormStyled>
  )
}

const JournalFormStyled = styled.form`
  margin-top: 150px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 520px;
  width: 285px;
  font-family: Roboto;
`

const FirstSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 180px 150px;
  grid-template-rows: 70px;
  justify-content: space-between;
`

const DatePickerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    position: absolute;
    top: 27px;
    left: 1px;
    pointer-events: none;
    height: 14px;
  }
`

const CategoryStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    opacity: 0;
  }
`

const TextAreaSection = styled.section`
  margin: 25px 0;
  height: 250px;
  overflow-y: scroll;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

const SelectStyled = styled.select`
  background: var(--background);
  color: var(--text);
  outline: none;
  border: none;
  height: 23px;
  font-size: 16px;
  opacity: 0.5;
  width: 120px;
  padding-top: 1.5px;
`

const DatePickerLabelStyled = styled.label`
  color: var(--background);
`

const DatePickerInputStyled = styled.input`
  margin-left: 23px;
  height: 20px;
  font-size: 17px;
  opacity: 0.5;
  color: var(--text);
  opacity: 0.5;
  padding-bottom: 2px;
`

const PlaceStyled = styled.div`
  margin-bottom: 20px;
`

const StyledTextAreaInputField = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 50px;
`

const StyledTextArea = styled(TextareaAutosize)`
  outline: none;
  border: none;
  background: var(--background);
  width: 90%;

  font-size: 16px;
  ::placeholder {
    color: #abb3bb;
    font-size: 12px;
    padding: 0;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--highlight);
  }
`
