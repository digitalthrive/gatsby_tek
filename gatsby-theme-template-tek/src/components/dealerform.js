/** @jsx jsx */
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const dealerform = () => {
  return (
    <div>
      <Styled.h1
        sx={{
          color: `secondary`,
          marginBottom: `0`,
          fontSize: ['3', '3', '3', '6', '6'],
        }}
      >
        <span sx={{ color: `primary` }}>TEK</span> DEALERAPPLICATION
      </Styled.h1>
      <form
        name='dealer'
        method='POST'
        data-netlify='true'
        css={css`
          color: #414141;
          label {
            position: absolute;
            left: 0;
            top: -500px;
            width: 1px;
            height: 1px;
            overflow: hidden;
          }
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
          select {
            width: 100%;
            height: 50px;
            background-color: #efefef;
            margin: 10px 0;
            border: 0;
            padding: 0 3%;
            box-sizing: border-box;
            font-size: 16px;
            text-indent: 20px;
          }
          input[type='radio'] {
            width: auto;
            height: auto;
          }
          input[type='checkbox'] {
            width: auto;
            height: auto;
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
          button {
            display: block;
            border: 2px solid #d23a00;
            padding: 15px 30px;
            color: #d23a00;
            cursor: pointer;
            background: #fff;
          }
        `}
      >
        <label for='company_name'>Company Name</label>
        <input type='text' placeholder='Company Name' name='company_name' />
        <label for='company_address'>Company Address</label>
        <input
          type='text'
          placeholder='Company Address'
          name='company_address'
        />
        <label for='company_website'>Company Website</label>
        <input
          type='text'
          placeholder='Company Website'
          name='company_website'
        />
        <label for='contact_name'>Contact Name</label>
        <input type='text' placeholder='Contact Name' name='contact_name' />
        <label for='role[]'>Your Role: </label>
        <select name='role'>
          <option value='none'>Choose Role</option>
          <option value='leader'>Leader</option>
          <option value='follower'>Follower</option>
        </select>
        <label for='email'>Email</label>
        <input type='email' placeholder='Email' name='email' />
        <label for='phone'>Phone (optional)</label>
        <input type='phone' placeholder='Phone (optional)' name='phone' />
        <p>Number of years in business</p>
        <input type='radio' name='years_in_business' value='1-5' /> 1-5
        <br />
        <input type='radio' name='years_in_business' value='6-10' /> 6-10
        <br />
        <input type='radio' name='years_in_business' value='11-15' /> 11-15
        <br />
        <input type='radio' name='years_in_business' value='15+' /> 15+
        <br />
        <br />
        <label for='how_did_you_hear_about_TEK'>
          How did you hear about TEK dealer Plans?
        </label>
        <textarea
          placeholder='How did you hear about TEK dealer Plans?'
          name='how_did_you_hear_about_TEK'
        ></textarea>
        <label for='describe_why_you_are_for_for_a_dealer'>
          Please describe why you would be a good fit for a dealer
        </label>
        <textarea
          placeholder='Please describe why you would be a good fit for a dealer'
          name='describe_why_you_are_for_for_a_dealer'
        ></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default dealerform
