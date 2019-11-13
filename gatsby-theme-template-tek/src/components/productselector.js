/** @jsx jsx */
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import { useSpring, animated, config } from 'react-spring'
import Layout from '../components/layout'

const productselector = props => {
  const [activeFrame, setActiveFrame] = useState(`frame1`)

  let phrases = ['WEATHERWOOD', 'MOCHA BROWN', 'SADDLE BROWN', 'CHARCOAL']

  let outputFrames = phrases.map((frametext, index) => {
    let indexNum = index + 1
    return (
      <div
        onClick={() => setActiveFrame(`frame${indexNum}`)}
        sx={{
          position: `relative`,
          height: `400px`,
          backgroundColor: `black`,
          border: `1px solid white`,
          width: activeFrame === `frame${indexNum}` ? `40%` : `20%`,
          display: `inline-block`,
          boxSizing: `border-box`,
        }}
        css={css`
          transition: transform 0.8s ease-in-out, width 0.5s;
        `}
      >
        <div
          sx={{
            width: `100%`,
            height: `100%`,
            display: `grid`,
            justifyItems: `center`,
            alignItems: `center`,
          }}
        >
          <p
            sx={{
              fontFamily: `heading`,
              fontSize: 5,
              margin: 0,
              padding: 0,
              display: `inline-block`,
              transform:
                activeFrame === `frame${indexNum}` ? null : `rotate(90deg)`,
            }}
          >
            {frametext}
          </p>
        </div>
      </div>
    )
  })

  return (
    <div
      sx={
        {
          // gridTemplateColumns: `${frame1} ${frame2} ${frame3} ${frame4}`,
        }
      }
    >
      {outputFrames}
    </div>
  )
}

export default productselector
