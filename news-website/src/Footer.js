import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container text-center py-3">
        <p>&copy; {new Date().getFullYear()} Group-2 News-API</p>
      </div>
    </footer>
  );
};

export default Footer;
