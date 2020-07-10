import { useState } from 'react'

export default function useForm() {
  const [state, setState] = useState({})

  const handleChange = (event) => {
    event.persist()
    event.target.value &&
      setState((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }))
  }
  return [state, handleChange]
}
