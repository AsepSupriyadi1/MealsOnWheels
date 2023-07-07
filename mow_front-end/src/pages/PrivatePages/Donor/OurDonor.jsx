import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OurDonor = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get('/api/v1/fund/funds');
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  return (
    <div className="container" style={{ padding: '0 20px' }}>
      <div className="d-flex justify-content-center mb-4 mt-5">
        <h1>Thank you for the donation!</h1>
      </div>
      <div className="row">
        {donations.map((donation) => (
          donation.status === 'a' && (
            <div key={donation.id} className="col-md-4 mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{donation.firstName} {donation.lastName}</h5>
                  <p className="card-text">Amount: {donation.donorAmount}$</p>
                  <p className="card-text">Email: {donation.email}</p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default OurDonor;