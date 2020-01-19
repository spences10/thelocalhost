import React from 'react'
import styled from 'styled-components'
import { AutoLink } from './linked-headers'

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['6xl']};
  font-family: ${({ theme }) => theme.font.monospace};
  ${() => AutoLink}
  margin-top: 50px;
`

export const H1 = ({ children }) => {
  return <StyledText>{children}</StyledText>
}
