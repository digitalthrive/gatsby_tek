/** @jsx jsx */
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { cold } from 'react-hot-loader'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import Section from '../components/section'

const gallerypreview = cold(props => {
  let data = useStaticQuery(graphql`
    query FullGalleryComponentQuery {
      gallery1: allFile(
        filter: { relativeDirectory: { regex: "/images/gallery/gallery1/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(
                maxWidth: 389
                srcSetBreakpoints: [200, 400]
                quality: 100
              ) {
                ...GatsbyImageSharpFluid
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
              fluid(
                maxWidth: 389
                srcSetBreakpoints: [200, 400]
                quality: 100
              ) {
                ...GatsbyImageSharpFluid
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
            fluid={image.node.childImageSharp.fluid}
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
            fluid={image.node.childImageSharp.fluid}
          />
        </div>
      </div>
    )
  })
  return (
    <Section>
      <Styled.h1 sx={{ color: `text`, marginBottom: 1, paddingBottom: 1 }}>
        {props.toptext}
      </Styled.h1>
      <Styled.h2
        sx={{
          color: `primary`,
          marginTop: `0`,
          ':after': {
            display: `none`,
          },
        }}
      >
        {props.subtext}
      </Styled.h2>
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

export default gallerypreview
