import styled from 'styled-components'
import {NavLink, Link } from 'react-router-dom'
import FaBars from 'react-icons/fa'

export const Nav = styled.nav`
  background : #000;
  height: 80px;
  diaply: flex;
  justify-contents: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }

`
