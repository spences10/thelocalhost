import React from 'react'
import styled from 'styled-components'
import { inlineCode } from './inline-code'
import { AutoLink } from './linked-headers'

const StyledText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.serif};
  ${AutoLink};
  margin-top: ${({ theme }) => theme.spacing[12]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  code {
    ${inlineCode}
  }
`

export const H2 = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}
