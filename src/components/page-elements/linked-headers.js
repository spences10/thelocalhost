export const AutoLink = `
  a {
    float: left;
    padding-right: 4px;
    margin-left: -30px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    svg {
      visibility: visible;
      height: 20px;
      width: 20px;
      fill: var(--color-on-background);
    }
  }
`
