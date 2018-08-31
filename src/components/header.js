import React from 'react'
import styled from 'styled-components'
import Menu from './menu'

const HeaderWrapper = styled.header`
  @media (max-width: 426px) {
    height: 200px;
    padding: 20px;
  }

  @media (min-width: 1440px) {
    height: 150px;
    padding: 20px;
  }

  height: 300px;
  padding: 40px;
`

const Header = () => (
  <HeaderWrapper>
    <Menu />
  </HeaderWrapper>
)

export default Header
