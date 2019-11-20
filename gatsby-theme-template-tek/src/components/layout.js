/** @jsx jsx */
import React from 'react'
import { Layout as ThemeLayout, Header, Main, jsx } from 'theme-ui'
import MenuBar from '../components/menubar'
import Footer from '../components/footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <Header>
        <MenuBar />
      </Header>
      <Main sx={{ paddingTop: `100px` }}>{children}</Main>
      <Footer />
    </ThemeLayout>
  )
}

export default Layout
