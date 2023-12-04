import { render, screen, waitFor } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import SearchResults from '../components/SearchResults';

// Mocking useLocation
jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
}));

describe('SearchResults', () => {
    const searchQuery = 'test';

    // clear mocks before each test
    beforeEach(() => {
        useLocation.mockImplementation(() => ({
            search: `?q=${searchQuery}`,
        }));

        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({ articles: [
                    {
                        source: {
                            name: 'Test',
                            publishAt: '2023-12-04',
                        },
                    }
                ]}),
        }));
    });

    it('renders no results', async () => {
        render(<SearchResults />);

        await waitFor(() => expect(screen.getByText(/no results found/i)).toBeInTheDocument());
    });

    it('renders results', async () => {
        render(<SearchResults />);

        await waitFor(() => {
            expect(screen.getByText(/Search Results for test/i)).toBeInTheDocument();
        });
    });
});