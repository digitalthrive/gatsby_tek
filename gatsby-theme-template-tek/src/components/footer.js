/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Styled, jsx, Container, Footer } from 'theme-ui'
import Img from 'gatsby-image'

const footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allSection(filter: { page: { eq: "footer" } }) {
        edges {
          node {
            id
            links {
              link
              linktext
            }
            sociallinks {
              facebook
              insta
              linkedin
              twitter
            }
            text
            text2
            text3
          }
        }
      }
      file(relativePath: { regex: "images/icon*/" }) {
        id
        childImageSharp {
          fluid(maxHeight: 100, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  let links = data.allSection.edges[0].node.links.map(link => {
    return (
      <Link to={link.link}>
        <Styled.li
          sx={{
            color: `text`,
            listStyleType: `none`,
            fontSize: 1,
            fontFamily: `heading`,
          }}
        >
          {link.linktext}
        </Styled.li>
      </Link>
    )
  })

  let sociallinks = data.allSection.edges[0].node.sociallinks

  return (
    <Footer>
      <div
        sx={{ minHeight: `300px`, width: `100%`, backgroundColor: `secondary` }}
      >
        <div sx={{ display: `grid`, gridTemplateColumns: `50% 1fr 1fr 1fr` }}>
          <div
            sx={{
              display: `grid`,
              gridTemplateColumns: `repeat(3, 1fr)`,
              gridTemplateRows: `70% 30%`,
            }}
          >
            <Styled.h3
              sx={{
                gridColumnStart: `1`,
                gridColumnEnd: `end`,
                fontSize: 2,
                color: `text`,
                display: `inline`,
              }}
            >
              {data.allSection.edges[0].node.text}
              <span
                sx={{
                  color: `primary`,
                  marginLeft: `0.1em`,
                  marginRight: `0.1em`,
                  fontSize: 3,
                }}
              >
                {data.allSection.edges[0].node.text2}
              </span>
              {data.allSection.edges[0].node.text3}
            </Styled.h3>
            {links}
          </div>
          <div>address ph</div>
          <div>phone ph</div>
          <div>social ph</div>
        </div>
        <div>copyright ph logo ph</div>
      </div>
    </Footer>
  )
}

export default footer
