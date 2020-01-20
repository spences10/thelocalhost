import React from 'react'
import styled from 'styled-components'
import { H1, P } from './page-elements'
import { Link } from './shared'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledH1 = styled(H1)`
  font-family: ${({ theme }) => theme.font.monospace};
  font-style: italic;
`

const StyledP = styled(P)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
`

export const Header = ({ siteTitle, siteDescription }) => (
  <StyledLink to="/">
    <StyledH1>{siteTitle}</StyledH1>
    <StyledP>{siteDescription}</StyledP>
  </StyledLink>
)
