/** @jsx jsx */
import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import BackImg from 'gatsby-background-image'
import { useSpring, animated, config } from 'react-spring'
import Layout from '../components/layout'

const productselector = props => {
  const [activeFrame, setActiveFrame] = useState(`frame1`)

  const data = useStaticQuery(graphql`
    query ProductSelectorQuery {
      allMdx(
        sort: { fields: frontmatter___order }
        filter: { fileAbsolutePath: { regex: "/productselector/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              order
            }
          }
        }
      }
    }
  `)

  let outputFrames = data.allMdx.edges.map((product, index) => {
    let indexNum = index + 1
    return (
      <div
        onClick={() => setActiveFrame(`frame${indexNum}`)}
        key={`${product}${index}`}
        sx={{
          position: `relative`,
          height: `400px`,
          width: activeFrame === `frame${indexNum}` ? `40%` : `20%`,
          filter:
            activeFrame === `frame${indexNum}`
              ? `brightness(1)`
              : `brightness(50%)`,
          display: `inline-block`,
          boxSizing: `border-box`,
        }}
        css={css`
          transition: transform 0.8s ease-in-out, width 0.5s, filter 0.5s;
        `}
      >
        <BackImg
          fluid={product.node.frontmatter.image.childImageSharp.fluid}
          sx={{
            height: `100%`,
            width: `100%`,
          }}
        >
          <div
            sx={{
              width: `100%`,
              height: `100%`,
              display: `grid`,
              justifyItems: `center`,
              alignItems: `center`,
            }}
          >
            <p
              sx={{
                fontFamily: `heading`,
                fontSize: 5,
                margin: 0,
                padding: 0,
                display: `inline-block`,
                transform:
                  activeFrame === `frame${indexNum}` ? null : `rotate(90deg)`,
              }}
            >
              {product.node.frontmatter.title}
            </p>
          </div>
        </BackImg>
      </div>
    )
  })

  return (
    <div
      sx={
        {
          // gridTemplateColumns: `${frame1} ${frame2} ${frame3} ${frame4}`,
        }
      }
    >
      {outputFrames}
    </div>
  )
}

export default productselector
