import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export const Link = styled(props => <GatsbyLink {...props} />)`
  color: ${({ theme }) => theme.colours.grey[900]};
  &:focus {
    outline: 3px dashed ${({ theme }) => theme.colours.primary[500]};
  }
  padding: 3px;
  &:hover {
    color: ${({ theme }) => theme.colours.primary[500]};
  }
  &:active {
    color: ${({ theme }) => theme.colours.primary[500]};
  }
`
