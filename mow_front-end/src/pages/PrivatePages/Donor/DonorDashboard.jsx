import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Testimonial, gallery, resources } from "../../../assets/images/Images";
import { AuthContext } from '../../../context/auth-context';

const DonorDashboard = () => {
  const [donations, setDonations] = useState([]);
  const { currentUser } = useContext(AuthContext);

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

  const getStatusMessage = (status) => {
    if (status === 'p') {
      return 'Your payment is pending. If you have made your payment, please wait for our admin to verify it.';
    } else if (status === 'a') {
		return 'We have received your payment. Thank you for your generous donation.';
	}
    return '';
  };

  return (
    <>
      <div className="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title d-none d-lg-block">Donator</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="/home">&larr; Go back Home</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div class="col-md-4">
            <div style={{ paddingTop: "30px" }}>
              <img src={resources.logo1} height={200} style={{ width: "100%", backgroundColor: "#6b9262", padding: "30px" }} alt="images" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="event-list">
              <div class="event-thumb" style={{ padding: "20px" }}>
                <img src={Testimonial.testi4} style={{ borderRadius: "100%" }} height={160} alt="driver photos" />
              </div>
              <div class="event-content">
                <h4 class="event-title"><a href="event-detail.html">Profile Details</a></h4>
                <table>
                  <tr>
                    <td>Name</td>
                    <td>: {currentUser.fullname}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>: {currentUser.email}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="box-content">
              <h4 class="widget-title"><span>Donation</span></h4>
              <table className="delivery-table">
                <thead style={{ backgroundColor: "#333", color: "#faca3a" }}>
                  <tr>
                    <th className="deliv-rows">Donation Amount </th>
                    <th className="deliv-rows">Sender's name </th>
                    <th className="deliv-rows">Status </th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((donation, index) => {
                    if (donation.senderId === currentUser.userId) {
                      return (
                        <tr key={donation.id}>
                          <td className="deliv-rows">{donation.donorAmount}</td>
                          <td className="deliv-rows">{donation.firstName}</td>
                          <td className="deliv-rows">
                            {getStatusMessage(donation.status)}
                          </td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorDashboard;
