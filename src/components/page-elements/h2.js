import React from 'react'
import styled from 'styled-components'
import { AutoLink } from './linked-headers'

const StyledText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.serif};
  ${AutoLink};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`

export const H2 = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}
