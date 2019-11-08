/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'

import Section from '../components/section'

const contactmodal = props => {
  return (
    <div
      sx={{
        width: `100vw`,
        position: `absolute`,
        height: `100vh`,
        top: 0,
        left: 0,
        display: `grid`,
        gridTemplateColumns: `40% 60%`,
        gridTemplateRows: `100%`,
      }}
      onClick={props.clickHandler}
    >
      <div sx={{ background: `transparent` }}></div>
      <div sx={{ background: `white` }}>
        <h1>Contact Me</h1>
      </div>
    </div>
  )
}

export default contactmodal
