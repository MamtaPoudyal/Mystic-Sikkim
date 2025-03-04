import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './OrderPage.css';

const OrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  useEffect(() => {
    console.log('OrderPage rendered with ID:', id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      if (!/^\d{10}$/.test(value)) {
        setPhoneError('Phone number must be exactly 10 digits long.');
      } else {
        setPhoneError(null);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneError || formData.phone.length !== 10) {
      setError('Phone number must be exactly 10 digits long.');
      return;
    }

    setLoading(true);
    setError(null);
    axios
      .post('http://localhost:5004/orders', formData)
      .then((response) => {
        console.log('Order placed successfully:', response.data);
        alert('Order placed successfully!');
        navigate(`/OrderSummary/${response.data.order.id}`);
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        setError('Error placing order. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="booking-form-container">
      <h2></h2>
      <button className="book-now-btn">BOOK CAB NOW</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pickupLocation"
          placeholder="Enter an origin location"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dropLocation"
          placeholder="Enter a destination location"
          value={formData.dropLocation}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="pickupTime"
          value={formData.pickupTime}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-form-btn">BOOK MY CAB</button>
      </form>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export default OrderPage;
