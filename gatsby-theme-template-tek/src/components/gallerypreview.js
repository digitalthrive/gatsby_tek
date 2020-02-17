/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { cold } from 'react-hot-loader'
import { jsx } from 'theme-ui'

import Img from 'gatsby-image'

const gallerypreview = cold(() => {
  let data = useStaticQuery(graphql`
    query GalleryComponentQuery {
      gallery1: allFile(
        filter: { relativeDirectory: { regex: "/images/gallery/gallery1/" } }
        limit: 3
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      gallery2: allFile(
        filter: { relativeDirectory: { regex: "/images/gallery/gallery2/" } }
        limit: 3
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  let gallery1images = data.gallery1.edges.map((image, index) => {
    return (
      <div
        key={`gal1${index}`}
        sx={{
          position: `relative`,
          boxSizing: `border-box`,
          flexBasis: [
            'calc(100% - 20px)',
            'calc(50% - 20px)',
            'calc(50% - 20px)',
            'calc(33.333% - 20px)',
            'calc(33.333% - 20px)',
          ],
          margin: `10px`,
          ':before': {
            content: '""',
            display: `block`,
            paddingTop: `100%`,
          },
        }}
      >
        <div
          sx={{
            height: `100%`,
            width: `100%`,
            position: `absolute`,
            top: `0`,
            left: `0`,
          }}
        >
          <Img
            key={`${image}${index}`}
            sx={{
              height: `100%`,
              width: `100%`,
              maxWidth: `100%`,
              display: `block`,
            }}
            fluid={image.node.childImageSharp.fluid}
          />
        </div>
      </div>
    )
  })
  let gallery2images = data.gallery2.edges.map((image, index) => {
    return (
      <div
        key={`gal2${index}`}
        sx={{
          position: `relative`,
          boxSizing: `border-box`,
          flexBasis: [
            'calc(100% - 20px)',
            'calc(50% - 20px)',
            'calc(50% - 20px)',
            'calc(33.333% - 20px)',
            'calc(33.333% - 20px)',
          ],
          margin: `10px`,
          ':before': {
            content: '""',
            display: `block`,
            paddingTop: `100%`,
          },
        }}
      >
        <div
          sx={{
            height: `100%`,
            width: `100%`,
            position: `absolute`,
            top: `0`,
            left: `0`,
          }}
        >
          <Img
            key={`${image}${index}`}
            sx={{
              height: `100%`,
              width: `100%`,
              maxWidth: `100%`,
              display: `block`,
            }}
            fluid={image.node.childImageSharp.fluid}
          />
        </div>
      </div>
    )
  })
  return (
    <div
      sx={{
        display: `flex`,
        flexWrap: `wrap`,
      }}
    >
      {gallery1images}
      {gallery2images}
    </div>
  )
})

export default gallerypreview
