/** @jsx jsx */
import React from 'react'
import { Layout as ThemeLayout, Header, Main, jsx } from 'theme-ui'
import MenuBar from '../components/menubar'
import Footer from '../components/footer'
import './layout.css'

// Workaround to enable netlify form in modal to function

const ContactHidden = () => {
  return (
    <div sx={{ display: `none` }}>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <input type="tel" placeholder="Phone (555-555-5555)" name="telephone" />
        <textarea name="message"></textarea>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

const DealerHidden = () => {
  return (
    <div sx={{ display: `none` }}>
      <form
        name="dealer"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="dealer" />
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="dealer" />
        <input type="text" placeholder="Company Name" name="company_name" />
        <input
          type="text"
          placeholder="Company Address"
          name="company_address"
        />
        <input
          type="text"
          placeholder="Company Website"
          name="company_website"
        />
        <input type="text" placeholder="Contact Name" name="contact_name" />
        <select name="role">
          <option value="none">Choose Role</option>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
        <input type="email" placeholder="Email" name="email" />
        <input type="phone" placeholder="Phone (optional)" name="phone" />
        <input type="radio" name="years_in_business" value="1-5" /> 1-5
        <input type="radio" name="years_in_business" value="6-10" /> 6-10
        <input type="radio" name="years_in_business" value="11-15" /> 11-15
        <input type="radio" name="years_in_business" value="15+" /> 15+
        <textarea name="how_did_you_hear_about_TEK"></textarea>
        <textarea name="describe_why_you_are_for_for_a_dealer"></textarea>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

/////

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <Header>
        <ContactHidden />
        <DealerHidden />
        <MenuBar />
      </Header>
      <Main sx={{ paddingTop: `100px` }}>{children}</Main>
      <Footer />
    </ThemeLayout>
  )
}

export default Layout
