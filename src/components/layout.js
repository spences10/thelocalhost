import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Header } from './header';

const AppStyles = styled.main`
  max-width: 680px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};
