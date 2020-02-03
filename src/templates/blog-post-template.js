import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import ReactTooltip from 'react-tooltip';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { H1 } from '../components/page-elements';
import {
  PostDate,
  PostEditOnGitHub,
  PostInfo,
  PostTimeToRead,
} from '../components/shared';
import { useAnalytics } from '../contexts/event-tracking';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const PostNavigationWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing[12]} -${({ theme }) => theme.spacing[8]};
  display: grid;
  grid-template-areas: 'prev next';
  ${down('sm')} {
    grid-template-areas:
      'prev'
      'next';
    margin: ${({ theme }) => theme.spacing[4]};
  }
`;

const PrevNextWrapper = styled.div`
  display: grid;
  justify-items: ${props => props.justify};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
`;

const PrevNextButton = styled.button`
  grid-area: ${props => props.area};
  margin-right: ${({ theme }) => theme.spacing[1]};
  border: 0;
  margin: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colours.grey[100]};
  background-color: ${({ theme }) => theme.colours.primary[500]};
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;

export default ({ data, pageContext }) => {
  const {
    title: siteTitle,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();
  const {
    frontmatter,
    body,
    fields: { slug, editLink },
    excerpt,
    tableOfContents,
    timeToRead,
  } = data.mdx;
  const { title, date, cover } = frontmatter;
  const { previous, next } = pageContext;
  const fa = useAnalytics();
  return (
    <Layout>
      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        image={
          cover === null
            ? `${siteUrl}${image}`
            : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <H1>{frontmatter.title}</H1>
      <PostInfo>
        <PostDate>{frontmatter.date}</PostDate>
        <PostTimeToRead>{timeToRead} minutes to read</PostTimeToRead>
        <PostEditOnGitHub>
          <a
            onClick={() => {
              fa('MRMZX5TM');
            }}
            href={editLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit on GitHub
          </a>
        </PostEditOnGitHub>
      </PostInfo>
      <MdxEmbedProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MdxEmbedProvider>
      <ReactTooltip />
      <PostNavigationWrapper>
        <PrevNextWrapper justify={'start'}>
          {previous === false ? null : (
            <>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  aria-label="View previous page"
                >
                  <PrevNextButton
                    area={'prev'}
                    data-tip={`${previous.excerpt.substring(
                      0,
                      180
                    )}...`}
                  >
                    ← {previous.frontmatter.title.substring(0, 80)}...
                  </PrevNextButton>
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
                >
                  <PrevNextButton
                    area={'next'}
                    data-tip={`${next.excerpt.substring(0, 180)}...`}
                  >
                    {next.frontmatter.title.substring(0, 50)}... →
                  </PrevNextButton>
                </Link>
              )}
            </>
          )}
        </PrevNextWrapper>
      </PostNavigationWrapper>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
        }
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
`;
