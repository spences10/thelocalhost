import React from 'react'
import styled from 'styled-components'

export const StyledLi = styled.li`
  list-style-type: circle;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  word-break: break-word;
  line-height: ${({ theme }) => theme.lineHeight.tight};
  p {
    margin-top: 10px;
  }
`

export const Li = props => {
  return <StyledLi {...props}>{props.children}</StyledLi>
}
