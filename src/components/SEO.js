import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, title, pathname, useGlobalTitle }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  const titleTemplate = useGlobalTitle ? `%s | ${site.siteMetadata.title}` : `%s`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // {
        //   name: "keywords",
        //   content: site.siteMetadata.keywords,
        // },
       
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  useGlobalTitle: true
}

export default SEO