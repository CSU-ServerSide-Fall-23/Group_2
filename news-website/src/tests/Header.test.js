import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

// Needs to be wrapped in Router because of useNavigate
const renderWithRouter = (component) => {
  return {
    ...render(<Router>{component}</Router>),
  };
};

test('renders brand name', () => {
  renderWithRouter(<Header />);
  const linkElement = screen.getByText(/The Know/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search button', () => {
  renderWithRouter(<Header />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
