import React from 'react';
import styled from 'styled-components';

const StyledText = styled.blockquote`
  p {
    border-left: 5px solid ${({ theme }) => theme.colours.grey[700]};
    padding-left: 5px;
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    color: ${({ theme }) => theme.colours.grey[700]};
    margin: 20px;
    word-break: break-word;
  }
`;

export const Blockquote = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
