/** @jsx jsx */
import React from 'react'
import { Layout as ThemeLayout, Header, Main, jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import MenuBar from '../components/menubar'
import Footer from '../components/footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <Global
        sx={{
          body: {
            margin: `0`,
            padding: 0
          },
        }}
      />
      <Header>
        <MenuBar />
      </Header>
      <Main>{children}</Main>
      <Footer />
    </ThemeLayout>
  )
}

export default Layout
