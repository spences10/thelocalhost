import React from 'react'
import styled from 'styled-components'

const StyledText = styled.br`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

export const Br = ({ children }) => {
  return <StyledText>{children}</StyledText>
}
