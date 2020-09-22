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
        name: `blog`,
        path: `${__dirname}/content/blogs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'project'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Archivo`,
            variants: ['600', '700']
          },
          {
            family: `Bitter`,
            variants: ['400', '700']
          },
          {
            family: `Archivo Black`,
          },
        ],
      },
    }
  ],
}
