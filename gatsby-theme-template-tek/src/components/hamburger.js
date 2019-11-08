/** @jsx jsx */
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Styled, jsx, Container } from 'theme-ui'
import { useSpring, useTransition, animated } from 'react-spring'
import hamburgerIcon from '../components/icons/hamburger.png'

const hamburger = () => {
  const [open, setOpen] = useState(false)
  const transition = useTransition(open, null, {
    from: { opacity: `0` },
    enter: { opacity: `1` },
    leave: { opacity: `0` },
  })

  return (
    <StaticQuery
      query={graphql`
        query HamburgerQuery {
          site {
            siteMetadata {
              menuLinks {
                link
                name
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div
            sx={{
              position: `fixed`,
              right: `25px`,
              top: `36px`,
              display: ["grid", "grid", "grid", "none", "none"],
              justifyItems: `right`,
              cursor: `pointer`,
            }}
            onClick={() => setOpen(!open)}
          >
            <div
              style={{ maskImage: `url(${hamburgerIcon})`, webkitMaskImage: `url(${hamburgerIcon})`, width: `30px`, height: `30px`, maskRepeat: `none`, maskSize: `30px`, webkitMaskSize: `30px` }}
              sx={{
                transition: `all 0.3s ease`,
                backgroundColor: `primary`,
                ":hover": {backgroundColor: `secondary`}
              }}
            >
            </div>
            {transition.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={props}
                    sx={{
                      position: `fixed`,
                      top: `0`,
                      left: `0`,
                      width: `100vw`,
                      height: `100%`,
                      backgroundColor: `primary`,
                      zIndex: `99`,
                    }}
                  >
                    <ul sx={{ paddingTop: [5, 5, 5], paddingLeft: [0, 0, 5], margin: [0, 0, 5] }}>
                      {data.site.siteMetadata.menuLinks.map(link => {
                        return (
                          <li
                            sx={{
                              fontSize: [6, 6, 6],
                              fontWeight: 'bold',
                              lineHeight: 'heading',
                              fontFamily: 'heading',
                              listStyle: `none`,
                              margin: 4,
                              width: ["auto", "auto", "25%"],
                            }}
                            key={link.name}
                          >
                            <Link to={link.link}
                              sx={{
                                color: `text`,
                                position: `relative`,
                                textTransform: 'uppercase',
                                ":hover": {
                                  color: `highlight`
                                },
                                ":before": {
                                  content: `""`,
                                  position: `absolute`,
                                  width: `100%`,
                                  height: `5px`,
                                  bottom: `0`,
                                  left: `0`,
                                  backgroundColor: `highlight`,
                                  visibility: `hidden`,
                                  webkitTransform: `scaleX(0)`,
                                  transform: `scaleX(0)`,
                                  webkitTransition: `all 0.3s ease-in-out 0s`,
                                  transition: `all 0.3s ease-in-out 0s`
                                },
                                ":hover:before": {
                                  visibility: `visible`,
                                  webkitTransform: `scaleX(1)`,
                                  transform: `scaleX(1)`
                                }
                              }}
                            >
                              {link.name}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </animated.div>
                )
            )}
          </div>
        </>
      )}
    />
  )
}

export default hamburger