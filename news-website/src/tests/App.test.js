import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app less than 50', () => {
  render(<App count={25}/>);
  const linkElement = screen.getByText(/Footer/i);
  expect(linkElement).toBeInTheDocument();
});


