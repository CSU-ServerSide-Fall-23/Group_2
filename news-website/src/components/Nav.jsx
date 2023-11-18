import React from 'react';
import Category from './Category'; // Import the Category component

const Nav = ({ onCategoryChange }) => {
  const categories = ['Home', 'Business', 'Entertainment', 'General', 'Health', 'Science', 'Technology'];

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black p-1 border-bottom border-secondary border-opacity-50">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
            {categories.map((category) => (
              <Category key={category} name={category} onClick={handleCategoryClick} />
            ))}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Support</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
