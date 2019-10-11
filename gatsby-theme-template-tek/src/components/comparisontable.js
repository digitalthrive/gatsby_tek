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
        borderColor: `primary`,
        borderCollapse: `collapse`,
      }}
    >
      <thead>
        <th></th>
        <th sx={{ bg: `primary` }}>
          <Styled.h3>BEST RATED FOR SEVERE WEATHER</Styled.h3>
        </th>
        <th sx={{ bg: `primary` }}>
          <Styled.h3>HIDDEN FASTENER TECHNOLOGY</Styled.h3>
        </th>
      </thead>
      <tbody>
        <tr>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3>KEY DIFFERENCES</Styled.h3>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3>Image Placeholder</Styled.h3>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3>Image Placeholder</Styled.h3>
          </td>
        </tr>
        <tr>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3>20 Gauge Steel Core</Styled.h3>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3></Styled.h3>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3>Image Placeholder</Styled.h3>
          </td>
        </tr>
        <tr>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3>Thingie</Styled.h3>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3>'Image Placeholder'</Styled.h3>
          </td>
          <td
            sx={{
              border: `2px solid`,
              borderColor: `primary`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3>Image Placeholder</Styled.h3>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default comparisontable
