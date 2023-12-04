import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer component', () => {
  render(<Footer />);

  // Test About Us section
  expect(screen.getByText('About Us')).toBeInTheDocument();
  expect(screen.getByText('We are group of students trying to put a news api together.')).toBeInTheDocument();

  // Test Categories section
  expect(screen.getByText('Categories')).toBeInTheDocument();
  ['Politics', 'Technology', 'Entertainment', 'Sports'].forEach(category => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });

  // Test Contact Us section
  expect(screen.getByText('Contact Us')).toBeInTheDocument();
  expect(screen.getByText('Email one: kola_shreya@students.columbusstate.edu')).toBeInTheDocument();
  expect(screen.getByText('4225 University Ave')).toBeInTheDocument();
  expect(screen.getByText('Phone: (706) 507-8800')).toBeInTheDocument();

  // Test Copyright section
  const currentYear = new Date().getFullYear();
  expect(screen.getByText(`© ${currentYear} Group-2 News-API`)).toBeInTheDocument();
});
