import React from 'react';
import Footer from './Footer';
import NewsCard from './NewsCard';
import Nav from "./components/Nav";
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import FeaturedNews from "./components/FeaturedNews";
import Category from './components/Category/Category';


function App() {
    const categories = [
        {
            name: 'Technology',
            description: 'The latest in tech news.',
        },
        {
            name: 'Sports',
            description: 'Stay updated with the latest sports events.',
        },
    ];

    const newsItems = [

        {
            title: 'Breaking News 1',
            description: 'A brief description of the breaking news.',
            link: 'https://example.com/news1',
        },
        {
            title: 'Interesting Article',
            description: 'Check out this interesting article.',
            link: 'https://example.com/article',
        },
    ];

    return (
        <div className="App">
            <Header />
            <Nav />
            <FeaturedNews />

            {/* Render categories */}
            {categories.map((category, index) => (

                <Category
                key={index}
                categoryName={category.name}
                categoryDescription={category.description}
                />
            ))}

            {/* Render news feed */}
            <NewsFeed newsItems={newsItems} />    

            <Footer />
            <NewsCard />
        </div>
    );
}

export default App;
