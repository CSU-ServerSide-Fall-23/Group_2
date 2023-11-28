import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewsCard from "../NewsCard";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;

function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(searchQuery)}&apikey=${API_KEY}`);
                const data = await response.json();
                setSearchResults(data.articles || []);
            } catch (error) {
                // Handle error
                console.error("Error fetching search results", error);
            }
        };

        fetchData();
    }, [searchQuery]);

    return (
        <div className="container text-center my-4">
            <h1>Search Results for {searchQuery}</h1>
            <div className="row">
                {searchResults.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    searchResults.map((article, index) => (
                        <div className="col-md-3" key={article.url || index}>
                            <NewsCard article={article} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default SearchResults;