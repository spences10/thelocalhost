import React from 'react'
import styled from 'styled-components'
import { AutoLink } from './linked-headers'

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.font.serif};
  /* color: ${({ theme }) => theme.colours.grey[900]}; */
  ${() => AutoLink}
`

export const H1 = ({ children }) => {
  return <StyledText>{children}</StyledText>
}
