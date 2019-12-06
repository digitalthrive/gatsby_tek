/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { SymbolDef } from 'terser'
import checkMark from '../components/icons/check-mark.png'

let chartArray = [
  {
    title: '26 GAUGE STEEL CORE',
    standard: true,
    xtreme: true,
    order: 1,
  },
  {
    title: 'ALUMINUM ZINC COATING LAYER',
    standard: true,
    xtreme: true,
    order: 2,
  },
  {
    title: 'COLORFUL STONE COATING',
    standard: true,
    xtreme: true,
    order: 3,
  },
  {
    title: 'CLASS 4 IMPACT RATED',
    standard: true,
    xtreme: true,
    order: 4,
  },
  {
    title: 'CAN BE INSTALLED OVER 1 LAYER EXISTING ROOF',
    standard: true,
    xtreme: true,
    order: 5,
  },
  {
    title: 'CAN BE INSTALLED DIRECT TO DECK',
    standard: true,
    xtreme: true,
    order: 6,
  },
  {
    title: 'CAN BE INSTALLED WITH BATTENS',
    standard: true,
    xtreme: true,
    order: 7,
  },
  {
    title: '120 MILE PER HOUR WIND RATED',
    standard: false,
    xtreme: false,
    order: 8,
  },
  {
    title: '140 MILE PER HOUR WIND RATED',
    standard: true,
    xtreme: true,
    order: 9,
  },
  {
    title: 'EXPOSED FASTENER',
    standard: true,
    xtreme: false,
    order: 10,
  },
  {
    title: 'HIDDEN FASTENER',
    standard: false,
    xtreme: true,
    order: 11,
  },
  {
    title: 'HIP AND RIDGE STANDARD',
    standard: false,
    xtreme: false,
    order: 12,
  },
  {
    title: 'METAL PRO-XRIDGE CAP - HIGH PERFORMANCE',
    standard: true,
    xtreme: true,
    order: 13,
  },
  {
    title: 'COLOR COORDINATED EAVE TRIM',
    standard: true,
    xtreme: true,
    order: 14,
  },
  {
    title: 'COLOR COORDINATED VALLEY METAL',
    standard: true,
    xtreme: true,
    order: 15,
  },
  {
    title: 'COLOR COORDINATED RAKE TRIM',
    standard: true,
    xtreme: true,
    order: 16,
  },
  {
    title: 'INSTALLED WITH NAILS',
    standard: true,
    xtreme: true,
    order: 17,
  },
  {
    title: 'INSTALLED WITH TEK® SCREWS',
    standard: true,
    xtreme: true,
    order: 18,
  },
  {
    title: 'CAN REMOVE EXISTING ROOF',
    standard: true,
    xtreme: true,
    order: 19,
  },
  {
    title: 'INSTALLED WITH UNDERLAYMENT',
    standard: true,
    xtreme: true,
    order: 20,
  },
  {
    title: 'FOAM INSULATION',
    standard: true,
    xtreme: true,
    order: 21,
  },
  {
    title: '30 YEAR LIMITED WARRANTY',
    standard: false,
    xtreme: false,
    order: 22,
  },
  {
    title: '50 YEAR LIMITED LIFETIME WARRANTY',
    standard: true,
    xtreme: true,
    order: 23,
  },
  {
    title: 'WALKABILITY',
    standard: true,
    xtreme: true,
    order: 24,
  },
  {
    title: 'COOLER ATTIC GUARANTEE',
    standard: true,
    xtreme: true,
    order: 25,
  },
]

let tableRows = chartArray.map((row, index) => {
  let rowColor
  if (index % 2 === 0) {
    rowColor = `#676767`
  } else {
    rowColor = `none`
  }
  return (
    <tr>
      <td
        sx={{
          borderLeft: `2px solid`,
          borderRight: `2px solid`,
          borderTop: `none`,
          borderBottom: `none`,
          borderColor: `text`,
          borderCollapse: `collapse`,
          backgroundColor: rowColor,
        }}
      >
        <p sx={{ color: `text` }}>{row.title}</p>
      </td>
      <td
        sx={{
          borderLeft: `2px solid`,
          borderRight: `2px solid`,
          borderTop: `none`,
          borderBottom: `none`,
          borderColor: `text`,
          borderCollapse: `collapse`,
          backgroundColor: rowColor,
        }}
      >
        {row.standard ? (
          <img
            src={checkMark}
            alt="Check mark"
            sx={{ verticalAlign: `middle` }}
          />
        ) : null}
      </td>
      <td
        sx={{
          borderLeft: `2px solid`,
          borderRight: `2px solid`,
          borderTop: `none`,
          borderBottom: `none`,
          borderColor: `text`,
          borderCollapse: `collapse`,
          backgroundColor: rowColor,
        }}
      >
        {row.xtreme ? (
          <img
            src={checkMark}
            alt="Check mark"
            sx={{ verticalAlign: `middle` }}
          />
        ) : null}
      </td>
    </tr>
  )
})

const comparisontable = () => {
  return (
    <table
      sx={{
        width: `100%`,
        border: `2px solid`,
        borderColor: `text`,
        borderCollapse: `collapse`,
        textAlign: `center`,
        margin: `5% 0`,
      }}
    >
      <thead>
        <th sx={{ bg: `text` }}></th>
        <th sx={{ bg: `text` }}>
          <Styled.h3
            sx={{
              color: 'primary',
              margin: `0`,
              padding: `0`,
              fontSize: ['2', '2', '2', '3', '3'],
            }}
          >
            BEST RATED FOR SEVERE WEATHER
          </Styled.h3>
        </th>
        <th sx={{ bg: `text` }}>
          <Styled.h3
            sx={{
              color: 'primary',
              margin: `0`,
              padding: `0`,
              fontSize: ['2', '2', '2', '3', '3'],
            }}
          >
            HIDDEN FASTENER TECHNOLOGY
          </Styled.h3>
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
            <Styled.h3
              sx={{
                margin: `0`,
                padding: `0`,
                color: 'text',
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              KEY DIFFERENCES
            </Styled.h3>
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
          ></td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          ></td>
        </tr>
        {tableRows}
      </tbody>
    </table>
  )
}

export default comparisontable
