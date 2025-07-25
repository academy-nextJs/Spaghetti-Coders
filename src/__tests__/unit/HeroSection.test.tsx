import { render, screen } from '@testing-library/react'
import HeroSection from '@/src/components/Landing/HeroSection'
import { expect } from '@jest/globals'

describe('HeroSection', () => {
  it('renders an Image', () => {
    render(<HeroSection />)
    
    const img = screen.getByAltText("Modern apartment building")

    expect(img).toBeInTheDocument()
  })
})