import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.font.serif};
  ${() => AutoLink};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`;

export const H1 = props => {
  return (
    <StyledText {...props} id={props.id}>
      {props.children}
    </StyledText>
  );
};
