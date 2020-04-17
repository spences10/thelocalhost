import React from 'react'
import { isIE } from 'react-device-detect'
import styled from 'styled-components'
import {
  IndexWrapper,
  StyledExcerpt,
  StyledLink,
  StyledTitle,
} from '../components/shared'

const PageWrapper = styled.div`
  height: 100vh;
  position: relative;
`

const Styled404 = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizeH2};
`

export default () => {
  if (isIE)
    return (
      <IndexWrapper>
        <StyledTitle>IE is not supported.</StyledTitle>
        <StyledExcerpt>
          Please use a modern browser, download Firefox, Chrome or
          Edge
        </StyledExcerpt>
      </IndexWrapper>
    )
  return (
    <>
      <PageWrapper>
        <Styled404>
          <StyledTitle>That's a nope!</StyledTitle>
          <StyledExcerpt>
            You've come to a page that doesn't exist, pls go{' '}
            <StyledLink to="/">home.</StyledLink>
          </StyledExcerpt>
        </Styled404>
      </PageWrapper>
    </>
  )
}
