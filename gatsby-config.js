const siteTitle = "shuttlefrog";
const siteDescription = "Shuttlefrog";
const siteAuthor = "@shuttlefrog";
const siteUrl = "https://shuttlefrog.com";
const siteImage = `${siteUrl}/icons/icon_512x512.png`;
const siteKeywords = ["react"];

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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#73DFCB`,
        theme_color: `#73DFCB`,
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
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, 'src'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@components': path.join(__dirname, 'src/components'),
        '@util': path.join(__dirname, 'src/util'),
        '@store': path.join(__dirname, 'src/store'),
        '@images': path.join(__dirname, 'src/images')
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.join(__dirname, 'src/images/SVG')
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Asap`,
          `Cabin`,
          `Open Sans`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.join(__dirname, 'src/components/Layout')
      },
    }
  ],
};
