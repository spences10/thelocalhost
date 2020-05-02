import React from 'react'
import styled from 'styled-components'

export const StyledTable = styled.table`
  margin-top: ${({ theme }) => theme.spacing[10]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: 100%;
  thead {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    background-color: var(
      --colour-secondary,
      ${({ theme }) => theme.colours.grey[300]}
    );
    border: 1px solid ${({ theme }) => theme.colours.grey[500]};
  }
  th,
  td {
    border: 1px solid
      var(
        --colour-on-secondary,
        ${({ theme }) => theme.colours.grey[400]}
      );
  }
  th,
  td {
    padding-left: ${({ theme }) => theme.spacing[2]};
    padding-right: ${({ theme }) => theme.spacing[3]};
    padding-top: ${({ theme }) => theme.spacing[2]};
    padding-bottom: ${({ theme }) => theme.spacing[1]};
    text-align: left;
  }
  th,
  td {
    &:hover {
      background-color: var(
        --colour-on-secondary,
        ${({ theme }) => theme.colours.grey[400]}
      );
    }
  }
`

export const Table = props => {
  return <StyledTable {...props}>{props.children}</StyledTable>
}
