import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';

test('renders Nav component', () => {
    const { getByText } = render(
        <Router>
            <Nav />
        </Router>
    );

    expect(getByText('Home')).toBeInTheDocument();
});