module.exports = {
    siteMetadata: {
        title: `Rob Quin Barrister : Criminal & Traffic Lawyer Hamilton`,
        description: `Rob has been practicing as a lawyer in Hamilton since 2005.
        He specialises in criminal and traffic law. He has an excellent record of obtaining the best
        possible outcomes for clients appearing in Court on a wide range of charges.`,
        author: `thoughtfulHQ`,
        siteUrl: `https://www.robquin.co.nz`
    },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-preload-fonts",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://www.robquin.co.nz',
          sitemap: 'https://www.robquin.co.nz/sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
        }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          google: {
              families: ['Halant']
          }
        },
    },
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-TG4FRYG85B", // Google Analytics / GA
            "AW-CONVERSION_ID", // Google Ads / Adwords / AW
            "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
          ],
          // This object gets passed directly to the gtag config command
          // This config will be shared across all trackingIds
          gtagConfig: {
            optimize_id: "OPT_CONTAINER_ID",
            anonymize_ip: true,
            cookie_expires: 0,
          },
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
          },
        },
    },
      
  ],
};
