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
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Montserrat\:400,700"
        ]
      }
    }
  ],
};
