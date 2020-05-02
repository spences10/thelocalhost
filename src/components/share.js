import React from 'react'
import { TwitterShareButton } from 'react-share'
import styled from 'styled-components'

const ShareWrapper = styled.section`
  h6 {
    background: linear-gradient(
      0.25turn,
      var(
        --title-gradient-from,
        ${({ theme }) => theme.colours.primary[200]}
      ),
      var(
        --title-gradient-to,
        ${({ theme }) => theme.colours.primary[500]}
      )
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    font-weight: 500;
  }
`

export const Share = ({ url, title, twitterHandle }) => {
  return (
    <ShareWrapper>
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle.split('@').join('')}
      >
        <h6>
          Useful? Click here to <span>share this</span> post on
          Twitter.
        </h6>
      </TwitterShareButton>
    </ShareWrapper>
  )
}
