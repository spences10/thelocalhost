import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import moon from '../../static/moon.svg'
import sun from '../../static/sun.svg'
import { useLocalStorage } from '../hooks/use-local-storage'
import { Link } from './shared'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const HeaderWrapper = styled.header`
  position: relative;
  h1 {
    font-family: ${({ theme }) => theme.font.monospace};
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin-top: ${({ theme }) => theme.spacing[2]};
    padding-bottom: ${({ theme }) => theme.spacing[1]};
    line-height: ${({ theme }) => theme.lineHeight.none};
    background: linear-gradient(
      ${({ theme }) => theme.colours.primary[200]},
      ${({ theme }) => theme.colours.primary[500]}
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-top: ${({ theme }) => theme.spacing[0]};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    color: var(--color-on-background);
  }
  button {
    background: none;
    border: none;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    img {
      width: 20px;
    }
    border-radius: ${({ theme }) => theme.borderRadius.full};
    outline: none;
    &:active {
      box-shadow: ${({ theme }) => theme.boxShadow.outline};
    }
  }
`

export const Header = ({ siteTitle, siteDescription }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <HeaderWrapper>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>
      <StyledLink to="/">
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>
      </StyledLink>
      <button
        onClick={() =>
          setTheme(currentValue =>
            currentValue === 'light' ? 'dark' : 'light'
          )
        }
      >
        <img src={theme === 'dark' ? sun : moon} alt="toggle theme" />
      </button>
    </HeaderWrapper>
  )
}
