/** @jsx jsx */
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Button from '../components/button'
import { relative } from 'upath'
import Section from '../components/section'
import ContactModal from '../components/contactmodal'
import HamburgerMenu from './hamburger.js'

const menubar = () => {
  const [show, setShow] = useState(false)

  let showHandler = () => {
    setShow(!show)
  }
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
      {show ? <ContactModal clickHandler={() => showHandler()} /> : null}
      <div
        sx={{
          display: `flex`,
          justifyContent: `space-around`,
          alignItems: `center`,
          height: ['100%', '100%', '100%', 'auto', 'auto'],
        }}
      >
        <div
          sx={{
            width: ['50%', '50%', '50%', '20%', '20%'],
            height: ['auto', 'auto', 'auto', '100%', '100%'],
            position: `relative`,
            alignSelf: `center`,
            justifySelf: `center`,
          }}
        >
          <Link destination="/">
            <Img
              sx={{
                maxWidth: `382px`,
              }}
              fluid={data.file.childImageSharp.fluid}
            />
          </Link>
        </div>
        <div
          sx={{
            justifySelf: `center`,
            height: `100%`,
            display: ['none', 'none', 'none', 'block', 'block'],
          }}
        >
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
                      fontSize: '25px',
                      verticalAlign: `middle`,
                      lineHeight: `100px`,
                    }}
                  >
                    {link.name}
                  </Link>
                </Styled.li>
              )
            })}
            <Styled.li key="liLinkMenuLast" onClick={showHandler}>
              <div
                sx={{
                  textDecoration: `none`,
                  color: `secondary`,
                  fontFamily: `heading`,
                  fontSize: '25px',
                  verticalAlign: `middle`,
                  lineHeight: `100px`,
                }}
              >
                Modal Test
              </div>
            </Styled.li>
          </Styled.ul>
        </div>
        <div
          sx={{
            display: ['none', 'none', 'none', 'flex', 'flex'],
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Button destination="/dealers" buttonText="BECOME A DEALER" />
        </div>
        <HamburgerMenu sx={{ justifySelf: `center`, alignSelf: `center` }} />
      </div>
    </div>
  )
}

export default menubar
