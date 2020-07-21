import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

export default (props) => (
  <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              twitterUser
              authors
              description
              keywords
              featuredImageURL
              googleAppName
              googleAppId
              googleAppURL
              siteUrl
            }
          }
        }
    `}
      render={function(data){
        const meta = data.site.siteMetadata;

        return (
          <Helmet
            title={ meta.title}
          >
            <meta name="keywords"           content={meta.keywords} />
            <meta name="description"        content={meta.description} />
            <meta name="authors"            content={meta.authors} />
            <meta name="twitter:card"       content={"app"} />
            <meta name="twitter:site"       content={meta.siteUrl} />
            <meta name="twitter:creator"    content={meta.twitterUser} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:title"      content={meta.title} />

            {meta.googleAppName &&  <meta name="twitter:app:name:googleplay"  content={meta.googleAppName} /> }
            {meta.googleAppId &&    <meta name="twitter:app:id:googleplay"    content={meta.googleAppId} /> }
            {meta.googleAppURL &&   <meta name="twitter:app:url:googleplay"   content={meta.googleAppURL} /> }

            <meta property="og:site_name"   content={meta.title} />
            <meta property="og:url"         content={meta.siteUrl} />
            <meta property="og:title"       content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image"       content={meta.featuredImageURL} />
            <meta property="og:image:secure_url" content={meta.featuredImageURL} />

            <html lang="en" />
          </Helmet>
        )}}
    />
  )
