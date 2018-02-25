const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: "OneLedger",
    languages
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "d3fe0f9a982421b73d358bcd795db1"
      }
    },
    "gatsby-plugin-emotion"
  ],
};
