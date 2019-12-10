/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { cold } from 'react-hot-loader'
import Img from 'gatsby-image'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import BeforeAfterSlider from 'react-before-after-slider'
import beforeImage from '../components/images/roof-after.jpg'
import afterImage from '../components/images/roof-before.jpg'

export const slider = cold(() => {
  const [sliderWidth, setSliderWidth] = useState(window.innerWidth)

  const before = beforeImage
  const after = afterImage

  window.onload = window.innerWidth
  window.onresize = function() {
    setSliderWidth(window.innerWidth)
  }

  const LoadableSlider = props => {
    return (
      <BeforeAfterSlider
        before={before}
        after={after}
        width={sliderWidth}
        height={560}
        sx={{
          display: [`none`, `none`, `block`, `block`, `block`],
        }}
      />
    )
  }

  return (
    <>
      <LoadableSlider />
    </>
  )
})

export default slider
