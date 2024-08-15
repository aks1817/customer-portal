import React, { useState, useEffect } from "react";
import { Customer } from "../types/Customer";
import axios from "axios";
import "./CustomerDetails.css";

interface Props {
  customer: Customer;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              count: 9,
              client_id: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
            },
          }
        );
        const urls = response.data.map((photo: any) => photo.urls.small);
        setPhotos(urls);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();

    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, [customer]);

  return (
    <div className="customer-details-container">
      <div className="customer-info">
        <h2>{customer.name}</h2>
        <h4>{customer.title}</h4>
        <p className="customer-address">{customer.address}</p>
      </div>
      <div className="photo-grid">
        {photos.map((url, index) => (
          <div key={index} className="photo-grid-item">
            <img src={url} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
