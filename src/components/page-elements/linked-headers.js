import { css } from 'styled-components';

export const AutoLink = css`
  a {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    a {
      svg {
        visibility: visible;
      }
    }
  }
`;
