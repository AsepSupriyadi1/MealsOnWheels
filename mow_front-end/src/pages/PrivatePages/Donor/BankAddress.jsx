import React from 'react';

const BankAddress = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Thank You for Your Contribution!</h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Please complete the payment of your donation amount via bank transfer to the following account:
      </p>
      <div style={{ fontSize: '18px', marginBottom: '20px' }}>
        <p>Bank: CIMB Niaga</p>
        <p>Account Number: 1234567890</p>
        <p>Account Holder: Darren Farrell</p>
      </div>
      <p style={{ fontSize: '18px' }}>
        Once the transfer is complete, your contribution will be acknowledged. Thank you for your support!
      </p>
    </div>
  );
};

export default BankAddress;