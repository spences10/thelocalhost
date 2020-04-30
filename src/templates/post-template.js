import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from 'react-seo-component'
import ReactTooltip from 'react-tooltip'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { A, Br, H1 } from '../components/page-elements'
import {
  CustomScroll,
  Link as GatsbyLink,
  PostEditOnGitHub,
  PostInfo,
  PostTimeToRead,
} from '../components/shared'
import { useAnalytics } from '../contexts/event-tracking'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const PostNavigationWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing[12]} -${({ theme }) => theme.spacing[8]};
  display: grid;
  grid-template-areas:
    'prev'
    'next';
  ${down('sm')} {
    grid-template-areas:
      'prev'
      'next';
    margin: ${({ theme }) => theme.spacing[0]};
  }
`

const PrevNextWrapper = styled.div`
  display: grid;
  justify-items: ${props => props.justify};
  margin-top: ${({ theme }) => theme.spacing[2]};
`

const Link = styled(GatsbyLink)`
  text-decoration: underline;
  color: var(--color-on-background);
  text-decoration-color: var(--color-on-background);
  &:hover {
    opacity: 0.5;
  }
`

const Toc = styled.aside`
  position: fixed;
  left: calc(50% + 400px);
  top: 80px;
  max-height: 50vh;
  width: 310px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow-xl);
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: ${({ theme }) => theme.fontSize.sm};
  a {
    color: var(--color-on-background);
  }
  ${down('sm')} {
    display: none;
  }
  h3 {
    margin: 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.font.serif};
  }
  ul {
    overflow: hidden;
    overflow-y: auto;
    margin: ${({ theme }) => theme.spacing[3]};
    ${CustomScroll}
    &::-webkit-scrollbar {
      width: 11px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 14px;
    }
  }
  li {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    margin-right: ${({ theme }) => theme.spacing[4]};
  }
  a {
    text-decoration: none;
  }
`

const buildURL = (url, obj) => {
  const query = Object.entries(obj)
    .map(pair => pair.map(encodeURIComponent).join('='))
    .join('&')

  return `${url}?${query}`
}

export default ({ data, pageContext }) => {
  const {
    title: siteTitle,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata()
  const {
    frontmatter,
    body,
    fields: { slug, editLink },
    excerpt,
    tableOfContents,
    timeToRead,
  } = data.mdx
  const { title, date } = frontmatter
  const { previous, next } = pageContext
  const fa = useAnalytics()

  const ogImageUrl = buildURL('https://image-og.now.sh/og.jpg', {
    author: authorName,
    website: 'thelocalhost.io',
    title: title.length > 55 ? `${title.substring(0, 55)}...` : title,
    image: 'https://scottspence.me/favicon.png',
  })

  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        image={`${siteUrl}${image}`}
        pathname={`${siteUrl}${slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Helmet encodeSpecialCharacters={false}>
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:image:src" content={ogImageUrl} />
      </Helmet>
      <H1>{frontmatter.title}</H1>
      <PostInfo>
        <PostTimeToRead>
          {timeToRead * 2} minutes to read
        </PostTimeToRead>
        <PostEditOnGitHub>
          <a
            onClick={() => {
              fa('MRMZX5TM')
            }}
            href={editLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit on GitHub
          </a>
        </PostEditOnGitHub>
      </PostInfo>
      <article>
        <Br />
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      {typeof tableOfContents.items === 'undefined' ? null : (
        <Toc>
          <h3>Table of contents</h3>
          <ul>
            {tableOfContents.items.map(i => (
              <li key={i.url}>
                <A href={i.url} key={i.url}>
                  {i.title}
                </A>
              </li>
            ))}
          </ul>
        </Toc>
      )}
      <ReactTooltip />
      <PostNavigationWrapper>
        <PrevNextWrapper justify={'start'}>
          {previous === false ? null : (
            <>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  aria-label="View previous page"
                  data-tip={`${previous.excerpt.substring(
                    0,
                    180
                  )}...`}
                >
                  ← {previous.frontmatter.title.substring(0, 80)}...
                </Link>
              )}
            </>
          )}
        </PrevNextWrapper>
        <PrevNextWrapper justify={'end'}>
          {next === false ? null : (
            <>
              {next && (
                <Link
                  to={next.fields.slug}
                  aria-label="View next page"
                  data-tip={`${next.excerpt.substring(0, 180)}...`}
                >
                  {next.frontmatter.title.substring(0, 50)}... →
                </Link>
              )}
            </>
          )}
        </PrevNextWrapper>
      </PostNavigationWrapper>
    </>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
      excerpt
      tableOfContents
      timeToRead
      fields {
        slug
        editLink
      }
    }
  }
`
