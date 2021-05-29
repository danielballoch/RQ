/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql} from "gatsby"
import { Helmet } from "react-helmet"
import { Global, css } from '@emotion/react'
import Nav from './nav'
import Footer from './footer'


const Layout = ({ children, pageLocation}) => {
    console.log("layout props", pageLocation)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <div>
      <Helmet htmlAttributes={{lang: 'en'}}>
            <meta charSet="utf-8" lang="en"/>
            <meta name="description" content={data.site.siteMetadata.description}/>
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
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
        <Nav pageLocation={pageLocation}/>
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
