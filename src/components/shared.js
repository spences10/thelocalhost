import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Link = styled(props => <GatsbyLink {...props} />)``;

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
`;

export const PostDate = styled.div`
  grid-area: date;
  margin-right: ${({ theme }) => theme.spacing[1]};
  &:after {
    content: ' ·';
  }
  ${down('sm')} {
    &:after {
      content: '';
    }
  }
`;

export const PostTimeToRead = styled.div`
  grid-area: ttr;
  margin-right: ${({ theme }) => theme.spacing[1]};
  &:after {
    content: ' ·';
  }
  ${down('sm')} {
    &:after {
      content: '';
    }
  }
`;

export const PostEditOnGitHub = styled.div`
  grid-area: edit;
  a {
    color: ${({ theme }) => theme.colours.grey[700]};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colours.grey[700]};
    &:hover {
      opacity: 0.5;
    }
    cursor: pointer;
  }
`;
