import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { Header } from './header'

const AppStyles = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
  ${down('sm')} {
    /* background-color: seagreen; */
  }
  ${up('md')} {
    /* background-color: dodgerblue; */
  }
  ${up('lg')} {
    /* background-color: rebeccapurple; */
  }
  ${up('xl')} {
    /* background-color: hotpink; */
  }
`

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  )
}
