import React, { useEffect, useState } from 'react';
import axios from "axios";
import placeholder from '../assets/images/news-placeholder.jpg';
import NewsFeed from "../NewsFeed";

function FeaturedNews() {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;

    const [newsArticles, setNewsArticles] = useState([]);
    const [loading, setLoading] = useState(true); // to be used later for loading indicator ?
    const [error, setError] = useState(null); // to be used later with error component ?

    useEffect(() => {
        axios
            .get(
                `${API_BASE_URL}/top-headlines?category=general&lang=en&apikey=${API_KEY}`
            )
            .then((response) => {
                setNewsArticles(response.data.articles);
                setLoading(false);
                console.log(response.data.articles);
            })
            .catch((error) => {
                console.error("Error fetching news for featured", error);
                setError(error);
                setLoading(false);
            });
    }, []);


    return (
        <section id="breaking-news">
            <div className="container-fluid d-grid bg-black">
                <div className="text-center">
                </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 p-0">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {newsArticles.slice(2).map((article, index) => (
                                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={article.url}>
                                            <a href={article.url} target="_blank">
                                                <div className="image-overlay"></div>
                                                <img src={article.image || placeholder} className="d-block w-100" alt={article.title} style={{ maxHeight: '750px', height: '750px', objectFit: 'cover' }}/>
                                            </a>
                                            <div className="d-block carousel-caption">
                                                <h5 className="fw-bolder">{article.title}</h5>
                                            </div>
                                            <button className="btn btn-danger breaking-news-button btn-sm fw-bolder text-uppercase">Breaking News</button>
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mx-auto">
                            <div className="d-flex flex-column flex-grow-1 gap-4 gap-xl-3 my-4 px-md-3 mx-auto mx-xl-5">
                                <h1 className="text-md-start text-white fw-bolder text-uppercase text-sm-center m-0">Happening Now</h1>
                                {newsArticles.slice(0, 2).map((article) => (
                                    <div className="card text-bg-dark" key={article.url}>
                                        <img src={article.image || placeholder} className="card-img" alt={article.title || "Untitled"} />
                                        <div className="card-img-overlay d-flex align-items-end justify-content-start gap-3">
                                            <p className="card-title m-0">{article.source.name ? `${article.source.name.substring(0, 10)}...` : 'Untitled'}</p>
                                            <p className="card-text">{article.publishedAt ? article.publishedAt.substring(0, 10) : ''}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                <NewsFeed articles={newsArticles} />
            </div>
        </section>
    )
}

export default FeaturedNews
