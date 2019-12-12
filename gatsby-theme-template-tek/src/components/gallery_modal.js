/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { cold } from 'react-hot-loader'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'

const image_modal = cold(props => {
  return (
    <div
      sx={{
        width: `100%`,
        height: `100%`,
        position: `fixed`,
        top: `100px`,
        left: 0,
        zIndex: `9999`,
        backgroundColor: `rgba(0,0,0,0.8)`,
      }}
      onClick={() => props.open(null)}
    >
      <Img
        sx={{
          width: [`750px`, `750px`, `75%`, `75%`, `75%`],
          height: [`375px`, `375px`, `75%`, `75%`, `75%`],
          position: `absolute`,
          top: [`100px`, `100px`, `50%`, `50%`, `50%`],
          left: [`-25%`, `-25%`, `50%`, `50%`, `50%`],

          transform: [
            `translate(-12.5%, 12.5%) rotate(90deg)`,
            `translate(-12.5%, 12.5%) rotate(90deg)`,
            `translate(-50%, -50%)`,
            `translate(-50%, -50%)`,
            `translate(-50%, -50%)`,
          ],
        }}
        fluid={props.image}
      />
      <p
        sx={{
          width: `fit-content`,
          backgroundColor: [
            `rgba(0,0,0,0.6)`,
            `rgba(0,0,0,0.6)`,
            null,
            null,
            null,
          ],
          position: `absolute`,
          top: [`50%`, `50%`, `30px`, `30px`, `30px`],
          left: [`90%`, `90%`, `50%`, `50%`, `50%`],
          justifyText: `center`,
          color: `text`,
          fontFamily: `heading`,
          fontSize: 3,
          transform: [
            `translate(-50%, -250%) rotate(90deg)`,
            `translate(-50%, -250%) rotate(90deg)`,
            `translate(0)`,
            `translate(0)`,
            `translate(0)`,
          ],
        }}
      >
        CLICK TO CLOSE
      </p>
    </div>
  )
})

export default image_modal
