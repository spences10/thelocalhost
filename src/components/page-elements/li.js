import React from 'react'
import styled from 'styled-components'

export const StyledLi = styled.li`
  list-style-type: circle;
  word-break: break-word;
  p {
    margin-top: 10px;
  }
`

export const Li = props => {
  return <StyledLi {...props}>{props.children}</StyledLi>
}
