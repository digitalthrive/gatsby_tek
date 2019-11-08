/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { SymbolDef } from 'terser'

const comparisontable = () => {
  return (
    <table
      sx={{
        width: `100%`,
        border: `2px solid`,
        borderColor: `text`,
        borderCollapse: `collapse`,
        textAlign: `center`
      }}
    >
      <thead>
        <th sx={{ bg: `text` }}></th>
        <th sx={{ bg: `text` }}>
          <Styled.h3 sx={{ color: "primary", margin: `0`, padding: `0` }}>BEST RATED FOR SEVERE WEATHER</Styled.h3>
        </th>
        <th sx={{ bg: `text` }}>
          <Styled.h3 sx={{ color: "primary", margin: `0`, padding: `0` }}>HIDDEN FASTENER TECHNOLOGY</Styled.h3>
        </th>
      </thead>
      <tbody>
        <tr>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3 sx={{ margin: `0`, padding: `0`, color: "text", fontSize: "3" }}>KEY DIFFERENCES</Styled.h3>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <p>Image Placeholder</p>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <p>Image Placeholder</p>
          </td>
        </tr>
        <tr>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <p>20 Gauge Steel Core</p>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <p>circlegraphic</p>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <p>Image Placeholder</p>
          </td>
        </tr>
        <tr>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <p>Thingie</p>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <p>Thingie</p>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <p>Thingie</p>
          </td>
        </tr>
        <tr>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <p>Thingie</p>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <p>circlegraphic</p>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `text`,
              borderCollapse: `collapse`,
              backgroundColor: `#676767`
            }}
          >
            <p>Thingie</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default comparisontable
