/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackImg from 'gatsby-background-image'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Section from '../components/section'
import Button from '../components/button'
import ContactForm from '../components/contact'

const dealers = ({ data }) => {
  const sections = data.allSection.edges

  const [internalSection, setSection] = useState(0)

  let sectionOne = sections.filter(obj => {
    return obj.node.section === 1
  })
  let sectionTwo = sections.filter(obj => {
    return obj.node.section === 2
  })
  let sectionThree = sections.filter(obj => {
    return obj.node.section === 3
  })
  let sectionFour = sections.filter(obj => {
    return obj.node.section === 4
  })

  let SectionChooser = () => {
    return (
      <div
        sx={{
          height: `100px`,
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
        }}
      >
        {[sectionOne[0].node.text3, sectionOne[0].node.text4].map(
          (el, index) => (
            <div
              key={el + index}
              sx={{
                border: `2px solid`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                bg: index === internalSection ? `primary` : null,
              }}
              onClick={() => setSection(index)}
            >
              <Styled.h3
                sx={{
                  margin: `auto`,
                  width: `fit-content`,
                  color: index === internalSection ? `text` : `primary`,
                }}
              >
                {el}
              </Styled.h3>
            </div>
          )
        )}
      </div>
    )
  }

  let selections = data.allMdx.edges.map(item => {
    return (
      <div
        sx={{ bg: `rgba(210, 58, 0, 0.75)`, height: `200px`, width: `100%` }}
      >
        <Link
          to={item.node.fields.slug}
          sx={{
            color: `text`,
            textDecoration: `none`,
            fontFamily: `futura pt`,
            fontWeight: `bold`,
          }}
        >
          {item.node.frontmatter.title}
        </Link>
      </div>
    )
  })

  return (
    <Layout>
      <BackImg fluid={sectionOne[0].node.image.childImageSharp.fluid}>
        <Section>
          <Styled.h2>{sectionOne[0].node.text}</Styled.h2>
          <Styled.h2>{sectionOne[0].node.text2}</Styled.h2>
          <div
            key={sectionOne[0].node.id}
            sx={{
              width: `100%`,
              height: `800px`,
            }}
          >
            <div
              sx={{
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr`,
                width: `600px`,
                gridGap: `20px`,
              }}
            >
              {selections}
            </div>
          </div>
          <Styled.p sx={{ color: `primary` }}>
            {sectionOne[0].node.text3}
          </Styled.p>
          <Button
            destination="/dealers"
            buttonText={sectionOne[0].node.buttonText}
          />
          <Button
            destination="/installs"
            buttonText={sectionOne[0].node.buttonText2}
          />
        </Section>
      </BackImg>
      <Section>
        <Styled.h2>{sectionTwo[0].node.text}</Styled.h2>
        <Styled.p sx={{ color: `grey` }}>{sectionTwo[0].node.text2}</Styled.p>
        <Styled.p sx={{ color: `grey` }}>{sectionTwo[0].node.text3}</Styled.p>
      </Section>
      <div sx={{ bg: `primary` }}>
        <Styled.h3 sx={{ color: `text` }}>
          {sectionThree[0].node.text}
        </Styled.h3>
        <Styled.p>{sectionThree[0].node.text2}</Styled.p>
        <Button
          destination="/installs"
          buttonText={sectionOne[0].node.buttonText}
        />
      </div>
      <Section>
        <SectionChooser />
        <Styled.h2>Additional charts here</Styled.h2>
      </Section>
      <ContactForm />
    </Layout>
  )
}

export const query = graphql`
  query DealersPageQuery {
    allSection(filter: { page: { eq: "dealers" } }) {
      edges {
        node {
          text
          text2
          text3
          text4
          text5
          buttonText
          buttonText2
          image {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          section
        }
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/items/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default dealers
