import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import moon from '../../static/moon.svg'
import sun from '../../static/sun.svg'
import { useLocalStorage } from '../hooks/use-local-storage'
import { Link } from './shared'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${({ theme }) => theme.colours.primary[500]};
  }
`

// For the gradient thing, check
// https://github.com/fkhadra/react-toastify-doc/blob/e09ea2aabc/src/components/Actions.styles.ts
// https://github.com/ChristopherBiscardi/christopherbiscardi.github.com/blob/pure-mdx/packages/www/src/components/convertkit-form/index.js#L17
// https://github.com/ChristopherBiscardi/christopherbiscardi.github.com/blob/1fb406eafae449124f47179b08b2e2b2e4aa5dc6/packages/www/src/page-wrapper.js#L418

//  Examples: https://codesandbox.io/s/muddy-sun-gp0el?file=/src/App.js:105-504

const thingAnim = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`

const HeaderWrapper = styled.header`
  position: relative;
  h1 {
    font-family: ${({ theme }) => theme.font.monospace};
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin-top: ${({ theme }) => theme.spacing[2]};
    padding-bottom: ${({ theme }) => theme.spacing[1]};
    padding-right: ${({ theme }) => theme.spacing[16]};
    line-height: ${({ theme }) => theme.lineHeight.none};
    background: linear-gradient(
      var(
        --title-gradient-from,
        ${({ theme }) => theme.colours.primary[200]}
      ),
      var(
        --title-gradient-to,
        ${({ theme }) => theme.colours.primary[500]}
      )
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
    color: var(
      --colour-on-background,
      ${({ theme }) => theme.colours.grey[900]}
    );
    background: linear-gradient(
        90deg,
        var(--rainbow-one, #9349f0),
        var(--rainbow-two, #8f6f14),
        var(--rainbow-three, #da0498),
        var(--rainbow-four, #b05d2e),
        var(--rainbow-five, #864bfe),
        var(--rainbow-six, #cc4438),
        var(--rainbow-one, #a269ee)
      )
      0% 0% / 400%;
    animation: ${thingAnim} 180s ease-in-out infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover {
      animation: ${thingAnim} 50s ease-in-out infinite;
    }
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
