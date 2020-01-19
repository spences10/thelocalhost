import React from 'react';
import styled from 'styled-components';

export const StyledSmall = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Small = props => {
  return <StyledSmall {...props}>{props.children}</StyledSmall>;
};
