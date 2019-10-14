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

const installs = ({ data }) => {
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
      <BackImg fluid={sectionOne[0].node.image.childImageSharp.fluid}>
        <Section>
          <div
            key={sectionOne[0].node.id}
            sx={{
              width: `100%`,
              height: `800px`,
            }}
          >
            <Styled.h1>Install page here</Styled.h1>
          </div>
        </Section>
      </BackImg>
    </Layout>
  )
}

export const query = graphql`
  query InstallPageQuery {
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

export default installs
