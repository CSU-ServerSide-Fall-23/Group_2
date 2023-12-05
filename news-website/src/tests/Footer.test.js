import React from 'react';
import { render } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

test('renders footer component', () => {
    useParams.mockReturnValue({ footer: 'politics' });

    const { getByText } = render(<Footer />);

    const element = getByText(/politics/i);
    expect(element).toBeInTheDocument();
});
