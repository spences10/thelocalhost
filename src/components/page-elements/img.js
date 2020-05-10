import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  &:hover {
    opacity: 0.5;
  }
  box-shadow: var(--box-shadow-xl);
`

export const Img = props => {
  const { children, ...rest } = props

  return (
    <a href={props.src} target="_blank" rel="noopener noreferrer">
      <StyledImg {...rest}>{children}</StyledImg>
    </a>
  )
}
