/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { cold } from 'react-hot-loader'
import { Waypoint } from 'react-waypoint'
import Img from 'gatsby-image'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import Loadable from '@loadable/component'
import BeforeAfterSlider from 'react-before-after-slider'
import Layout from '../components/layout'
import Section from '../components/section'
import Button from '../components/button'
import CompTable from '../components/comparisontable'
import ProductSelector from '../components/productselector'
import arrowDown from '../components/icons/arrow-down.png'
import tekVideo from '../assets/TEKDiagram.mp4'

const products = cold(({ data }) => {
  const [firstSection, setFirstSection] = useState(0)
  const [showTable, setShowTable] = useState(false)
  const [showProductSelector, setShowProduct] = useState(true)

  const videoElem = useRef(null)

  async function videoElemPlay() {
    try {
      await videoElem.current.play()
    } catch (err) {
      console.log(err)
    }
  }

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
  let sectionNine = sections.filter(obj => {
    return obj.node.section === 9
  })

  const FinalSlider = Loadable(() => import('../components/slider'))

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
                  fontSize: ['1', '1', '1', '2', '2'],
                  width: `fit-content`,
                  textAlign: `center`,
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
        <Styled.h2
          sx={{ fontSize: ['8', '8', '8', '9', '9'], color: 'primary' }}
        >
          {firstSection === 0
            ? sectionOne[0].node.text
            : sectionOne[0].node.text2}
        </Styled.h2>
        <SectionChooser />
        {firstSection === 0 ? (
          <div sx={{ height: `400px` }}>
            <div
              sx={{
                display: `flex`,
                marginTop: `7%`,
                marginBottom: `7%`,
                flexDirection: ['column', 'column', 'column', 'row', 'row'],
              }}
            >
              <div sx={{ width: ['100%', '100%', '100%', '45%', '45%'] }}>
                <Styled.h2>{sectionTwo[0].node.text}</Styled.h2>
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '100%', '55%', '55%'],
                  paddingBottom: ['10%', '10%', '10%', '0', '0'],
                  paddingLeft: ['0', '0', '0', '5%', '5%'],
                  alignSelf: `center`,
                }}
              >
                <Img
                  sx={{
                    width: `200px`,
                    backgroundSize: `contain`,
                    display: `inline-block`,
                    marginRight: `10%`,
                  }}
                  fluid={sectionTwo[0].node.image.childImageSharp.fluid}
                />
                <Img
                  sx={{
                    width: `239px`,
                    backgroundSize: `contain`,
                    display: `inline-block`,
                  }}
                  fluid={sectionTwo[0].node.image2.childImageSharp.fluid}
                />
                <p sx={{ color: `grey` }}>{sectionTwo[0].node.text3}</p>
              </div>
            </div>
          </div>
        ) : (
          <div sx={{ height: `400px` }}>
            <div
              sx={{
                display: `flex`,
                marginTop: `7%`,
                marginBottom: `7%`,
                flexDirection: ['column', 'column', 'column', 'row', 'row'],
              }}
            >
              <div sx={{ width: ['100%', '100%', '100%', '45%', '45%'] }}>
                <Styled.h2>{sectionThree[0].node.text}</Styled.h2>
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '100%', '55%', '55%'],
                  paddingBottom: ['10%', '10%', '10%', '0', '0'],
                  paddingLeft: ['0', '0', '0', '5%', '5%'],
                  alignSelf: `center`,
                }}
              >
                <Img
                  sx={{
                    width: `200px`,
                    backgroundSize: `contain`,
                    display: `inline-block`,
                    marginRight: `10%`,
                  }}
                  fluid={sectionThree[0].node.image.childImageSharp.fluid}
                />
                <Img
                  sx={{
                    width: `239px`,
                    backgroundSize: `contain`,
                    display: `inline-block`,
                  }}
                  fluid={sectionThree[0].node.image2.childImageSharp.fluid}
                />
                <p sx={{ color: `grey` }}>{sectionThree[0].node.text3}</p>
              </div>
            </div>
          </div>
        )}
      </Section>
      <FinalSlider />
      <div
        sx={{
          padding: `5% 0`,
          display: [`none`, `none`, `block`, `block`, `block`],
        }}
      >
        <Waypoint
          bottomOffset="35%"
          onEnter={() => {
            videoElemPlay()
          }}
        />
        <div>
          <video
            ref={videoElem}
            sx={{
              width: `100%`,
              margin: `0 auto`,
              display: `block`,
            }}
          >
            <source src={tekVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        sx={{ backgroundColor: `gray`, overflow: `hidden`, padding: `5% 0` }}
      >
        <Section>
          <div
            sx={{
              display: `flex`,
              marginTop: `7%`,
              marginBottom: `7%`,
              flexDirection: ['column', 'column', 'column', 'row', 'row'],
            }}
          >
            <div sx={{ width: ['100%', '100%', '100%', '45%', '45%'] }}>
              <Styled.h2 sx={{ color: 'text' }}>
                {sectionFour[0].node.text}
              </Styled.h2>
            </div>
            <div
              sx={{
                width: ['100%', '100%', '100%', '55%', '55%'],
                paddingBottom: ['10%', '10%', '10%', '0', '0'],
                alignSelf: `center`,
              }}
            >
              <p sx={{ color: 'text' }}>{sectionFour[0].node.text3}</p>
            </div>
          </div>
          <div
            sx={{
              margin: `auto`,
              borderColor: 'text',
              borderWidth: `3px`,
              borderStyle: `solid`,
              cursor: `pointer`,
              transition: `all 0.2s ease`,
              ':hover': {
                backgroundColor: `secondary`,
              },
            }}
            onClick={() => setShowTable(!showTable)}
          >
            <p
              sx={{
                color: `text`,
                textTransform: `uppercase`,
                fontWeight: `bold`,
                textAlign: `center`,
                padding: `1% 0`,
              }}
            >
              {sectionFour[0].node.buttonText}{' '}
              <img
                src={arrowDown}
                sx={{
                  marginLeft: `10px`,
                  transition: `all .2s ease-in-out`,
                  transform: showTable ? null : `rotate(180deg)`,
                }}
                alt="down arrow"
              />
            </p>
          </div>
          {showTable ? <CompTable /> : null}
        </Section>
      </div>
      <ProductSelector />
      <Section>
        <div
          sx={{
            display: `flex`,
            marginTop: `7%`,
            marginBottom: `7%`,
            flexDirection: ['column', 'column', 'column', 'row', 'row'],
          }}
        >
          <div sx={{ width: ['100%', '100%', '100%', '45%', '45%'] }}>
            <Styled.h2>{sectionSix[0].node.text}</Styled.h2>
            <p sx={{ color: 'grey' }}>{sectionSix[0].node.text2}</p>
          </div>
          <div
            sx={{
              width: ['100%', '100%', '100%', '55%', '55%'],
              paddingBottom: ['10%', '10%', '10%', '0', '0'],
              alignSelf: `center`,
            }}
          >
            <Img fluid={sectionSix[0].node.image.childImageSharp.fluid} />
          </div>
        </div>
      </Section>
      <div
        sx={{
          display: ['block', 'block', 'grid', 'grid', 'grid'],
          gridTemplateColumns: `40% 1fr`,
          bg: `secondary`,
          height: ['auto', 'auto', '600px', '600px', '600px'],
        }}
      >
        <Img fluid={sectionNine[0].node.image.childImageSharp.fluid} />
        <div sx={{ padding: `5% 5% 5% 15%`, color: `text` }}>
          <Styled.h2 sx={{ color: 'text', ':after': { borderColor: 'text' } }}>
            TOP BENEFITS
          </Styled.h2>
          <ol sx={{ color: `text` }}>
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
              Interlocking Technology hides fasteners for a sleek, premium
              appearance.
            </li>
          </ol>
        </div>
      </div>
      <Section>
        <div
          sx={{
            display: `flex`,
            marginTop: `7%`,
            marginBottom: `7%`,
            flexDirection: ['column', 'column', 'column', 'row', 'row'],
          }}
        >
          <div
            sx={{
              width: ['100%', '100%', '100%', '45%', '45%'],
              padding: `0 5% 0 0`,
              boxSizing: `border-box`,
            }}
          >
            <Styled.h2>{sectionSeven[0].node.text}</Styled.h2>
          </div>
          <div
            sx={{
              width: ['100%', '100%', '100%', '55%', '55%'],
              paddingBottom: ['10%', '10%', '10%', '0', '0'],
              alignSelf: `center`,
            }}
          >
            <p sx={{ color: `grey` }}>{sectionSeven[0].node.text3}</p>
          </div>
        </div>
      </Section>
    </Layout>
  )
})

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
    beforeImage: file(relativePath: { eq: "images/roof-before.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    afterImage: file(relativePath: { eq: "images/roof-after.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default products
