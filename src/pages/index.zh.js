import React from 'react';
import Link from 'gatsby-link';
import graphql from 'graphql';

const IndexPage = ({ data }) => {
  const header = data.datoCmsHomePage.header;
  return (
    <div>
      <h1>{header}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/zh/page-2/">Go to page 2</Link>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexZhQuery {
    datoCmsHomePage(locale: { eq: "zh" }) {
      header
    }
  }
`;
