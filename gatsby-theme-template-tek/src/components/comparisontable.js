/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { SymbolDef } from 'terser'
import checkMark from '../components/icons/check-mark.png'

const comparisontable = () => {
  return (
    <table
      sx={{
        width: `100%`,
        border: `2px solid`,
        borderColor: `text`,
        borderCollapse: `collapse`,
        textAlign: `center`,
        margin: `5% 0`
      }}
    >
      <thead>
        <th sx={{ bg: `text` }}></th>
        <th sx={{ bg: `text` }}>
          <Styled.h3 sx={{ color: "primary", margin: `0`, padding: `0`, fontSize: ['2', '2', '2', '3', '3'] }}>BEST RATED FOR SEVERE WEATHER</Styled.h3>
        </th>
        <th sx={{ bg: `text` }}>
          <Styled.h3 sx={{ color: "primary", margin: `0`, padding: `0`, fontSize: ['2', '2', '2', '3', '3'] }}>HIDDEN FASTENER TECHNOLOGY</Styled.h3>
        </th>
      </thead>
      <tbody>
        <tr>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3 sx={{ margin: `0`, padding: `0`, color: "text", fontSize: ['2', '2', '2', '3', '3'] }}>KEY DIFFERENCES</Styled.h3>
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <img src={checkMark} alt="Check mark" sx={{ verticalAlign: `middle` }} />
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <img src={checkMark} alt="Check mark" sx={{ verticalAlign: `middle` }} />
          </td>
        </tr>
        <tr>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <p>20 Gauge Steel Core</p>
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <img src={checkMark} alt="Check mark" sx={{ verticalAlign: `middle` }} />
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <img src={checkMark} alt="Check mark" sx={{ verticalAlign: `middle` }} />
          </td>
        </tr>
        <tr>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <p>Thingie</p>
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <img src={checkMark} alt="Check mark" sx={{ verticalAlign: `middle` }} />
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <img src={checkMark} alt="Check mark" sx={{ verticalAlign: `middle` }} />
          </td>
        </tr>
        <tr>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <p>Thingie</p>
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <img src={checkMark} alt="Check mark" sx={{ verticalAlign: `middle` }} />
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <img src={checkMark} alt="Check mark" sx={{ verticalAlign: `middle` }} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default comparisontable
