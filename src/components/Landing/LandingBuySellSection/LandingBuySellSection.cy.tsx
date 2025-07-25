import React from 'react'
import LandingBuySellSection from './LandingBuySellSection'

describe('<LandingBuySellSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LandingBuySellSection />)
  })
})