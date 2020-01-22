import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { Link, StyledDate } from '../components/shared';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  color: ${({ theme }) => theme.colours.grey[900]};
  overflow: hidden;
`;

const CopyWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.serif};
  line-height: ${({ theme }) => theme.lineHeight.none};
`;

const StyledExcerpt = styled.p`
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: ${({ theme }) => theme.spacing[8]} 0;
  padding: 0 ${({ theme }) => theme.spacing[8]};
`;

const Image = styled(Img)`
  height: ${({ theme }) => theme.spacing[56]};
  object-fit: cover;
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
                <CopyWrapper>
                  <StyledTitle>{frontmatter.title}</StyledTitle>
                  <StyledDate>{frontmatter.date}</StyledDate>
                  <StyledExcerpt>{excerpt}</StyledExcerpt>
                </CopyWrapper>
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
