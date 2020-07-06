import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Datepicker from './Datepicker'

export default function JournalForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <JournalFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Datepicker
        name="Day"
        aria-invalid={errors.Day ? 'true' : 'false'}
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.day && 'Please select a date'}
      <input
        type="search"
        placeholder="City"
        name="City"
        aria-invalid={errors.City ? 'true' : 'false'}
        ref={register({ required: true, min: 3, maxLength: 100 })}
      />
      {errors.City && 'Please select a city'}
      <input
        type="text"
        placeholder="Caption"
        name="Caption"
        aria-invalid={errors.Memory ? 'true' : 'false'}
        ref={register({ required: true, min: 5, maxLength: 50 })}
      />
      {errors.Caption && 'Please add a caption'}
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
color`
