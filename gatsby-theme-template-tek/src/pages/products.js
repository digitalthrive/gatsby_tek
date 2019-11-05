/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import BeforeAfterSlider from 'react-before-after-slider'
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

  const before = 'https://picsum.photos/id/1005/1600/400'
  const after = 'https://picsum.photos/id/10/1600/400'

  function reportWindowWidth() {
    let width = window.innerWidth;
    return width;
  }
  window.onload = reportWindowWidth;
  window.onresize = function () {
    reportWindowWidth();
  };

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
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                border: `3px solid`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                bg: index === firstSection ? `primary` : null,
              }}
              onClick={() => setFirstSection(index)}
            >
              <Styled.h3
                sx={{
                  margin: `0`,
                  padding: `0`,
                  fontFamily: "body",
                  fontSize: "2",
                  width: `fit-content`,
                  color: index === firstSection ? `text` : `primary`,
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

  return (
    <Layout>
      <Section>
        <Styled.h2 sx={{ fontSize: "9", color: "primary" }}>
          {firstSection === 0
            ? sectionOne[0].node.text
            : sectionOne[0].node.text2}
        </Styled.h2>
        <SectionChooser />
        {firstSection === 0 ? (
          <>
            <div sx={{ display: `flex`, marginTop: `7%`, marginBottom: `7%`, flexDirection: ["column", "column", "column", "row", "row"] }}>
              <div sx={{ width: ["100%", "100%", "100%", "45%", "45%"] }}>
                <Styled.h2>{sectionTwo[0].node.text}</Styled.h2>
              </div>
              <div sx={{ width: ["100%", "100%", "100%", "55%", "55%"], paddingBottom: ["10%", "10%", "10%", "0", "0"], alignSelf: `center` }}>
                <Img
                  sx={{ width: `200px`, backgroundSize: `contain`, display: `inline-block`, marginRight: `10%` }}
                  fluid={sectionTwo[0].node.image.childImageSharp.fluid}
                />
                <Img
                  sx={{ width: `239px`, backgroundSize: `contain`, display: `inline-block` }}
                  fluid={sectionTwo[0].node.image2.childImageSharp.fluid}
                />
                <p sx={{ color: `grey` }}>{sectionTwo[0].node.text3}</p>
              </div>
            </div>
          </>
        ) : (
          <>
          <div sx={{ display: `flex`, marginTop: `7%`, marginBottom: `7%`, flexDirection: ["column", "column", "column", "row", "row"] }}>
            <div sx={{ width: ["100%", "100%", "100%", "45%", "45%"] }}>
              <Styled.h2>{sectionThree[0].node.text}</Styled.h2>
            </div>
            <div sx={{ width: ["100%", "100%", "100%", "55%", "55%"], paddingBottom: ["10%", "10%", "10%", "0", "0"], alignSelf: `center` }}>
              <Img
                sx={{ width: `200px`, backgroundSize: `contain`, display: `inline-block`, marginRight: `10%` }}
                fluid={sectionThree[0].node.image.childImageSharp.fluid}
              />
              <Img
                sx={{ width: `239px`, backgroundSize: `contain`, display: `inline-block` }}
                fluid={sectionThree[0].node.image2.childImageSharp.fluid}
              />
              <p sx={{ color: `grey` }}>{sectionThree[0].node.text3}</p>
            </div>
          </div>
          </>
        )}
      </Section>
      <BeforeAfterSlider
        before={before}
        after={after}
        width={reportWindowWidth()}
        height={560}
      />
      <div sx={{ backgroundColor: `gray`, overflow: `hidden` }}>
        <Styled.h2>Layer Graphic Placeholder</Styled.h2>
        <Section>
          <Styled.h2 sx={{ color: "text" }}>{sectionFour[0].node.text}</Styled.h2>
          <Styled.h3 sx={{ color: "text" }}>{sectionFour[0].node.text3}</Styled.h3>
          <div
            sx={{ bg: `primary`, width: `fit-content`, margin: `auto` }}
            onClick={() => setShowTable(!showTable)}
          >
            <Styled.h3 sx={{ color: `text` }}>
              {sectionFour[0].node.buttonText}
            </Styled.h3>
          </div>
          {showTable ? <CompTable /> : null}
        </Section>
      </div>
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
