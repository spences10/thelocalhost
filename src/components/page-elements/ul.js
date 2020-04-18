import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 30px;
  margin-top: ${({ theme }) => theme.spacing[3]};
`

export const StyledUl = styled.ul`
  margin: 0 17px;
`

export const Ul = props => {
  return (
    <Wrapper>
      <StyledUl {...props}>{props.children}</StyledUl>
    </Wrapper>
  )
}
