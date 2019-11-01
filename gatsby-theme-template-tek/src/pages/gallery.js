/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackImg from 'gatsby-background-image'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Gallery from '../components/galleryfull'
import Section from '../components/section'

const gallery = ({ data }) => {
  const sections = data.allSection.edges

  let sectionOne = sections.filter(obj => {
    return obj.node.section === 1
  })
  let sectionTwo = sections.filter(obj => {
    return obj.node.section === 2
  })
  let sectionThree = sections.filter(obj => {
    return obj.node.section === 3
  })
  let sectionFour = sections.filter(obj => {
    return obj.node.section === 4
  })

  return (
    <Layout>
      <Img
        sx={{
          position: `absolute`,
          top: 0,
          left: 0,
          backgroundSize: `contain`,
          backgroundPosition: `top`,
          filter: `brightness(50%)`,
          marginTop: `100px`,
        }}
        fluid={sectionOne[0].node.image.childImageSharp.fluid}
      />
      <div
        sx={{
          height: '100vh',
          margin: 0,
          backgroundColor: `transparent`,
          position: `absolute`,
          top: 0,
          left: 0,
        }}
        css={css`
          &::after {
            content: '';
            position: absolute;
            top: -200px;
            bottom: -750px;
            left: -250px;
            width: 300vw;
            height: 200vh;
            background: white;
            transform: skew(-65deg);
          }
        `}
      ></div>
      <div
        key={sectionOne[0].node.id}
        css={css`
          margin: -800px auto 200px auto;
          width: 85vw;
        `}
      >
        <Gallery
          toptext={sectionOne[0].node.text}
          subtext={sectionOne[0].node.text2}
          header1={sectionOne[0].node.text3}
          header2={sectionOne[0].node.text4}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GalleryPageQuery {
    allSection(filter: { page: { eq: "gallery" } }) {
      edges {
        node {
          text
          text2
          text3
          text4
          text5
          buttonText
          image {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          section
        }
      }
    }
  }
`

export default gallery
