import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h4`
  font-size: ${({ theme }) => theme.fontSize['1xl']};
  font-family: ${({ theme }) => theme.font.serif};
  ${AutoLink};
  margin-top: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`;

export const H4 = props => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
