/** @jsx jsx */
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const gallerypreview = () => {
  let data = useStaticQuery(graphql`
    query GalleryComponentQuery {
      gallery1: allFile(
        filter: { relativeDirectory: { regex: "/images/gallery/gallery1/" } }
        limit: 3
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
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
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  let gallery1images = data.gallery1.edges.map(image => {
    return (
      <Img
        sx={{ height: ["185px", "185px", "185px", "230px", "230px"], width: ["185px", "185px", "185px", "230px", "230px"], margin: ["8px auto", "8px auto", "8px auto", "8px", "8px"] }}
        fluid={image.node.childImageSharp.fluid}
      />
    )
  })
  let gallery2images = data.gallery2.edges.map(image => {
    return (
      <Img
        sx={{ height: ["185px", "185px", "185px", "230px", "230px"], width: ["185px", "185px", "185px", "230px", "230px"], margin: ["8px auto", "8px auto", "8px auto", "8px", "8px"] }}
        fluid={image.node.childImageSharp.fluid}
      />
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
}

export default gallerypreview
