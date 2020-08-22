import React from 'react'
import styled from 'styled-components'
import image from '../UI/images/mockuser.svg'
import PropTypes from 'prop-types'

const SidebarToggler = ({ open, setOpen }) => {
  return (
    <>
      <MenuToggleStyled open={open} onClick={() => setOpen(!open)} />
    </>
  )
}

export default SidebarToggler

SidebarToggler.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

const MenuToggleStyled = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`
