const siteTitle = "gatsby-starter-typescript-deluxe";
const siteDescription =
  "A Gatsby starter with TypeScript, Storybook, Styled Components, Framer Motion, Jest, and more.";
const siteAuthor = "@gojutin";
const siteUrl = "https://gatsby-starter-typescript-deluxe.netlify.com";
const siteImage = `${siteUrl}/icons/icon_512x512.png`;
const siteKeywords = ["gatsby", "typescript", "starter", "javascript", "react"];

// gatsby-config.js
const path = require('path')

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
        icons: [
          {
            src: "icons/icon_512x512.png",
            sizes: "512x512",

          },
          {
            src: "icons/icon_192x192.png",
            sizes: "192x192",

          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        // src: path.join(__dirname, 'src'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@components': path.join(__dirname, 'src/components'),
        '@util': path.join(__dirname, 'src/util'),
        '@store': path.join(__dirname, 'src/store'),
        '@images': path.join(__dirname, 'src/images')
      },
    },
  ],
};
