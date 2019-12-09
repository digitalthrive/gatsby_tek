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
      <div
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
          onClick={() => imageClick(image.node.childImageSharp.fluid)}
          sx={{
            height: `100%`,
            width: `100%`,
            position: `absolute`,
            top: `0`,
            left: `0`,
          }}
        >
          <Img
            sx={{
              height: `100%`,
              width: `100%`,
              maxWidth: `100%`,
              display: `block`,
            }}
            fixed={image.node.childImageSharp.fixed}
          />
        </div>
      </div>
    )
  })
  let gallery2images = data.gallery2.edges.map(image => {
    return (
      <div
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
          onClick={() => imageClick(image.node.childImageSharp.fluid)}
          sx={{
            height: `100%`,
            width: `100%`,
            position: `absolute`,
            top: `0`,
            left: `0`,
          }}
        >
          <Img
            sx={{
              height: `100%`,
              width: `100%`,
              maxWidth: `100%`,
              display: `block`,
            }}
            fixed={image.node.childImageSharp.fixed}
          />
        </div>
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
          display: `flex`,
          flexWrap: `wrap`,
          height: `100%`,
          width: `100%`,
          marginBottom: `10%`,
        }}
      >
        {gallery1images}
      </div>
      <Styled.h2 sx={{ color: `primary`, fontSize: ['3', '3', '4', '6', '6'] }}>
        {props.header2}
      </Styled.h2>
      <div
        sx={{
          display: `flex`,
          flexWrap: `wrap`,
          height: `100%`,
          width: `100%`,
          marginBottom: `10%`,
        }}
      >
        {gallery2images}
      </div>
    </Section>
  )
})

export default galleryfull
