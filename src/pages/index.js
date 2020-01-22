import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { H1, P } from '../components/page-elements';
import { Link } from '../components/shared';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing[8]} 0;
  padding: 0 ${({ theme }) => theme.spacing[8]};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
`;

const Image = styled(Img)`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  margin-top: ${({ theme }) => theme.spacing[8]};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={`Home`}
        titleTemplate={title}
        description={description || `nothin’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <IndexWrapper>
        {/* <Dump data={data}></Dump> */}
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            <StyledLink to={fields.slug} key={id}>
              <PostWrapper key={id}>
                {!!frontmatter.cover ? (
                  <Image
                    sizes={frontmatter.cover.childImageSharp.sizes}
                  />
                ) : null}
                <H1>{frontmatter.title}</H1>
                <P>{frontmatter.date}</P>
                <P>{excerpt}</P>
              </PostWrapper>
            </StyledLink>
          )
        )}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
