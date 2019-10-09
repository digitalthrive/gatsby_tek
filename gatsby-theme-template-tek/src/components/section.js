/** @jsx jsx */
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { Container } from 'theme-ui'
import { css } from '@emotion/core'
import { useSpring, animated, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'

const section = props => {
  return (
    <Container>
      <div
        sx={{
          position: `relative`,
        }}
      >
        <div
          sx={{
            width: `85%`,
            margin: `auto`,
          }}
        >
          {props.children}
        </div>
      </div>
    </Container>
  )
}

export default section
