module.exports = {
  siteMetadata: {
    title: `Tek Roofing`,
    description: `Tek Roofing`,
    author: `Warren Douglas Advertising`,
    logo: `icon.jpg`,
    phone: `773.657.3438`,
    street: `West 7th Street`,
    city: `Fort Worth, TX`,
    zip: `76102`,
    siteUrl: `https://digitalthrive.wdgital.com`,
    menuLinks: [
      {
        name: 'PRODUCTS',
        link: '/products',
      },
      {
        name: 'GALLERY',
        link: '/gallery',
      },
      {
        name: 'DEALER TOOLS',
        link: '/dealers',
      },
    ],
  },
  plugins: [
    {
      resolve: '@digitalthrive/gatsby-theme-template-tek',
      options: {
        contentPath: 'data',
        basePath: '/data',
      },
    },
  ],
}
