import React from 'react';
import { render } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import Category from '../components/Category';

// Mock useParams
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

test('renders category component', () => {
    useParams.mockReturnValue({ category: 'technology' });

    const { getByText } = render(<Category />);

    const element = getByText(/technology news/i);
    expect(element).toBeInTheDocument();
});

test('renders any category', () => {
    useParams.mockReturnValue({ category: 'test' });

    const { getByText } = render(<Category />);

    const element = getByText(/test news/i);
    expect(element).toBeInTheDocument();
});
