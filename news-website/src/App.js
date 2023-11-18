import React from 'react';
import Footer from './Footer';
import Nav from "./components/Nav";
import Header from './components/Header';
import FeaturedNews from "./components/FeaturedNews";


function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <FeaturedNews />
            <Footer />
        </div>
    );
}

export default App;
