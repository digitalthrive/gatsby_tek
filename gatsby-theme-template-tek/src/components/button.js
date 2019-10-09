/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'

const button = props => {
  return (
    <Link to={props.destination} sx={{ textDecoration: `none` }}>
      <div
        sx={{
          color: 'text',
          bg: 'rgba(0,0,0,0.4)',
          width: `fit-content`,
          margin: `auto`,
          marginTop: [0, 0, 4],
          marginBottom: [5, 4, 0],
          textAlign: `center`,
          padding: 3,
          borderRadius: `default`,
          lineHeight: `header`,
          border: `none`,
          borderColor: `primary`,
          boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
        }}
      >
        {props.buttonText}
      </div>
    </Link>
  )
}

export default button
