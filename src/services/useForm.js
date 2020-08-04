import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

export default function useForm() {
  const [inputs, setInputs] = useState({})
  const Msg = () => (
    <div data-cy="toast">
      <ToastTextStyled>You've successfully created a memory</ToastTextStyled>
    </div>
  )

  let history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault()

    toast(<Msg />, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setInputs('')
    setTimeout(() => {
      history.push('/home')
    }, 2000)
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

const ToastTextStyled = styled.p`
  text-align: center;
  font-size: 12px;
`
