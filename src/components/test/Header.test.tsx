import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders the header with the correct text', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Porto Burger/i);
    expect(headerElement).toBeInTheDocument();
  });
});