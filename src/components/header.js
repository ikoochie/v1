import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation()

  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           defaultTitle: title
  //           defaultDescription: description
  //           siteUrl
  //           defaultImage: image
  //           twitterUsername
  //         }
  //       }
  //     }
  //   `
  // )

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    // defaultImage,
    // twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <html lang="en" />

      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {/* <meta property="og:image" content={seo.image} /> */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={twitterUsername} /> */}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}

      <meta
        name="google-site-verification"
        content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"
      />
    </Helmet>
  )
}

export default Head

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
}
