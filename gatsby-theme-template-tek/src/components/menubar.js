/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Button from '../components/button'
import { relative } from 'upath'
import Section from '../components/section'

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
          fluid(maxHeight: 200, quality: 100) {
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
        height: `100px`,
        position: `fixed`,
        margin: `auto`,
        zIndex: `100`,
        backgroundColor: `background`,
      }}
    >
      <div
        sx={{
          display: `flex`,
          justifyContent: `space-around`,
          alignItems: `center`,
        }}
      >
        <div
          sx={{
            width: `20%`,
            height: `100%`,
            position: `relative`,
            alignSelf: `center`,
            justifySelf: `center`,
          }}
        >
          <Link destination="/">
            <Img
              sx={{
                width: `382px`
              }}
              fluid={data.file.childImageSharp.fluid}
            />
          </Link>
        </div>
        <div sx={{ justifySelf: `center`, height: `100%` }}>
          <Styled.ul sx={{ height: `100%`, display: `table` }}>
            {data.site.siteMetadata.menuLinks.map(link => {
              return (
                <Styled.li key={link.name} sx={{ display: `table-cell` }}>
                  <Link
                    to={link.link}
                    sx={{
                      textDecoration: `none`,
                      color: `secondary`,
                      fontFamily: `heading`,
                      fontSize: `2` + "5px",
                      verticalAlign: `middle`,
                      lineHeight: `100px`,
                    }}
                  >
                    {link.name}
                  </Link>
                </Styled.li>
              )
            })}
          </Styled.ul>
        </div>
        <div sx={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
          <Button destination="/dealers" buttonText="BECOME A DEALER" />
        </div>
      </div>
    </div>
  )
}

export default menubar
