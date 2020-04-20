import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from './src/components/layout'
import {
  A,
  Blockquote,
  Br,
  Code,
  CodeWrapper,
  H1,
  H2,
  H3,
  H4,
  Hr,
  InlineCode,
  Li,
  P,
  Small,
  Ul,
} from './src/components/page-elements'
import { AnalyticsProvider } from './src/contexts/event-tracking'
import { GlobalStyle, theme } from './src/theme/global-style'

const components = {
  a: props => <A {...props} />,
  blockquote: props => <Blockquote {...props} />,
  br: props => <Br {...props} />,
  // div: props => <Div {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  hr: props => <Hr {...props} />,
  li: props => <Li {...props} />,
  p: props => <P {...props} />,
  'p.inlineCode': props => <InlineCode {...props} />,
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <CodeWrapper>
          <Code
            codeString={props.children.trim()}
            language={
              props.className &&
              props.className.replace('language-', '')
            }
            {...props}
          />
        </CodeWrapper>
      )
    }
  },
  small: props => <Small {...props} />,
  ul: props => <Ul {...props} />,
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapPageElement = ({ element }) => (
  <AnalyticsProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MDXProvider components={components}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ThemeProvider>
  </AnalyticsProvider>
)
