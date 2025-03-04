import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${categoryId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCategory(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching category details:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <p>Loading category details...</p>;
  }

  if (error) {
    return <p>Error fetching category details: {error}</p>;
  }

  if (!category || !category.items) {
    return <p>No category details found.</p>;
  }

  return (
    <div className="details-page-container"> {/* Apply the new class here */}
      <div className="category-details">
        <div className="items-container">
          {category.items.map((item) => (
            <div key={item.id} className="hotel-card">
              <div className="hotel-image-container">
                <img src={item.image} alt={item.title} className="hotel-image" />
              </div>
              <div className="hotel-info">
                <div className="hotel-description">
                  <h3>{item.title}</h3>
                  <div className="hotel-location">{item.location}</div>
                  <div className="hotel-offers">
                    {item.offers.map((offer, index) => (
                      <span key={index} className="offer">{offer}</span>
                    ))}
                  </div>
                </div>
                <div className="hotel-price-review">
                  <div className="hotel-rating">
                    <span className={`rating ${item.rating >= 8 ? "excellent" : "good"}`}>
                      {item.rating} {item.rating >= 8 ? "Excellent" : "Very good"}
                    </span>
                    <span className="reviews">({item.reviews} reviews)</span>
                  </div>
                  <div className="hotel-price">
                    <span className="price">Rs. {item.price}</span>
                    {item.discount && <span className="discount">-{item.discount}%</span>}
                    <span className="availability">ONLY {item.availability} LEFT</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
