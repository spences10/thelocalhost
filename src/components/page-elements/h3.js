import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h3`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-family: ${({ theme }) => theme.font.serif};
  ${() => AutoLink}
`;

export const H3 = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
