/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { SymbolDef } from 'terser'
import checkMark from '../components/icons/check-mark.png'

const comparisontable = () => {
  return (
    <div sx={{ overflowX: `auto` }}>
      <table
        sx={{
          width: `100%`,
          border: `2px solid`,
          borderColor: `primary`,
          borderCollapse: `collapse`,
          textAlign: `center`,
          margin: `5% 0`,
        }}
      >
        <thead>
          <th
            sx={{
              bg: `text`,
              borderRight: `2px solid`,
              borderColor: `primary`,
              padding: `1%`,
            }}
          >
            <Styled.h3
              sx={{
                color: 'primary',
                margin: `0`,
                padding: `0`,
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              IMPACT #
            </Styled.h3>
          </th>
          <th
            sx={{
              bg: `text`,
              borderRight: `2px solid`,
              borderColor: `primary`,
              padding: `1%`,
            }}
          >
            <Styled.h3
              sx={{
                color: 'primary',
                margin: `0`,
                padding: `0`,
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              IMPACT AREA
            </Styled.h3>
          </th>
          <th
            sx={{
              bg: `text`,
              borderRight: `2px solid`,
              borderColor: `primary`,
              padding: `1%`,
            }}
          >
            <Styled.h3
              sx={{
                color: 'primary',
                margin: `0`,
                padding: `0`,
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              DEPRESSION DEPTH
            </Styled.h3>
          </th>
          <th
            sx={{
              bg: `text`,
              borderRight: `2px solid`,
              borderColor: `primary`,
              padding: `1%`,
            }}
          >
            <Styled.h3
              sx={{
                color: 'primary',
                margin: `0`,
                padding: `0`,
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              OBSERVATIONS
            </Styled.h3>
          </th>
          <th sx={{ bg: `text`, padding: `1%` }}>
            <Styled.h3
              sx={{
                color: 'primary',
                margin: `0`,
                padding: `0`,
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              RESULTS
            </Styled.h3>
          </th>
        </thead>
        <tbody>
          <tr>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fff`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                1
              </p>
            </td>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fff`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                Top left seam where overlap occurs
              </p>
            </td>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fff`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                0.125”
              </p>
            </td>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fff`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                No visible evidence of tearing, cracking, fracturing, splitting,
                <br />
                rupture, crazing, or other evidence of opening in the prepared
                roof covering layer.
              </p>
            </td>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fff`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                PASS
              </p>
            </td>
          </tr>

          <tr>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fdf4f1`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                1
              </p>
            </td>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fdf4f1`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                Top left seam where overlap occurs
              </p>
            </td>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fdf4f1`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                0.125”
              </p>
            </td>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fdf4f1`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                No visible evidence of tearing, cracking, fracturing, splitting,
                <br />
                rupture, crazing, or other evidence of opening in the prepared
                roof covering layer.
              </p>
            </td>
            <td
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fdf4f1`,
                color: `secondary`,
              }}
            >
              <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
                PASS
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default comparisontable
