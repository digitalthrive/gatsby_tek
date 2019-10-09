/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Button from '../components/button'

const menubar = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
          }
        }
      }
      file(relativePath: { regex: "images/icon*/" }) {
        childImageSharp {
          fluid(maxHeight: 100, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div
      sx={{
        width: `100vw`,
        display: `grid`,
        gridTemplateColumns: `100px 1fr 1fr 150px`,
        zIndex: `100`,
      }}
    >
      <div sx={{ width: `75px`, position: `relative`, top: `0px` }}>
        <Img
          sx={{ width: `100%`, margin: 2 }}
          fluid={data.file.childImageSharp.fluid}
        />
      </div>
      <div>
        <p>INDUSTRIES</p>
      </div>
      <div>
        <Styled.ul>
          {data.site.siteMetadata.menuLinks.map(link => {
            return (
              <Styled.li key={link.name} sx={{ display: `inline` }}>
                <Link to={link.link} sx={{ textDecoration: `none` }}>
                  {link.name}
                </Link>
              </Styled.li>
            )
          })}
        </Styled.ul>
      </div>
      <div>
        <Button destination="/dealers" buttonText="BECOME A DEALER" />
      </div>
    </div>
  )
}

export default menubar
