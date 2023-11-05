import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container text-center py-3">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>We are group of students trying to put a news api together.</p>
          </div>
          <div className="col-md-3">
            <h4>Categories</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '5px' }}>Politics</li>
              <li style={{ marginBottom: '5px' }}>Technology</li>
              <li style={{ marginBottom: '5px' }}>Entertainment</li>
              <li style={{ marginBottom: '5px' }}>Sports</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <address>
              <p>Email one: kola_shreya@students.columbusstate.edu</p>
              <p>Email two: mills_maria@students.columbusstate.edu</p>
              <p>Email three: furlong_logan@students.columbusstate.edu</p>
              4225 University Ave<br />
              Columbus, GA 31907<br />
              Phone: (706) 507-8800
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>&copy; {new Date().getFullYear()} Group-2 News-API</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
