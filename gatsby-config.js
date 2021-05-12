module.exports = {
    siteMetadata: {
        title: `Rob Quin Barrister : Criminal & Traffic Lawyer Hamilton`,
        description: `Rob has been practicing as a lawyer in Hamilton since 2005.
        He specialises in criminal and traffic law. He has an excellent record of obtaining the best
        possible outcomes for clients appearing in Court on a wide range of charges.`,
        author: `thoughtfulHQ`,
        siteUrl: "https://robquin.gatsbyjs.io/"
    },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-smoothscroll",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
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
      
  ],
};
