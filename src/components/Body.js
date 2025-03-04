import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Body = () => {
  const [tripType, setTripType] = useState("oneway");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched categories:', data);
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/details/${categoryId}`);
  };

  return (
    <div className="body-wrapper">
      <div className="cab-container">
        
        <div className="left-container">
          <div className="form-container">
            <div className="tabs">
              <button className="active">
                <i className="fas fa-car"></i> Cabs
              </button>
            </div>
            <h3 className="title">All India Cab Service</h3>
            <div className="trip-options">
              <button className="active">Outstation</button>
              <button>Local / Airport</button>
            </div>
            <div className="trip-type">
              <label>
                <input type="radio" name="trip" value="round" checked={tripType === "round"} onChange={() => setTripType("round")} />
                Round Trip
              </label>
              <label>
                <input type="radio" name="trip" value="oneway" checked={tripType === "oneway"} onChange={() => setTripType("oneway")} />
                One Way Trip
              </label>
            </div>
            <input type="text" placeholder="Enter pickup city" />
            <input type="text" placeholder="Enter destination city" />
            <button className="add-city">+ Add More City</button>
            <input type="tel" placeholder="Enter mobile number" />
            <button className="book-btn">Check Price & Book Cab</button>
          </div>
        </div>
      </div>
      <section className="categories-section">
        <h2 className="section-title">Categories</h2>
        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p>Error fetching categories: {error}</p>
        ) : (
          <div className="categories-container">
            {categories.map(category => (
              <div key={category.id} className="category-card">
                <img src={category.image} alt={category.title} className="category-image" onClick={() => handleCategoryClick(category.id)} />
                <div className="category-details">
                  <h3 className="category-name">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                  <p className="category-discount">{category.discount}</p>
                  <button className="book-now-btn" onClick={() => handleCategoryClick(category.id)}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Body;
