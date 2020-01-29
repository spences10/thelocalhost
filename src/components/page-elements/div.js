import React from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  iframe {
    display: none;
  }
`;

export const Div = (props, { children }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};
