/** @jsx jsx */
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const contactform = () => {
  return (
    <div>
      <Styled.h1 sx={{ color: `secondary`, marginBottom: `0`, fontSize: ['3', '3', '3', '6', '6'] }}>CONTACT <span sx={{ color: `primary` }}>TEK</span> INDUSTRIES</Styled.h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        css={css`
          input {
            width: 100%;
            height: 50px;
            background-color: #efefef;
            margin: 10px 0;
            border: 0;
            padding: 0 3%;
            box-sizing: border-box;
            font-size: 16px;
          }
          textarea {
            width: 100%;
            height: 180px;
            background-color: #efefef;
            margin: 10px 0;
            border: 0;
            padding: 3%;
            box-sizing: border-box;
            font-family: inherit;
            font-size: 16px;
          }
          button{
            display: block;
            border: 2px solid #D23A00;
            padding: 15px 30px;
            color: #D23A00;
            cursor: pointer;
            background: #fff;
          }
        `}
      >
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="company" placeholder="Company" name="company" />
        <textarea placeholder="Let us know about your roofing needs" name="message"></textarea>
        <button type="submit">Send message</button>
      </form>
      <address sx={{ color: `gray`, fontStyle: `normal`, margin: `5% 0 0 0` }}>
        Corp Office <span sx={{ color: `primary`, fontWeight: `bold` }}>877-729-5229</span><br />
        Monday – <span sx={{ color: `primary`, fontWeight: `bold` }}>Friday 8a.m. - 5p.m. pst</span><br />
        Manufactured by TEK Industries, LLC 11801 Pierce Street, Suite 200,<br />
        Riverside, California, 92505
      </address>
      <p sx={{ color: `gray`, display: ['none', 'none', 'block', 'block', 'block'] }}>At TEK® Industries, our mission is two-fold: to expand our roofing family and to renovate the entire roofing market by giving more to homeowners.</p>
    </div>
  )
}

export default contactform