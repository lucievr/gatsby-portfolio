const path = require("path")
require("dotenv").config({
  path: `.env`,
})
const { githubApiQuery } = require('./github-api')

module.exports = {
  siteMetadata: {
    title: `Lucie Vrsovska - portfolio`,
    description: `Web developer portfolio of Lucie Vrsovska, a fullstack developer based in Prague, Czech Republic.`,
    author: `Lucie Vrsovska`,
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
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@images": path.resolve(__dirname, "src/images"),
          "@sections": path.resolve(__dirname, "src/sections"),
          "@pages": path.resolve(__dirname, "src/pages"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_KEY,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        siteSpeedSampleRate: 100,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql",
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: githubApiQuery,
        variables: {
          github_login: process.env.GITHUB_LOGIN
        }
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-svgr",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
        ],
      },
    },
    // this optional plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: "gatsby-plugin-offline",
      options: {
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated, same RegExp and same reason as above
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lucie.dev`,
        short_name: `lucie.dev`,
        start_url: `/`,
        background_color: `#dee9ed`,
        theme_color: `#5556c8`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          "Link: </icons/icon-48x48.png>; rel=preload; as=image",
          "Link: </icons/icon-72x72.png>; rel=preload; as=image",
          "Link: </icons/icon-96x96.png>; rel=preload; as=image",
          "Link: </icons/icon-144x144.png>; rel=preload; as=image",
        ],
        headers: {
          "/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
          "/*.html": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/public/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
          "/*.js": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
          "/*.css": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
          "/sw.js": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
        },
      },
    },
  ],
}
