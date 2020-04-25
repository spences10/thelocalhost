import React from 'react'
import styled from 'styled-components'

export const StyledTable = styled.div`
  margin-top: ${({ theme }) => theme.spacing[10]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  font table,
  th,
  td {
    border: 1px solid ${({ theme }) => theme.colours.grey[500]};
  }
  th,
  td {
    padding-left: ${({ theme }) => theme.spacing['2']};
    padding-right: ${({ theme }) => theme.spacing['3']};
    padding-top: ${({ theme }) => theme.spacing['2']};
    padding-bottom: ${({ theme }) => theme.spacing['1']};
    text-align: left;
  }
  thead {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    background-color: ${({ theme }) => theme.colours.grey[400]};
  }
  td {
    &:hover {
      background-color: ${({ theme }) => theme.colours.grey[300]};
    }
  }
`

export const Table = props => {
  return <StyledTable {...props}>{props.children}</StyledTable>
}
