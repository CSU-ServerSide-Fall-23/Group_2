import React from 'react';
import Footer from './Footer';
import Nav from "./components/Nav";
import Header from './components/Header';
import {Outlet} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
