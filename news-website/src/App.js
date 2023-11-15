import React from 'react';
import Footer from './Footer';
import NewsCard from './NewsCard';
import Nav from "./components/Nav";
import Header from './components/Header';
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

            <Footer />
            <NewsCard />
        </div>
    );
}

export default App;
