import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'react-emotion';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import Header from '../components/Header/Header';
import colors from '../utils/colors';

// Global styles
import normalize from 'normalize.css';
injectGlobal`
  * {
      font-family: -apple-system, BlinkMacSystemFont,
             'avenir next', avenir,
             'helvetica neue', helvetica,
             ubuntu,
             roboto, noto,
             'segoe ui', arial,
             sans-serif;
      box-sizing: border-box;
  };
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
  };
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.secondary.light}
  };
  p {
    color: ${colors.font.dark}
  }
`;

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div>
        <Helmet
          title="OneLedger"
          meta={[
            { name: 'description', content: 'OneLedger' },
            { name: 'keywords', content: 'blockchain, ledger' },
          ]}
        />
        <Header langs={langsMenu} />
        <div>{children()}</div>
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
