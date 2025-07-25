import HeroSection from '@/src/components/Landing/HeroSection';
import { render } from '@testing-library/react'
import { expect } from '@jest/globals'

it('renders HeroSection unchanged', () => {
  const { container } = render(<HeroSection />)
  
  expect(container).toMatchSnapshot()
})