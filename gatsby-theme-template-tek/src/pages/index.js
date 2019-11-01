/** @jsx jsx */
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import BackImg from 'gatsby-background-image'
import { Container } from 'theme-ui'
import Img from 'gatsby-image'
import HomeScroller from '../components/homescroller'
import GalleryPreview from '../components/gallerypreview'
import Layout from '../components/layout'
import Section from '../components/section'
import Button from '../components/button'
import ButtonV2 from '../components/button-v2'

const homepage = ({ data }) => {
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

  return (
    <Layout>
      <HomeScroller />
      {sectionTwo.length > 0 ? (
        <Section key={sectionTwo[0].node.id}>
          <div sx={{ textAlign: `center`, marginTop: `3%`, marginBottom: `7%` }}>
            <Styled.h1
              sx={{
                margin: `auto`,
                textAlign: `center`,
                paddingBottom: 0,
                fontSize: `8`
              }}
            >{sectionTwo[0].node.text}</Styled.h1>
            <Styled.h3 sx={{ margin: 0, padding: 0 }}>{sectionTwo[0].node.text2}</Styled.h3>
            <Styled.h3 sx={{ margin: 0, padding: 0 }}>{sectionTwo[0].node.text3}</Styled.h3>
          </div>
          <div
            sx={{
              display: `flex`,
              marginBottom: `7%`,
              flexDirection: ["column", "column", "column", "row", "row"]
              }}>
              <div sx={{ width: ["100%", "100%", "100%", "45%", "45%"] }}>
                <Styled.h2
                  sx={{
                    position: `relative`,
                    fontSize: `6`,
                    width: ["100%", "100%", "100%", "65%", "65%"],
                    ":after": {
                      content: `""`,
                      position: `absolute`,
                      bottom: `0`,
                      left: `0`,
                      width: `20%`,
                      height: `3px`,
                      margin: `0 auto`,
                      display: `block`,
                      backgroundColor: "primary"
                    }
                  }}
                >{sectionTwo[0].node.text4}</Styled.h2>
              </div>
              <div sx={{ width: ["100%", "100%", "100%", "55%", "55%"], alignSelf: `center` }}>
                <Img
                  sx={{ width: `200px`, backgroundSize: `contain`, display: `inline-block`, marginRight: `10%` }}
                  fluid={sectionTwo[0].node.image.childImageSharp.fluid}
                />
                <Img
                  sx={{ width: `239px`, backgroundSize: `contain`, display: `inline-block` }}
                  fluid={sectionTwo[0].node.image2.childImageSharp.fluid}
                />
                <p sx={{ color: `grey` }}>{sectionTwo[0].node.text5}</p>
                <ButtonV2 destination="/products" buttonText={sectionTwo[0].node.buttonText} borderColor="primary" color="primary" />
              </div>
          </div>
        </Section>
      ) : null}
      {sectionThree.length > 0 ? (
        <BackImg fluid={sectionThree[0].node.image2.childImageSharp.fluid} sx={{ height: `188px`, margin: `5% 0` }}>
          <div sx={{ display: `flex`, justifyContent: `space-evenly`, alignItems: `center`, height: `100%` }}>
            <Styled.h2
              sx={{
                color: "background",
                padding: `0`,
                ":before": {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: "primary",
                  width: `95%`,
                  position: `absolute`,
                  left: `-100%`,
                  top: `32%`
                },
                ":after": {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: "primary",
                  width: `95%`,
                  position: `absolute`,
                  right: `-200%`,
                  top: `32%`
                }
              }}
            >
              {sectionThree[0].node.text}
            </Styled.h2>
            <Styled.h2
              sx={{
                color: "background",
                padding: `0`,
                ":before": {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: "primary",
                  width: `95%`,
                  position: `absolute`,
                  left: `-100%`,
                  top: `32%`
                },
                ":after": {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: "primary",
                  width: `95%`,
                  position: `absolute`,
                  right: `-200%`,
                  top: `32%`
                }
              }}
            >
              {sectionThree[0].node.text2}
            </Styled.h2>
            <Styled.h2
              sx={{
                color: "background",
                padding: `0`,
                ":before": {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: "primary",
                  width: `95%`,
                  position: `absolute`,
                  left: `-100%`,
                  top: `32%`
                },
                ":after": {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: "primary",
                  width: `95%`,
                  position: `absolute`,
                  right: `-200%`,
                  top: `32%`
                }
              }}
            >
              {sectionThree[0].node.text3}
            </Styled.h2>
            <Img
              sx={{
                width: `153px`,
                display: `inline-block`,
                position: `relative`,
                ":before": {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: "primary",
                  width: `95%`,
                  position: `absolute`,
                  left: `-100%`,
                  top: `32%`
                },
                ":after": {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: "primary",
                  width: `95%`,
                  position: `absolute`,
                  right: `-200%`,
                  top: `32%`
                }
              }}
              fluid={sectionThree[0].node.image.childImageSharp.fluid}
            />
          </div>
        </BackImg>
      ) : null}
      {sectionFour.length > 0 ? (
        <Section key={sectionFour[0].node.id}>


          <div sx={{ display: `flex`, marginBottom: `7%`, flexDirection: ["column", "column", "column", "row", "row"] }}>
              <div sx={{ width: ["100%", "100%", "100%", "45%", "45%"] }}>
                <Styled.h2
                  sx={{
                    position: `relative`,
                    fontSize: `6`,
                    width: ["100%", "100%", "100%", "65%", "65%"],
                    ":after": {
                      content: `""`,
                      position: `absolute`,
                      bottom: `0`,
                      left: `0`,
                      width: `20%`,
                      height: `3px`,
                      margin: `0 auto`,
                      display: `block`,
                      backgroundColor: "primary"
                    }
                  }}
                >{sectionFour[0].node.text}</Styled.h2>
              </div>
              <div sx={{ width: ["100%", "100%", "100%", "55%", "55%"], alignSelf: `center` }}>
                <Img
                  sx={{ width: `200px`, backgroundSize: `contain`, display: `inline-block`, marginRight: `10%` }}
                  fluid={sectionFour[0].node.image.childImageSharp.fluid}
                />
                <Img
                  sx={{ width: `239px`, backgroundSize: `contain`, display: `inline-block` }}
                  fluid={sectionFour[0].node.image2.childImageSharp.fluid}
                />
                <p sx={{ color: `grey` }}>{sectionFour[0].node.text5}</p>
                <ButtonV2 destination="/products" buttonText={sectionFour[0].node.buttonText} borderColor="primary" color="primary" />
              </div>
          </div>



        </Section>
      ) : null}
      {sectionFive.length > 0 ? (
        <div sx={{ backgroundColor: "text" }}>
          <Section key={sectionFive[0].node.id}>
            <div sx={{ display: `flex`, padding: `10% 0` }}>
                <div sx={{ width: `45%` }}>
                  <Styled.h2>{sectionFive[0].node.text}</Styled.h2>
                  <ButtonV2
                    buttonText={sectionFive[0].node.buttonText}
                    destination="/gallery"
                    borderColor="primary"
                    color="primary"
                  />
                </div>
              <div sx={{ width: `55%` }}>
                <GalleryPreview />
              </div>
            </div>
          </Section>
        </div>
      ) : null}
      <div sx={{ height: `600px`, backgroundColor: `#000`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignContent: `center`, textAlign: `center` }}>
        <Section>
          <Styled.h2 sx={{ color: `text`, marginTop: `0`, ":after": {right: `0`} }}>Testimonial Scroller Placeholder</Styled.h2>
          <Styled.h3 sx={{ fontFamily: "body", color: "text", position: `relative` }}>
            <div
              sx={{
                position: `relative`,
                ":before": {
                  content: `open-quote`,
                  fontFamily: `heading`,
                  color: "primary",
                  display: `block`,
                  position: `absolute`,
                  left: `-20px`,
                  top: `-20px`,
                  fontSize: "8"
                },
                ":after": {
                  content: `close-quote`,
                  fontFamily: `heading`,
                  color: "primary",
                  display: `block`,
                  position: `absolute`,
                  right: `-20px`,
                  bottom: `-20px`,
                  fontSize: "8"
                }
              }}
            >Our before and after is remarkable. All of our neighbors have asked us what kind of roof we put on. They were so surprised and impressed when we told them it was a Hurricane stone-coated metal roof.
            </div>
          </Styled.h3>
          <Styled.h3 sx={{ fontFamily: "body", padding: `0`, margin: `0`, color: "text" }}>Sue and Paul</Styled.h3>
          <Styled.h3 sx={{ fontFamily: "body", padding: `0`, margin: `0`, color: "text" }}>North Texas Homeowners</Styled.h3>
        </Section>
      </div>
      <div sx={{ backgroundColor: "primary" }}>
        {sectionSix.length > 0 ? (
          <Section key={sectionSix[0].node.id}>
            <div sx={{ display: `flex`, padding: `10% 0` }}>
              <div sx={{ width: `45%` }}>
              <Styled.h2 sx={{ color: `text`, "after": {backgroundColor: "text"} }}>{sectionSix[0].node.text}</Styled.h2>
              <Img
                sx={{ width: `411px` }}
                fluid={sectionSix[0].node.image.childImageSharp.fluid}
              />
              </div>
              <div sx={{ width: `55%`, alignSelf: `center` }}>
                <Img
                  sx={{ width: `385px` }}
                  fluid={sectionSix[0].node.image2.childImageSharp.fluid}
                />
                <Styled.p sx={{ color: `text` }}>{sectionSix[0].node.text3}</Styled.p>
                <ButtonV2
                  buttonText={sectionSix[0].node.buttonText}
                  destination="/dealers"
                  borderColor="text"
                  color="text"
                />
              </div>
            </div>
          </Section>
        ) : null}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query HomePageQuery {
    allSection(filter: { page: { eq: "home" } }) {
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

export default homepage
