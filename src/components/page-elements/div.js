import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div``

export const Div = (props, { children }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>
}
