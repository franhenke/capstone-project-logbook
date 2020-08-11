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
import ImageUpload from '../../services/imageUpload'

JournalForm.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
}

export default function AddJournalForm() {
  const [values, handleChange, handleSubmit, setUrlToValues] = useForm()
  const [fileUrl, setFileUrl] = useState(null)
  const currentDate = dayjs().format('DD/MM/YYYY')
  const { user } = useContext(LoginContext)

  useEffect(() => {
    setUrlToValues(fileUrl)
  }, [fileUrl])

  return (
    <>
      <HeadlineStyled>Create a memory</HeadlineStyled>
      <JournalFormStyled onSubmit={handleSubmit} noValidate>
        <FirstSectionStyled>
          <DatePickerStyled htmlFor="date">
            <img src={dateIcon} alt="calendar icon" data-cy="dateIcon" />
            <DatePickerLabelStyled>
              Date
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
            placeholder="Add a place or location to your entry"
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
            />
          </StyledTextAreaInputField>
        </TextAreaSection>

        <ImageUpload setFileUrl={setFileUrl} />

        {user ? (
          <AddJournalEntryToDbButton userId={user.uid} values={values} />
        ) : null}
      </JournalFormStyled>
    </>
  )
}

const HeadlineStyled = styled.p`
  left: 37px;
  top: 80px;
  position: absolute;
  color: var(--mint);
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`

const JournalFormStyled = styled.form`
  margin-top: 120px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 300px;
  font-family: Roboto;
`

const FirstSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 180px 150px;
  grid-template-rows: 70px;
  justify-content: space-between;
  margin-bottom: 35px;
  align-items: baseline;
`

const DatePickerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  img {
    position: absolute;
    top: 32px;
    left: 1px;
    pointer-events: none;
    height: 14px;
  }
`
const DatePickerLabelStyled = styled.label`
  color: var(--background);
`

const DatePickerInputStyled = styled.input`
  margin-left: 23px;
  height: 23px;
  font-size: 17px;
  opacity: 0.5;
  color: var(--text);
  opacity: 0.5;
`

const SelectStyled = styled.select`
  background: var(--background);
  color: var(--text);
  outline: none;
  border: none;

  height: 20px;
  font-size: 16px;
  width: 120px;
`

const CategoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  label {
    opacity: 0;
  }
`

const PlaceStyled = styled.div`
  margin-bottom: 35px;
`

const TextAreaSection = styled.section`
  margin: 35px 0;
  height: 150px;
  overflow-y: scroll;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

const StyledTextAreaInputField = styled.div`
  position: relative;
  margin-bottom: 40px;
`

const StyledTextArea = styled(TextareaAutosize)`
  outline: none;
  border: none;
  background: var(--background);
  width: 90%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #808e8e;

  &::placeholder {
    color: #abb3bb;
    font-family: 'Roboto', sans-serif;
  }
  &:focus {
    outline: none;
  }
`
