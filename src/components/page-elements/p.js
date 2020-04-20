import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
  img {
    width: 100%;
  }
  word-break: break-word;
`

export const P = props => {
  const { children, ...rest } = props
  return <StyledText {...rest}>{children}</StyledText>
}
