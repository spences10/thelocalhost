import React from 'react';
import styled from 'styled-components';
import 'victormono';

const StyledText = styled.code`
  padding: 0 3px;
  background-color: ${({ theme }) => theme.colours.grey[400]};
  font-family: 'Victor Mono', monospace;
  font-size: ${({ theme }) => theme.fontSize.base};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const InlineCode = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
