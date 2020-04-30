import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { down } from 'styled-breakpoints'
import styled, { css } from 'styled-components'

export const Link = styled(props => <GatsbyLink {...props} />)``

export const PostInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing[0]};
  color: ${({ theme }) => theme.colours.grey[700]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-transform: uppercase;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-template-areas: 'date ttr edit';
  ${down('sm')} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      'date'
      'ttr'
      'edit';
  }
`

export const PostTimeToRead = styled.div`
  grid-area: ttr;
  margin-right: ${({ theme }) => theme.spacing[1]};
`

export const PostEditOnGitHub = styled.div`
  grid-area: edit;
  &:before {
    content: '· ';
  }
  ${down('sm')} {
    &:before {
      content: '';
    }
  }
  a {
    color: ${({ theme }) => theme.colours.grey[700]};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colours.grey[700]};
    &:hover {
      opacity: 0.5;
    }
    cursor: pointer;
  }
`

export const CopyWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.serif};
  line-height: ${({ theme }) => theme.lineHeight.none};
`

export const StyledExcerpt = styled.p`
  margin-top: ${({ theme }) => theme.spacing[3]};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const IndexWrapper = styled.main``

export const NegMargin = css`
  margin-left: -${({ theme }) => theme.spacing[12]};
  margin-right: -${({ theme }) => theme.spacing[12]};
  ${down('sm')} {
    margin-left: -${({ theme }) => theme.spacing[0]};
    margin-right: -${({ theme }) => theme.spacing[0]};
  }
`

export const CustomScroll = css`
  scrollbar-width: thin;
  scrollbar-color: var(--thumb-bg) var(--scrollbar-bg);
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: var(--scrollbar-bg);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--thumb-bg);
    border-radius: 14px;
    border: 3px solid var(--scrollbar-bg);
  }
`
