import React from 'react'
import Spotlight from './spotlight/components/page'
import EnjoyOnTv from './EnjoyOnTv/component/page'
// import FooterCntnt from './footer/components/footerCntnt'
import Footer from './footer/components/page'

export default function MainHome() {
  return (
    <div>
    	<Spotlight/>
      <EnjoyOnTv/>
      <Footer/>
    </div>
  )
}
