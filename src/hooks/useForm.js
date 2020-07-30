import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function useForm(submitCallback) {
  const [inputs, setInputs] = useState({})

  let history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault()
    submitCallback(inputs)
    setInputs('')
    history.push('/home')
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
