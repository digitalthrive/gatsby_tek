/** @jsx jsx */
import React, { useState } from 'react'
import { Styled, jsx } from 'theme-ui'
import BackImg from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Section from '../components/section'
import Button from '../components/button'
import ButtonV2 from '../components/button-v2'

const menubar = () => {
  const [slide, setSlide] = useState(0)

  let slideHandler = index => {
    setSlide(index)
  }
  const data = useStaticQuery(graphql`
    query HomeScrollerQuery {
      allMdx(
        sort: { fields: frontmatter___order }
        filter: { fileAbsolutePath: { regex: "/homescroller/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              name
              image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              tabImage {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              headerTopLine
              headerLargeWord
              headerBottomLine
              detail
              order
            }
          }
        }
      }
    }
  `)

  let slides = data.allMdx.edges.map(node => {
    return (
      <div sx={{ backgroundColor: `black` }}>
        <BackImg fluid={node.node.frontmatter.image.childImageSharp.fluid}>
          <div
            key={node.node.id}
            sx={{
              width: `100%`,
              height: `600px`,
              position: `relative`,
              ":after": {
                content: `""`,
                position: `absolute`,
                zIndex: `-1`,
                bottom: `0`,
                left: `0`,
                right: `0`,
                width: `100%`,
                height: `100%`,
                margin: `0 auto`,
                display: `block`,
                background: `-moz-linear-gradient(left,  rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)`,
                background: `-webkit-linear-gradient(left,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)`,
                background: `linear-gradient(to right,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)`
              }
            }}
          >
            <div
              sx={{
                height: `fit-content`,
                padding: [0, 0, 12],
              }}
            >
              <Styled.h1
                sx={{
                  margin: '0',
                  paddingTop: [5, 4, 3],
                  paddingBottom: 0,
                  textAlign: `left`,
                  fontSize: [4, 4, 6],
                  width: [`100%`, `100%`, `40%`],
                  color: 'background'
                }}
              >
                {node.node.frontmatter.headerTopLine}<span sx={{color: 'primary', fontSize: 10, paddingLeft: 2}}>{node.node.frontmatter.headerLargeWord}</span><span sx={{display: `block`}}>{node.node.frontmatter.headerBottomLine}</span>
              </Styled.h1>
              <Styled.h3
                sx={{
                  margin: '0',
                  textAlign: `left`,
                  fontSize: [0, 0, 2],
                  color: 'text',
                  fontFamily: `body`,
                  width: [`100%`, `100%`, `40%`]
                }}
              >
                {node.node.frontmatter.detail}
              </Styled.h3>
              <ButtonV2 destination="/" buttonText="MORE" borderColor="background" color="text" />
            </div>
          </div>
        </BackImg>
      </div>
    )
  })

  let selectors = data.allMdx.edges.map((node, index) => {
    return (
      <div onClick={() => slideHandler(index)}>
        <BackImg
          fluid={node.node.frontmatter.tabImage.childImageSharp.fluid}
          sx={{
            height: `100%`
          }}
        >
          <div
            sx={{
              position: `relative`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `flex-start`,
              height: `100%`,
              cursor: `pointer`,
              ":after": {
                content: `""`,
                position: `absolute`,
                zIndex: `-1`,
                bottom: `0`,
                left: `0`,
                right: `0`,
                width: `100%`,
                height: `100%`,
                margin: `0 auto`,
                display: `block`,
                backgroundColor: `rgba(0,0,0,0.5)`,
              }
            }}
          >
            <Styled.h2
              sx={{
                padding: `0 0 0 10%`,
                width: `50%`,
                color: 'background',
                ":after": {
                  display: `none`
                }
              }}
            >
              {node.node.frontmatter.name}
            </Styled.h2>
          </div>
        </BackImg>
      </div>
    )
  })
  return (
    <>
      {slides[slide]}
      <Section>
        <div
          sx={{
            backgroundColor: `black`,
            height: `200px`,
            display: `grid`,
            gridTemplateColumns: `33.33% 33.33% 33.33%`,
            position: 'relative',
            transform: `translate(0, -50%)`,
          }}
        >
          {selectors}
        </div>
      </Section>
    </>
  )
}

export default menubar
