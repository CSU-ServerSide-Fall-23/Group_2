import React from 'react';

const NewsCard = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <img src="assets/images.images.jpg" className="card-img-top" alt="News Image" />
        <div className="card-body">
          <h5 className="card-title">Best Nikon Lenses</h5>
          <p className="card-text">Discover a curated selection of Nikon lenses that will elevate your photography experience. Whether you're a professional photographer or an enthusiast, these lenses offer exceptional image quality and versatility.</p>
          <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
