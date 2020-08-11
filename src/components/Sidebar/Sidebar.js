import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import bookmarkIcon from '../../images/bookmarkFilled.svg'
import UserBar from '../auth/UserBar'
import ProfilePic from './ProfilePic'

const Sidebar = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ProfilePic />
      <MenuItemsStyled>
        <LinkStyled to={ROUTES.FAVLIST}>
          <img src={bookmarkIcon} alt="Icon for the logout" />
          Bookmarks
        </LinkStyled>
        <UserBar />
      </MenuItemsStyled>
    </StyledMenu>
  )
}
export default Sidebar

Sidebar.propTypes = {
  open: PropTypes.bool,
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: var(--mint);
  height: 100vh;
  text-align: left;
  padding: 25px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 99;
`

const MenuItemsStyled = styled.div`
  margin-top: 90px;
  height: 250px;
`

const LinkStyled = styled(Link)`
  position: relative;
  padding-left: 25px;
  font-size: 16px;
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s linear;

  :active {
    color: var(--iconactive);
  }

  img {
    position: absolute;
    left: 0;
    top: 2px;
    height: 18px;
  }
`
