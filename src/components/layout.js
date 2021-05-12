/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withAssetPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import { Global, css } from '@emotion/react'
import Nav from './nav'
import Footer from './footer'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
      <Helmet>
            <meta charSet="utf-8" lang="en"/>
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href="https://robquin.gatsbyjs.io/" />
      </Helmet>
      <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              min-height: '100vh';
              max-width: '100vw';
            }
          `}
        />
        <Nav/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
