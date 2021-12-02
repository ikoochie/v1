import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
// import "./layout.css"

import GlobalCSS from "../styles/GlobalCSS"
import theme from "../styles/theme"
import Loader from "./loader"

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children, location }) => {
  const isHome = location.pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"))
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer")
          link.setAttribute("target", "_blank")
        }
      })
    }
  }

  useEffect(() => {
    console.log(isLoading)
    if (isLoading) {
      return
    }

    console.log(location.hash)

    if (location.hash) {
      const id = location.hash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }

    handleExternalLinks()
  }, [isLoading])

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    // <>
    //   <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    //   <div
    //     style={{
    //       margin: `0 auto`,
    //       maxWidth: 960,
    //       padding: `0 1.0875rem 1.45rem`,
    //     }}
    //   >
    //     <main>{children}</main>
    //     <footer
    //       style={{
    //         marginTop: `2rem`,
    //       }}
    //     >
    //       © {new Date().getFullYear()}, Built with
    //       {` `}
    //       <a href="https://www.gatsbyjs.com">Gatsby</a>
    //     </footer>
    //   </div>
    // </>

    <>
      <Header />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalCSS />

          {/* <a className="skip-to-content" href="#content">
            Skip to Content
          </a> */}

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledSection>Hello World {children}</StyledSection>
          )}
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
