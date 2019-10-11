/** @jsx jsx */
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import Section from '../components/section'

const gallerypreview = props => {
  let data = useStaticQuery(graphql`
    query FullGalleryComponentQuery {
      gallery1: allFile(
        filter: { relativeDirectory: { regex: "/images/gallery/gallery1/" } }
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
        sx={{ height: `100%`, width: `100%` }}
        fluid={image.node.childImageSharp.fluid}
      />
    )
  })
  let gallery2images = data.gallery2.edges.map(image => {
    return (
      <Img
        sx={{ height: `100%`, width: `100%` }}
        fluid={image.node.childImageSharp.fluid}
      />
    )
  })
  return (
    <Section sx={{ position: `relative`, top: `-400px` }}>
      <Styled.h2 sx={{ color: `text` }}>{props.toptext}</Styled.h2>
      <Styled.h2 sx={{ color: `primary` }}>{props.subtext}</Styled.h2>
      <Styled.h2 sx={{ color: `primary` }}>{props.header1}</Styled.h2>
      <div
        sx={{
          display: `grid`,
          height: `100%`,
          width: `100%`,
          gridTemplateColumns: `1fr 1fr 1fr`,
          gridGap: `20px`,
        }}
      >
        {gallery1images}
      </div>
      <Styled.h2 sx={{ color: `primary` }}>{props.header2}</Styled.h2>
      <div
        sx={{
          display: `grid`,
          height: `100%`,
          width: `100%`,
          gridTemplateColumns: `1fr 1fr 1fr`,
          gridGap: `20px`,
        }}
      >
        {gallery2images}
      </div>
    </Section>
  )
}

export default gallerypreview
