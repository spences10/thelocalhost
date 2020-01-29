import React from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  iframe {
    position: relative;
  }
`;

export const Div = (props, { children }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};
