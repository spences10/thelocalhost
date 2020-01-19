import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-family: ${({ theme }) => theme.fonts.header};
  ${() => AutoLink}
  margin-top: 50px;
`;

export const H3 = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
