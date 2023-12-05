import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../NewsCard';
import Skeleton from "./Skeleton";
import Error from "./Error";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;

function Category() {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}/top-headlines?country=us&category=${category}&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching news", error);
                setError(error);
                setLoading(false);
            });
    }, [category]);

    if(loading) {
        return <Skeleton />
    }

    if(error) {
        return <Error />
    }

    return (
        <div>
            <h1 className="text-capitalize text-center py-5">{category} News</h1>
            <div className="row gap-3 justify-content-center">
                {articles.map(article => (
                    <div className="col-3" key={article.url}>
                        <NewsCard article={article} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;