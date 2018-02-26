// todo: fix, doesnt work :(
export const offlineGraphQLquery = id =>
  `
    query OfflineQuery${id} {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;
