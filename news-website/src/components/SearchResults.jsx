import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewsCard from "../NewsCard";
import Skeleton from "./Skeleton";
import Error from "./Error";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;

function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(searchQuery)}&apikey=${API_KEY}`);
                const data = await response.json();
                setSearchResults(data.articles || []);
                setLoading(false);
            } catch (error) {
                // Handle error
                console.error("Error fetching search results", error);
                setError(error);
            }
        };

        fetchData();
    }, [searchQuery]);

    if(loading) {
        return <Skeleton />
    }

    if(error) {
        return <Error />
    }

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