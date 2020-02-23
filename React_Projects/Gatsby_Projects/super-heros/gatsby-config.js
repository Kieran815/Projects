module.exports = {
  siteMetadata: {
    title: `Meta-Data`,
    description: `A Super Hero Seach Engine: Pull and View Meta-Data on Meta-Humans, Super Heros and Villians, and Characters from the Multi-Verse`,
    author: `K. Michael Milligan`,
  },
  proxy: {
    prefix: "/api",
    url: "https://superheroapi.com/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#36454f`,
        theme_color: `#36454f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
