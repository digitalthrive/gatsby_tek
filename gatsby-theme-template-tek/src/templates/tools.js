/** @jsx jsx */
import React from 'react'
import { graphql, Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import Section from '../components/section'
import Layout from '../components/layout'

const product = ({ data: { markdownRemark } }) => {
  const item = markdownRemark

  return (
    <Layout>
      <Section>
        <Styled.h2>{item.frontmatter.title}</Styled.h2>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      frontmatter {
        abbreviation
        title
      }
    }
  }
`

export default product
