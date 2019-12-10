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
        top: `50px`,
        left: 0,
        zIndex: `9999`,
        backgroundColor: `rgba(0,0,0,0.8)`,
      }}
      onClick={() => props.open(null)}
    >
      <Img
        sx={{
          width: `75%`,
          height: `75%`,
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
        }}
        fluid={props.image}
      />
      <p
        sx={{
          position: `absolute`,
          top: `60px`,
          left: `50%`,
          transform: `translate(-50%)`,
          justifyText: `center`,
          color: `text`,
          fontFamily: `heading`,
          fontSize: 3,
        }}
      >
        CLICK TO CLOSE
      </p>
    </div>
  )
})

export default image_modal
