import React from 'react'

import Layout from '../components/layout'
import styled from 'styled-components'

const StyledComponentsTest = styled.p`
  color: red;
`

const IndexPage = () => (
  <Layout>
    <StyledComponentsTest>This text should be red.</StyledComponentsTest>
  </Layout>
)

export default IndexPage
