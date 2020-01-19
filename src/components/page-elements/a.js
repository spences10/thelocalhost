import React from 'react';
import styled from 'styled-components';

export const StyledA = styled.a`
  color: ${({ theme }) => theme.colours.grey[900]};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colours.grey[900]};
  &:hover {
    opacity: 0.5;
  }
`;

export const A = props => {
  return <StyledA {...props}>{props.children}</StyledA>;
};
