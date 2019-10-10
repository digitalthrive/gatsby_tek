/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Styled, jsx, Container, Footer } from 'theme-ui'
import Img from 'gatsby-image'

const footer = () => {
  // const data = useStaticQuery(graphql`
  //   query FooterQuery {
  //     allSection(filter: { page: { eq: "footer" } }) {
  //       edges {
  //         node {
  //           id
  //           links {
  //             link
  //             linktext
  //           }
  //           sociallinks {
  //             facebook
  //             insta
  //             linkedin
  //             twitter
  //           }
  //         }
  //       }
  //     }
  //     file(relativePath: { regex: "images/icon*/" }) {
  //       id
  //       childImageSharp {
  //         fluid(maxHeight: 100, quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  // let links = data.allSection.edges[0].node.links.map(link => {
  //   return (
  //     <Link to={link.link}>
  //       <Styled.li sx={{ color: `accent` }}>{link.linktext}</Styled.li>
  //     </Link>
  //   )
  // })

  // let sociallinks = data.allSection.edges[0].node.sociallinks

  return (
    <Footer>
      <div
        sx={{ minHeight: `300px`, width: `100%`, backgroundColor: `darkGrey` }}
      >
        <Styled.h3>Footer Placeholder</Styled.h3>
      </div>
    </Footer>
  )
}

export default footer
