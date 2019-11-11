/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import { MdClose } from 'react-icons/md'
import Section from './section'
import Contact from './contactform'
import Dealer from './dealerform'

const drawermodal = props => {
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
    >
      <div sx={{ background: `rgba(0,0,0,0.7)` }}></div>
      <div sx={{ background: `white` }}>
        <MdClose
          onClick={props.clickHandler}
          sx={{
            color: `secondary`,
            width: `50px`,
            height: `50px`,
            position: `absolute`,
            top: `50px`,
            right: `50px`,
            zIndex: `100`,
          }}
        />
        <div sx={{ width: `80%`, margin: `150px auto` }}>
          {(() => {
            switch (props.form) {
              case 'contact':
                return <Contact />
              case 'dealer':
                return <Dealer />
              default:
                return null
            }
          })()}
        </div>
      </div>
    </div>
  )
}

export default drawermodal
