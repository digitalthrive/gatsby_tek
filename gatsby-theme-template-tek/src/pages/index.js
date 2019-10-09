/** @jsx jsx */
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import BackImg from 'gatsby-background-image'
import { Container } from 'theme-ui'
import Img from 'gatsby-image'
import HomeScroller from '../components/homescroller'
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
        <Section
          sideline={sectionTwo[0].node.sidetext}
          key={sectionTwo[0].node.id}
          leftside={true}
        >
          <div
            sx={{
              display: ['block', 'block', 'grid'],
              gridTemplateColumns: `1fr 1fr`,
              margin: `0 auto`,
            }}
          >
            <div sx={{ padding: [0, 0, 4] }}>
              <div sx={{ width: `100%` }}>å</div>
              <Styled.p>{sectionTwo[0].node.text3}</Styled.p>
            </div>
            <div
              sx={{
                paddingTop: [0, 0, 0],
                paddingLeft: [0, 0, 4],
                paddingRight: [0, 0, 4],
                marginTop: [0, 0, 0],
              }}
            >
              <Styled.h3
                sx={{
                  fontSize: [0, 0, 1],
                  paddingBottom: [0, 0, 4],
                }}
              >
                {sectionTwo[0].node.text}
              </Styled.h3>

              <Link to="/products">
                <Styled.p sx={{ color: `accent`, marginTop: 4 }}>
                  {sectionTwo[0].node.buttonText}
                </Styled.p>
              </Link>
            </div>
          </div>
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
          sidetext
          buttonText
          image {
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
