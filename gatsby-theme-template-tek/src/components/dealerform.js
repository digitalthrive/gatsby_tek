/** @jsx jsx */
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const dealerform = () => {
  return (
    <div>
      <Styled.h1>TEK DEALER APPLICATION</Styled.h1>
      <form name="dealer" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default dealerform
