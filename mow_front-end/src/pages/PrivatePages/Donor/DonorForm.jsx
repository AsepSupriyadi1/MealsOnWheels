import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/auth-context';


const DonorForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [donorAmount, setDonorAmount] = useState('');

  const { currentUser } = useContext(AuthContext);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      status: 'p',
      donorAmount,
      senderId: currentUser.userId,
    };

    // Make Axios request to the backend endpoint
    axios
      .post('/api/v1/fund/save', formData)
      .then((response) => {
        // Handle the response from the backend
        console.log('Response from backend:', response.data);
        // Reset the form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setDonorAmount('');
        window.location.href = '/thanks';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="box-content donate-form">
              <h4 className="widget-title">
                <span>Enter Sender's Information</span>
              </h4>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <label htmlFor="firstName">
                    First Name: <span>Enter First Name</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="lastName">
                    Last Name: <span>Enter Last Name</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="email">
                    Email: <span>Enter Email Address</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="phoneNumber">
                    Phone Number: <span>Enter Phone Number</span>
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="form-input"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="address">
                    Address: <span>Enter Address</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-input"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </fieldset>
                <input type="hidden" id="status" name="status" value="p" />
                <input type="hidden" id="senderId" name="senderId" value={currentUser.userId} /> {/* Replace with the actual sender ID */}
                <fieldset>
                  <label htmlFor="donorAmount">
                    Donation Amount: <span>Enter The amount you want to donate</span>
                  </label>
                  <input
                    type="text"
                    id="donorAmount"
                    name="donorAmount"
                    className="form-input"
                    value={donorAmount}
                    onChange={(e) => setDonorAmount(e.target.value)}
                    required
                  />
                </fieldset>
                <div className="big-button">
                  <fieldset>
                    <button type="submit" id="submit-button" className="big-white">
                      Submit
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorForm;
