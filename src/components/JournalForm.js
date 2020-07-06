import React from 'react'
import { useForm } from 'react-hook-form'
import Datepicker from './Datepicker'

export default function JournalForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Datepicker
        as={Datepicker}
        type="month"
        placeholder="Date"
        name="Day"
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.day && 'Please select a date'}
      <input
        type="search"
        placeholder="City"
        name="city"
        ref={register({ required: true, min: 3, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Caption"
        name="caption"
        ref={register({ required: true, min: 5, maxLength: 50 })}
      />
      {errors.caption && 'Please add a caption'}
      <textarea
        name="memory"
        ref={register({ required: true, min: 10, maxLength: 500 })}
      />

      <input type="submit" />
    </form>
  )
}
