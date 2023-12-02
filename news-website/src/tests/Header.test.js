import {fireEvent, render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Header Component', () => {
  it('navigates to search page on form submission', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);

    const { getByPlaceholderText, getByRole } = render(<Header />);

    // user typing
    const searchInput = getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    const form = getByRole('search');
    fireEvent.submit(form);

    // expect navigation to search page
    expect(mockNavigate).toHaveBeenCalledWith('/search?q=test');
  });
});
