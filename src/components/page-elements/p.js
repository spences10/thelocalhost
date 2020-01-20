import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`

export const P = props => {
  const { children, ...rest } = props
  return <StyledText {...rest}>{children}</StyledText>
}
