import React from 'react';
import graphql from 'graphql';
import { FormattedMessage } from 'react-intl';

const IndexPage = ({ data }) => {
  const header =
    data && data.datoCmsHomePage && data.datoCmsHomePage.header
      ? data.datoCmsHomePage.header
      : '';

  return (
    <div>
      <h1>
        <FormattedMessage id="s1_header" />
      </h1>
      <p>Welcome to your new Gatsby site.</p>
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
