/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Button from '../components/button'
import { relative } from 'upath'

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
        display: `flex`,
        justifyContent: `space-around`,
        alignItems: `center`,
        gridTemplateColumns: `400px 1fr 250px`,
        zIndex: `100`,
        height: `100px`,
      }}
    >
      <div
        sx={{
          width: `25%`,
          height: `100%`,
          position: `relative`,
          alignSelf: `center`,
          justifySelf: `center`,
        }}
      >
        <Img
          sx={{
            width: `80%`,
            display: `inline-block`,
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
          }}
          fluid={data.file.childImageSharp.fluid}
        />
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
  )
}

export default menubar
