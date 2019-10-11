/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Section from '../components/section'
import Button from '../components/button'
import CompTable from '../components/comparisontable'

const products = ({ data }) => {
  const [firstSection, setFirstSection] = useState(0)
  const [showTable, setShowTable] = useState(false)

  const sections = data.allSection.edges

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
  let sectionFive = sections.filter(obj => {
    return obj.node.section === 5
  })
  let sectionSix = sections.filter(obj => {
    return obj.node.section === 6
  })
  let sectionSeven = sections.filter(obj => {
    return obj.node.section === 7
  })
  let sectionEight = sections.filter(obj => {
    return obj.node.section === 8
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
        <div
          sx={{
            border: `2px solid`,
            borderColor: `primary`,
            borderCollapse: `collapse`,
            bg: `primary`,
          }}
          onClick={() => setFirstSection(0)}
        >
          <Styled.h3
            sx={{ margin: `auto`, width: `fit-content`, color: `text` }}
          >
            {sectionOne[0].node.text3}
          </Styled.h3>
        </div>
        <div
          sx={{
            border: `2px solid`,
            borderColor: `primary`,
            borderCollapse: `collapse`,
          }}
          onClick={() => setFirstSection(1)}
        >
          <Styled.h3 sx={{ margin: `auto`, width: `fit-content` }}>
            {sectionOne[0].node.text4}
          </Styled.h3>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Section>
        <Styled.h2>
          {firstSection === 0
            ? sectionOne[0].node.text
            : sectionOne[0].node.text2}
        </Styled.h2>
        <SectionChooser />
        {firstSection === 0 ? (
          <>
            <Styled.h2>{sectionTwo[0].node.text}</Styled.h2>
            <Img
              sx={{ height: `200px`, width: `200px` }}
              fluid={sectionTwo[0].node.image.childImageSharp.fluid}
            />
            <Img
              sx={{ height: `200px`, width: `200px` }}
              fluid={sectionTwo[0].node.image2.childImageSharp.fluid}
            />
            <Styled.h3>{sectionTwo[0].node.text3}</Styled.h3>
          </>
        ) : (
          <>
            <Styled.h2>{sectionThree[0].node.text}</Styled.h2>
            <Img
              sx={{ height: `200px`, width: `200px` }}
              fluid={sectionThree[0].node.image.childImageSharp.fluid}
            />
            <Img
              sx={{ height: `200px`, width: `200px` }}
              fluid={sectionThree[0].node.image2.childImageSharp.fluid}
            />
            <Styled.h3>{sectionThree[0].node.text3}</Styled.h3>
          </>
        )}
      </Section>
      <div sx={{ backgroundColor: `darkgrey`, height: `400px` }}>
        <Styled.h2>Image Before/After Placeholder</Styled.h2>
      </div>
      <div sx={{ backgroundColor: `white`, height: `400px` }}>
        <Styled.h2>Layer Graphic Placeholder</Styled.h2>
      </div>
      <Section>
        <Styled.h2>{sectionFour[0].node.text}</Styled.h2>
        <Styled.h3>{sectionFour[0].node.text3}</Styled.h3>
        <div
          sx={{ bg: `primary`, width: `fit-content`, margin: `auto` }}
          onClick={() => setShowTable(!showTable)}
        >
          <Styled.h3 sx={{ color: `text` }}>
            {sectionFour[0].node.buttonText}
          </Styled.h3>
        </div>
        />
        {showTable ? <CompTable /> : null}
      </Section>
      <div
        sx={{
          display: `grid`,
          gridTemplateColumns: `40% 1fr`,
          bg: `primary`,
          height: `600px`,
        }}
      >
        <Img fluid={sectionOne[0].node.image.childImageSharp.fluid} />
        <div>
          <Styled.h2>TOP BENEFITS</Styled.h2>
          <ol>
            <li>Highly reflective to the radiant heat.</li>
            <li>
              Foam Insulation inserts for increased R-value and walkability.
            </li>
            <li>Will self ventilate using built in 3/8" air space.</li>
            <li>Super strong solid steel 26 gauge core.</li>
            <li>Corrosion resistant aluminum zinc coating..</li>
            <li>Rock coated exterior for superior weather resistance</li>
            <li>CAT-5 Wind resistance.</li>
            <li>Can withstand baseball size hail</li>
            <li>
              Interlocking Technology "you cannot see any of the fasteners"
            </li>
          </ol>
        </div>
      </div>
      <Section>
        <Styled.h2>{sectionSix[0].node.text}</Styled.h2>
        <Styled.h3>{sectionSix[0].node.text2}</Styled.h3>
        <Img
          sx={{ height: `200px`, width: `200px` }}
          fluid={sectionSix[0].node.image.childImageSharp.fluid}
        />
      </Section>
      <div sx={{ backgroundColor: `darkgrey`, height: `400px` }}>
        <Styled.h2>Roofing Material Slider Placeholder</Styled.h2>
      </div>
      <Section>
        <Img
          sx={{ height: `200px`, width: `200px` }}
          fluid={sectionSeven[0].node.image.childImageSharp.fluid}
        />
        <div
          sx={{ bg: `primary`, width: `fit-content`, margin: `auto` }}
          onClick={() => setShowTable(!showTable)}
        >
          <Styled.h3 sx={{ color: `text` }}>
            {sectionSeven[0].node.buttonText}
          </Styled.h3>
        </div>
        />
        {showTable ? <CompTable /> : null}
      </Section>
      <Section>
        <Styled.h2>{sectionEight[0].node.text}</Styled.h2>
        <Styled.p sx={{ color: `grey` }}>{sectionEight[0].node.text3}</Styled.p>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ProductsPageQuery {
    allSection(filter: { page: { eq: "products" } }) {
      edges {
        node {
          text
          text2
          text3
          text4
          text5
          buttonText
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
  }
`

export default products
