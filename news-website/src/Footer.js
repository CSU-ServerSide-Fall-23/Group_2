import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container text-center py-3">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
