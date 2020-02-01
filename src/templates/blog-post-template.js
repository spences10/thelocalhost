import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import { Layout } from '../components/layout';
import { A, H1 } from '../components/page-elements';
import { StyledDate } from '../components/shared';
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
      <StyledDate>{frontmatter.date}</StyledDate>
      <A href={editLink} target="_blank" rel="noopener noreferrer">
        Edit on GitHub
      </A>
      <MDXRenderer>{body}</MDXRenderer>
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
      fields {
        slug
        editLink
      }
    }
  }
`;
