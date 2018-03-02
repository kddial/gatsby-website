import React from 'react';
import graphql from 'graphql';
import Layout from './index';
import { addLocaleData } from 'react-intl';

import MessagesProvider from '../data/messages/MessagesProvider';
import messages from '../data/messages/en';
import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';

addLocaleData(en);

export default props => <MessagesProvider messages={messages}><Layout {...props} i18nMessages={messages} /></MessagesProvider>;

export const pageQuery = graphql`
  query LayoutEn {
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
