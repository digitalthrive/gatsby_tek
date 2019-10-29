export const theme = {
  initialColorMode: 'default',
  space: [0, 4, 8, 16, 32, 75],
  fonts: {
    body: 'Kannada Sangam MN, system-ui, sans-serif',
    heading: `Bebas Neue, system-ui, sans-serif`,
  },
  fontSizes: [19, 25, 45, 72, 93, 120, 173],
  lineHeights: {
    body: 1.45,
    heading: 0.9,
  },
  breakpoints: ['500px', '768px', '1024px', '1200px', '1600px'],
  colors: {
    text: '#fff',
    background: '#fff',
    primary: '#d23a00',
    secondary: '#565656',
    muted: '#f6f6f6',
    highlight: '#efeffe', // '#ffffcc',
    gray: '#777',
    accent: '#8E8D8E',
    overlay: 'hsla(240, 85%, 57%, 50%)',
    modes: {
      // dark: {
      //   text: '#fff',
      //   background: '#060606',
      //   primary: '#3cf',
      //   secondary: '#e0f',
      //   muted: '#191919',
      //   highlight: '#29112c',
      //   gray: '#999',
      //   accent: '#3cf',
      //   overlay: 'hsla(195, 100%, 60%, 50%)',
      // },
      // deep: {
      //   text: 'hsl(210, 50%, 96%)',
      //   background: 'hsl(230, 25%, 18%)',
      //   primary: 'hsl(260, 100%, 80%)',
      //   secondary: 'hsl(290, 100%, 80%)',
      //   highlight: 'hsl(260, 20%, 40%)',
      //   accent: 'hsl(290, 100%, 80%)',
      //   muted: 'hsla(230, 20%, 0%, 20%)',
      //   gray: 'hsl(210, 50%, 60%)',
      //   overlay: 'hsla(260, 100%, 80%, 50%)',
      // },
    },
  },
  sizes: {
    default: '90vw',
    mid: '85%',
    max: '800px',
  },
  radii: {
    default: `5px`,
  },
  styles: {
    Layout: {
      fontFamily: 'body',
    },
    Header: {
      margin: 0,
      padding: 0,
    },
    Footer: {
      borderTop: `1px solid`,
      borderColor: `accent`,
      borderCollaps: `collapse`,
    },
    Container: {
      maxWidth: 1600,
      width: ['95vw', '95vw', '100%'],
      padding: 0,
      marginTop: 0,
      marginBottom: 0,
      minHeight: ['0', '0', '0'],
    },
    h1: {
      color: 'primary',
      fontSize: 4,
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontFamily: 'heading',
      paddingBottom: 4,
    },
    h2: {
      color: 'secondary',
      fontSize: 2,
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontFamily: 'heading',
      paddingBottom: 4,
    },
    h3: {
      color: 'grey',
      fontSize: 1,
      fontWeight: 'bold',
      lineHeight: 'body',
      fontFamily: 'body',
      paddingBottom: 4,
    },
    p: {
      color: 'text',
      fontSize: 0,
      lineHeight: 'body',
      fontFamily: 'body',
      paddingBottom: 1,
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    li: {
      '&:not(:last-child):after': {
        content: '"|"',
        color: 'primary',
        paddingLeft: 4,
        paddingRight: 4,
      },
    },
  },
}

export default theme
