import React from 'react';
import { render } from '@testing-library/react';
import FeaturedNews from '../components/FeaturedNews';

test('renders FeaturedNews component', () => {
    const { getByText } = render(<FeaturedNews />);
    expect(getByText('Happening Now')).toBeInTheDocument();
});
