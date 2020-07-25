import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../components/Button/Button'

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function SignUp({ SetProfile, signUp }) {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    triggerValidation,
    getValues,
    formState,
  } = useForm()
}
