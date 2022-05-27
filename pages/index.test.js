
import { render, screen } from '@testing-library/react'
import Home from './index'

describe('The Home Page Component', () => {
  it('should have exactly 1 `main` section', () => {
    render(<Home />)
    const main = screen.getByTestId('main')
    expect(main).toBeInTheDocument()
  })
})