import React from 'react';
import styled from 'styled-components';
import { Link } from './shared';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledH1 = styled.h1`
  font-family: ${({ theme }) => theme.font.monospace};
  font-size: ${({ theme }) => theme.fontSize['5xl']};
  margin-top: ${({ theme }) => theme.spacing[5]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  /* font-style: italic; */
`;

const StyledP = styled.p`
  font-family: ${({ theme }) => theme.font.sans};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing[1]};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
`;

export const Header = ({ siteTitle, siteDescription }) => (
  <StyledLink to="/">
    <StyledH1>{siteTitle}</StyledH1>
    <StyledP>{siteDescription}</StyledP>
  </StyledLink>
);
