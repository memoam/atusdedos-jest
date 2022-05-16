import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

beforeEach(() => { render(<Home />) })
describe('Home', () => {
  it('must display a title', () => {
      expect(screen.queryByText(/AtusDedos/i)).toBeInTheDocument();
  })
})
