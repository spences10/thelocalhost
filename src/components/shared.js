import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const Link = styled(props => <GatsbyLink {...props} />)``;

export const StyledDate = styled.p`
  margin-top: ${({ theme }) => theme.spacing[0]};
  color: ${({ theme }) => theme.colours.grey[700]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-transform: uppercase;
`;
