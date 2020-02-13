/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

const trafficatalyst = () => {
  return (
    <div>
      <Helmet>
        <title>
          TEK® Industries | The Best and Most Durable Metal Roof in the Industry
        </title>
        <meta
          name="description"
          content="Our industry leading metal roofs provide homeowners with lifelong durability during severe weather, beauty and exceptional performance."
        />
        <meta
          name="keywords"
          content="metal roof, durable roof, durable metal roof, roof for severe weather, metal roof for bad weather, best roof, beautiful roof, efficient roof, tek roofing, tek roof, tek industries"
        />
        <script src="https://assets.trafficatalyst.com/js/bundle.js"></script>
        <script type="text/javascript">{`
          {
            window.onload = () => {
              var tc = require('TRAFFIX')
              tc.init({
                api_endpoint: 'https://tekroofing.trafficatalyst.wdgital.com',
                api_key: 'KlSAwe2as6I0He3AqOph6pUPREtA2uJ7',
                map_api_key: 'redundant-field',
                old_ga: false,
                gtm: false,
                css_files: ["tekroofing"]
              })
            }
          }
        `}</script>
      </Helmet>
      <div className="traffic-express" sx={{ minHeight: `200px` }}></div>
    </div>
  )
}

export default trafficatalyst
