/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'

const button = props => {
  return (
    <Link
      to={props.destination}
      sx={{
        textDecoration: `none`,
      }}
    >
      <div
        sx={{
          color: 'text',
          bg: 'none',
          fontFamily: 'heading',
          fontSize: 1,
          letterSpacing: 1,
          width: `fit-content`,
          textAlign: `center`,
          padding: 0,
          lineHeight: `header`,
          border: `2px solid`,
          borderColor: `${props.borderColor}`,
        }}
      >
        <p
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 2,
            paddingBottom: 2,
            margin: 0
          }}
        >
          {props.buttonText}
        </p>
      </div>
    </Link>
  )
}

export default button
