/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import BackImg from 'gatsby-background-image'
import { Styled, jsx } from 'theme-ui'
import { cold } from 'react-hot-loader'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import ContactForm from '../components/contactform'
import DealerForm from '../components/dealerform'

const contact = cold(() => {
  const [firstSection, setFirstSection] = useState(0)

  let SectionChooser = () => {
    return (
      <div
        sx={{
          height: `100px`,
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
        }}
      >
        {['CONTACT', 'BECOME A DEALER'].map((el, index) => (
          <div
            key={el + index}
            sx={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              border: `3px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
              bg: index === firstSection ? `primary` : null,
              cursor: `pointer`,
              transition: `all .3s ease-in-out`,
              ':hover': {
                backgroundColor: `primary`,
              },
              ':hover > h3': {
                color: `text`,
              },
            }}
            onClick={() => setFirstSection(index)}
          >
            <Styled.h3
              sx={{
                margin: `0`,
                padding: `0`,
                fontFamily: 'body',
                fontSize: ['2', '2', '2', '3', '3'],
                width: `fit-content`,
                textAlign: `center`,
                color: index === firstSection ? `text` : `primary`,
              }}
            >
              {el}
            </Styled.h3>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Layout>
      <div
        sx={{
          width: [`80%`, `80%`, `80%`, `800px`, `800px`],
          margin: `40px auto`,
          padding: `2`,
        }}
      >
        <SectionChooser />
        {firstSection === 0 ? <ContactForm /> : <DealerForm />}
      </div>
    </Layout>
  )
})

export default contact
