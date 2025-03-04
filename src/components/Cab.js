import React from 'react';
import { Link } from 'react-router-dom';
import './css/lux.css';

const packages = [
  { days: 7,
    name: "Gangtok, Pelling & Darjeeling",
    details: "Gangtok (3N) - Pelling (1N) - Darjeeling (2N)",
    price: "29,500",
    img: "north.jpg",
    link: "/OrderPage/gangtok-pelling-darjeeling"
  },
  { days: 6, 
    name: "Gangtok & Darjeeling",
    details: "Gangtok (3N) - Darjeeling (2N)",
    price: "23,500",
    img: "image2.jpg",
    link: "/OrderPage/gangtok-darjeeling"
  },
  { days: 8,
    name: "Gangtok, Lachung & Darjeeling",
    details: "Gangtok (4N) - Lachung (1N) - Darjeeling (2N)", 
    price: "N/A",
    img: "image3.jpg",
    link: "/OrderPage/gangtok-lachung-darjeeling"
  },
  { days: 6,
    name: "Gangtok & Pelling",
    details: "Gangtok (3N) - Pelling (2N)",
    price: "25,500",
    img: "image4.jpg",
    link: "/OrderPage/gangtok-pelling"
  },
  { days: 7, 
    name: "North Sikkim", 
    details: "Gangtok (3N) - Lachen (1N) - Lachung (1N)", 
    price: "N/A", 
    img: "image5.jpg",
    link: "/OrderPage/north-sikkim"
  },
  { days: 9,
    name: "North Sikkim, Pelling & Darjeeling", 
    details: "Gangtok (3N) - Lachung (1N) - Pelling (2N) - Darjeeling (2N)",
    price: "N/A",
    img: "image6.jpg",
    link: "/OrderPage/north-sikkim-pelling-darjeeling"
  },
  { days: 7,
    name: "North Sikkim", 
    details: "Gangtok (3N) - Lachen (1N) - Lachung (1N)", 
    price: "N/A",
    img: "image5.jpg",
    link: "/OrderPage/north-sikkim"
  },
  { days: 9, 
    name: "North Sikkim, Pelling & Darjeeling", 
    details: "Gangtok (3N) - Lachung (1N) - Pelling (2N) - Darjeeling (2N)", 
    price: "N/A",
    img: "image6.jpg",
    link: "/OrderPage/north-sikkim-pelling-darjeeling"
  }
];

const Cab = () => {
  return (
    <div className="container">
      <h1 className="title">CAB SERVICES</h1>
      <div className="grid-container">
        {packages.map((pkg, index) => (
          <div key={index} className="card">
            <img src={pkg.img} alt={pkg.name} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{pkg.days} DAYS</h2>
              <p className="card-text">{pkg.name}</p>
              <p className="card-details">{pkg.details}</p>
              <p className="card-price">Starting @ Rs. {pkg.price}</p>
              <Link to={pkg.link} className="view-button">VIEW PACKAGE</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cab;
