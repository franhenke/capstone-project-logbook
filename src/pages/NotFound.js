import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to={ROUTES.HOME}>Go Home</Link>
  </div>
)

export default NotFound
