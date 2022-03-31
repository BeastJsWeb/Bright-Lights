import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Bold from '../../fonts/PoppinsBold.woff2'
import Medium from '../../fonts/PoppinsMedium.woff2'
import Regular from '../../fonts/PoppinsRegular.woff2'
import SemiBold from '../../fonts/PoppinsSemiBold.woff2'

const fontFamily = [ Bold, Medium, Regular, SemiBold ]

export default class Preloader extends Component {
  render () {
    return (
      <Helmet>
        {fontFamily.map((font, key) => (
          <link {...key } 
          rel="preload" 
          href={ font } 
          as="font" 
          type="font/woff2" 
          crossorigin 
          />
        ))}
      </Helmet>
    )
  }
}