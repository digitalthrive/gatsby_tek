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
          bg: 'primary',
          fontFamily: 'heading',
          fontSize: `2` + "5px",
          letterSpacing: 1,
          width: `fit-content`,
          margin: `auto`,
          textAlign: `center`,
          padding: 0,
          lineHeight: `header`,

          border: `none`,
          borderColor: `primary`,
          boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
        }}
      >
        <p
          sx={{
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 1,
            paddingBottom: 1,
          }}
        >
          {props.buttonText}
        </p>
      </div>
    </Link>
  )
}

export default button
