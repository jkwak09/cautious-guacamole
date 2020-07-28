/*
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* site config here */
  siteMetadata: {
    title: `Cautious Guacamole`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
