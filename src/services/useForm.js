import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function useForm(validate) {
  const [inputs, setInputs] = useState({})
  const [inputErrors, setInputErrors] = useState({})

  useEffect(() => {
    setInputErrors(validate(inputs))
  }, [inputs, validate])


  useForm.propTypes = {
    validate: PropTypes.object,
  }


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
    }, 4000)
  }

  const handleChange = (event) => {
    event.persist()
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  const setUrlToInput = (url) => {
    setInputs({
      ...inputs,
      image: url,
    })
  }
  return [inputs, inputErrors, handleChange, handleSubmit, setUrlToInput]
}

const ToastTextStyled = styled.p`
  text-align: center;
  font-size: 0.9em;
`
