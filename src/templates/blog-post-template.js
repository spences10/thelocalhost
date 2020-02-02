import { MdxEmbedProvider } from '@pauliescanlon/gatsby-mdx-embed';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import { Layout } from '../components/layout';
import { H1 } from '../components/page-elements';
import {
  PostDate,
  PostEditOnGitHub,
  PostInfo,
  PostTimeToRead,
} from '../components/shared';
import { useSiteMetadata } from '../hooks/use-site-metadata';

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
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
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
