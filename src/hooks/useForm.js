import { useState } from 'react'

export default function useForm(submitCallback) {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    submitCallback(inputs)
    setInputs('')
  }

  const handleChange = (event) => {
    event.persist()
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  return [inputs, handleChange, handleSubmit]
}
