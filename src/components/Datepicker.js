import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Datepicker() {
  const [date, setDate] = useState()
  const handleChange = (date) => setDate(date)
  const today = new Date()
  let last7Days = new Date()
  last7Days.setDate(last7Days.getDate() - 7)

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      minDate={last7Days}
      maxDate={today}
      dateFormat="d MMMM, yyyy"
    />
  )
}
