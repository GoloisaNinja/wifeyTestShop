require(`dotenv`).config({ path: `.env` });
module.exports = {
  siteMetadata: {
    title: `Wifey Shopify`,
    description: `Test Concept for Wifey Shopify Shop`,
    author: `@goloisaninja`,
    siteUrl: `https://jcodes.page`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-optional-chaining`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "inter:200, 200i, 400, 400i, 700, 700i, 800, 800i, 900, 900i",
          "abril fatface:400",
        ],
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.GATSBY_SHOPIFY_PASSWORD,
        storeUrl: process.env.GATSBY_SHOP_URL,
        shopifyConnections: ["orders", "collections"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/images/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
