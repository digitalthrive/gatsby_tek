/** @jsx jsx */
import React, { useState } from 'react'
import { Styled, jsx } from 'theme-ui'
import BackImg from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Section from '../components/section'
import Button from '../components/button'

const menubar = () => {
  const [slide, setSlide] = useState(0)

  let slideHandler = index => {
    setSlide(index)
  }
  const data = useStaticQuery(graphql`
    query HomeScrollerQuery {
      allMdx(sort: { fields: frontmatter___order }) {
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
              header
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
            }}
          >
            <div
              sx={{
                height: `fit-content`,
                padding: [0, 0, 5],
              }}
            >
              <Styled.h1
                sx={{
                  margin: '0 auto',
                  paddingTop: [5, 4, 3],
                  paddingBottom: [4, 4, 3],
                  textAlign: `center`,
                  fontSize: [2, 2, 2],
                }}
              >
                {node.node.frontmatter.header}
              </Styled.h1>
              <Styled.h3
                sx={{
                  margin: '0 auto',
                  textAlign: `center`,
                  fontSize: [0, 0, 1],
                  color: 'text',
                }}
              >
                {node.node.frontmatter.detail}
              </Styled.h3>
              <Button destination="/" buttonText="MORE" />
            </div>
          </div>
        </BackImg>
      </div>
    )
  })

  let selectors = data.allMdx.edges.map((node, index) => {
    return (
      <div onClick={() => slideHandler(index)}>
        <Styled.h2>{node.node.frontmatter.name}</Styled.h2>
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
            gridTemplateColumns: `33% 33% 33%`,
          }}
        >
          {selectors}
        </div>
      </Section>
    </>
  )
}

export default menubar
