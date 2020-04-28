import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import moon from '../../static/moon.svg'
import sun from '../../static/sun.svg'
import { useLocalState } from '../hooks/use-local-storage'
import { Link } from './shared'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const StyledH1 = styled.h1`
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
  -webkit-text-fill-color: transparent;
`

const StyledP = styled.p`
  font-family: ${({ theme }) => theme.font.sans};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: ${({ theme }) => theme.spacing[0]};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  color: var(--color-on-background);
`

const ThemeButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  img {
    width: 20px;
  }
`

export const Header = ({ siteTitle, siteDescription }) => {
  const [theme, setTheme] = useLocalState('theme', 'light')

  return (
    <>
      <StyledLink to="/">
        <StyledH1>{siteTitle}</StyledH1>
        <StyledP>{siteDescription}</StyledP>
      </StyledLink>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>
      <ThemeButton
        onClick={() =>
          setTheme(currentValue =>
            currentValue === 'light' ? 'dark' : 'light'
          )
        }
      >
        <img
          src={theme === 'light' ? moon : sun}
          alt="toggle theme"
        />
      </ThemeButton>
    </>
  )
}
