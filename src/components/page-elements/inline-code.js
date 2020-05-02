import React from 'react'
import styled, { css } from 'styled-components'
import 'victormono'

export const inlineCode = css`
  padding: 0 3px;
  background-color: var(
    --colour-on-secondary,
    ${({ theme }) => theme.colours.grey[300]}
  );
  font-family: 'Victor Mono', monospace;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

const StyledText = styled.code`
  ${inlineCode}
`

export const InlineCode = ({ children }) => {
  return <StyledText>{children}</StyledText>
}
