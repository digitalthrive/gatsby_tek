/** @jsx jsx */
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const contactform = () => {
  return (
    <div>
      <Styled.h1>CONTACT TEK INDUSTRIES</Styled.h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        css={css`
          input {
            width: 80%;
            height: 50px;
            background-color: #efefef;
            margin: 10px;
          }
          textarea {
            width: 80%;
            height: 400px;
            background-color: #efefef;
            margin: 10px;
          }
        `}
      >
        <input type="text" name="name" />

        <input type="email" name="email" />

        <input type="email" name="email" />
        <textarea name="message"></textarea>

        <button type="submit">Send message</button>
      </form>
    </div>
  )
}

export default contactform
