import React from 'react'
import Headering from '../components/headering'
import Regulators from '../components/regulators'
import CareSteps from '../components/care_steps'
import HeroImage from '../components/contentful_layout_hero_image'
import Footer from '../components/footer'
import MapHero from '../components/map_hero'

export default () => (
  <div>
    <Headering />
    <div>
      <h1>Helping you find care today! Free to use care comparison service.</h1>
    </div>
    <HeroImage />
    <Regulators />
    <CareSteps />
    <MapHero />

    <Footer />
  </div>
)
