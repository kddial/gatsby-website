import React from 'react';
import graphql from 'graphql';
import Layout from './index';
import { addLocaleData } from 'react-intl';

import MessagesProvider from '../data/messages/MessagesProvider';
import messages from '../data/messages/zh';
import zh from 'react-intl/locale-data/zh';
import 'intl/locale-data/jsonp/zh';

addLocaleData(zh);

export default props => <MessagesProvider messages={messages}><Layout {...props} i18nMessages={messages} /></MessagesProvider>;

export const pageQuery = graphql`
  query LayoutZh {
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
