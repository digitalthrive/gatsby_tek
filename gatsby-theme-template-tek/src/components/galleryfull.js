/** @jsx jsx */
import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { cold } from 'react-hot-loader'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import ImageModal from '../components/gallery_modal'
import Section from '../components/section'

const galleryfull = cold(props => {
  const [open, setOpen] = useState(false)
  const [openimage, setImage] = useState(null)

  let imageClick = image => {
    setOpen(!open)
    setImage(image)
  }

  let data = useStaticQuery(graphql`
    query FullGalleryComponentQuery {
      gallery1: allFile(
        filter: { relativeDirectory: { regex: "/images/gallery/gallery1/" } }
        sort: { fields: childImageSharp___original___src }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
              fixed(width: 400, height: 300) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
      gallery2: allFile(
        filter: { relativeDirectory: { regex: "/images/gallery/gallery2/" } }
        sort: { fields: childImageSharp___original___src }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
              fixed(width: 400, height: 300) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)

  let gallery1images = data.gallery1.edges.map(image => {
    return (
      <div onClick={() => imageClick(image.node.childImageSharp.fluid)}>
        <Img
          sx={{ height: `100%`, width: `100%` }}
          fluid={image.node.childImageSharp.fluid}
        />
      </div>
    )
  })
  let gallery2images = data.gallery2.edges.map(image => {
    return (
      <div onClick={() => imageClick(image.node.childImageSharp.fluid)}>
        <Img
          sx={{ height: `100%`, width: `100%` }}
          fluid={image.node.childImageSharp.fluid}
        />
      </div>
    )
  })
  return (
    <Section>
      {openimage ? <ImageModal image={openimage} open={imageClick} /> : null}

      <Styled.h1 sx={{ color: `text`, marginBottom: 1, paddingBottom: 1 }}>
        {props.toptext}
      </Styled.h1>
      {/* <Styled.h2
        sx={{
          color: `primary`,
          marginTop: `0`,
          ':after': {
            display: `none`,
          },
        }}
      >
        {props.subtext}
      </Styled.h2> */}
      <Styled.h2 sx={{ color: `primary`, fontSize: ['3', '3', '4', '6', '6'] }}>
        {props.header1}
      </Styled.h2>
      <div
        sx={{
          display: `grid`,
          height: `100%`,
          width: `100%`,
          gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
          gridGap: `20px`,
        }}
      >
        {gallery1images}
      </div>
      <Styled.h2 sx={{ color: `primary`, fontSize: ['3', '3', '4', '6', '6'] }}>
        {props.header2}
      </Styled.h2>
      <div
        sx={{
          display: `grid`,
          height: `100%`,
          width: `100%`,
          gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
          gridAutoRows: `240px`,
          gridGap: `20px`,
        }}
      >
        {gallery2images}
      </div>
    </Section>
  )
})

export default galleryfull
