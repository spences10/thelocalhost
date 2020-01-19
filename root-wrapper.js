import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Code } from './src/components/page-elements/code'
import { GlobalStyle, theme } from './src/theme/global-style'

const components = {
  h1: ({ children }) => <h2 style={{ color: 'red' }}>{children}</h2>,
  'p.inlineCode': props => (
    <code {...props} style={{ backgroundColor: 'lightgrey' }}></code>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className &&
            props.className.replace('language-', '')
          }
          {...props}
        />
      )
    }
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
)
