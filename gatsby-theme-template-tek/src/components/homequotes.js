/** @jsx jsx */
import React from 'react'
import Swiper from 'react-id-swiper'
import { graphql, useStaticQuery } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

const homecarousel = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allMdx(filter: { fileAbsolutePath: { regex: "/hometestimonial/" } }) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                quote
                name
                descriptor
                order
              }
            }
          }
        }
      }
    `
  )

  let quotes = data.allMdx.edges.map(quote => {
    return (
      <div sx={{ height: `80%` }}>
        <Styled.h3
          sx={{ fontFamily: 'body', color: 'text', position: `relative` }}
        >
          <div
            sx={{
              position: `relative`,
              ':before': {
                content: `open-quote`,
                fontFamily: `heading`,
                color: 'primary',
                display: `block`,
                position: `absolute`,
                left: `-20px`,
                top: `-20px`,
                fontSize: '8',
              },
              ':after': {
                content: `close-quote`,
                fontFamily: `heading`,
                color: 'primary',
                display: `block`,
                position: `absolute`,
                right: `-20px`,
                bottom: `-20px`,
                fontSize: '8',
              },
            }}
          >
            {quote.node.frontmatter.quote}
          </div>
        </Styled.h3>
        <Styled.h3
          sx={{ fontFamily: 'body', padding: `0`, margin: `0`, color: 'text' }}
        >
          {quote.node.frontmatter.name}
        </Styled.h3>
        <Styled.h3
          sx={{ fontFamily: 'body', padding: `0`, margin: `0`, color: 'text' }}
        >
          {quote.node.frontmatter.descriptor}
        </Styled.h3>
      </div>
    )
  })

  const params = {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: true,
  }

  return <Swiper {...params}>{quotes}</Swiper>
}

export default homecarousel
