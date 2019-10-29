/** @jsx jsx */
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import BackImg from 'gatsby-background-image'
import { Container } from 'theme-ui'
import Img from 'gatsby-image'
import HomeScroller from '../components/homescroller'
import GalleryPreview from '../components/gallerypreview'
import Layout from '../components/layout'
import Section from '../components/section'
import Button from '../components/button'

const homepage = ({ data }) => {
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
  let sectionFive = sections.filter(obj => {
    return obj.node.section === 5
  })
  let sectionSix = sections.filter(obj => {
    return obj.node.section === 6
  })
  let sectionSeven = sections.filter(obj => {
    return obj.node.section === 7
  })

  return (
    <Layout>
      <HomeScroller />
      {sectionTwo.length > 0 ? (
        <Section key={sectionTwo[0].node.id}>
          <div sx={{ textAlign: `center` }}>
            <Styled.h1
              sx={{
                margin: `auto`,
                textAlign: `center`,
                paddingBottom: 0
              }}
            >{sectionTwo[0].node.text}</Styled.h1>
            <Styled.h3 sx={{ margin: 0, padding: 0 }}>{sectionTwo[0].node.text2}</Styled.h3>
            <Styled.h3 sx={{ margin: 0, padding: 0 }}>{sectionTwo[0].node.text3}</Styled.h3>
          </div>
          <div sx={{ display: `flex` }}>
              <div sx={{ width: `50%` }}>
                <Styled.h2>{sectionTwo[0].node.text4}</Styled.h2>
              </div>
              <div sx={{ width: `50%`, alignSelf: `center` }}>
                <Img
                  sx={{ height: `200px`, width: `200px` }}
                  fluid={sectionTwo[0].node.image.childImageSharp.fluid}
                />
                <Img
                  sx={{ height: `200px`, width: `200px` }}
                  fluid={sectionTwo[0].node.image2.childImageSharp.fluid}
                />
                <p sx={{ color: `grey` }}>{sectionTwo[0].node.text5}</p>
                <Button
                  buttonText={sectionTwo[0].node.buttonText}
                  destination="/products"
                />
              </div>
          </div>
        </Section>
      ) : null}
      {sectionThree.length > 0 ? (
        <div sx={{ height: `200px`, backgroundColor: `darkgrey` }}>
          <p sx={{ display: `inline`, margin: `20px` }}>
            {sectionThree[0].node.text}
          </p>
          <p sx={{ display: `inline`, margin: `20px` }}>
            {sectionThree[0].node.text2}
          </p>
          <p sx={{ display: `inline`, margin: `20px` }}>
            {sectionThree[0].node.text3}
          </p>
          <Img
            sx={{ height: `25%`, width: `100px`, display: `inline-block` }}
            fluid={sectionThree[0].node.image.childImageSharp.fluid}
          />
        </div>
      ) : null}
      {sectionFour.length > 0 ? (
        <Section key={sectionFour[0].node.id}>
          <Styled.h2>{sectionFour[0].node.text}</Styled.h2>
          <Styled.h3>{sectionFour[0].node.text2}</Styled.h3>
          <Img
            sx={{ height: `200px`, width: `200px` }}
            fluid={sectionFour[0].node.image.childImageSharp.fluid}
          />
          <Img
            sx={{ height: `200px`, width: `200px` }}
            fluid={sectionFour[0].node.image2.childImageSharp.fluid}
          />
          <p sx={{ color: `grey` }}>{sectionTwo[0].node.text4}</p>
          <Button
            buttonText={sectionFour[0].node.buttonText}
            destination="/products"
          />
        </Section>
      ) : null}
      {sectionFive.length > 0 ? (
        <Section key={sectionFive[0].node.id}>
          <Styled.h2>{sectionFive[0].node.text}</Styled.h2>
          <Button
            buttonText={sectionFive[0].node.buttonText}
            destination="/gallery"
          />
          <GalleryPreview />
        </Section>
      ) : null}
      <div sx={{ height: `600px`, backgroundColor: `darkgrey` }}>
        <Styled.h2>Testimonial Scroller Placeholder</Styled.h2>
      </div>
      {sectionSix.length > 0 ? (
        <Section key={sectionSix[0].node.id}>
          <Styled.h2>{sectionSix[0].node.text}</Styled.h2>
          <Img
            sx={{ height: `200px`, width: `200px` }}
            fluid={sectionSix[0].node.image.childImageSharp.fluid}
          />
          <Styled.h3>{sectionSix[0].node.text2}</Styled.h3>
          <Styled.h3>{sectionSix[0].node.text3}</Styled.h3>
          <Button
            buttonText={sectionSix[0].node.buttonText}
            destination="/dealers"
          />
        </Section>
      ) : null}
    </Layout>
  )
}
export const query = graphql`
  query HomePageQuery {
    allSection(filter: { page: { eq: "home" } }) {
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

export default homepage
