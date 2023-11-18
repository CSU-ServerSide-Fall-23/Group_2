import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(search)}`); // Navigate to search route
    };

    return (
        <header>
            <div className="container-fluid d-flex justify-content-between align-items-center p-2 flex-column flex-md-row">
                <a className="navbar-brand fw-bolder fs-3 text-uppercase" href="#">The Know</a>
                <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch}/>
                    <button className="btn btn btn-danger" type="submit">Search</button>
                </form>
            </div>
        </header>
    )
}

export default Header