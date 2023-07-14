import { faCheckCircle, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BankAddress = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="box-content p-1 col-md-6 text-center ">
          <div className='img-success rounded p-5 bg-light text-success'>
            <FontAwesomeIcon style={{ fontSize: "100px" }} icon={faCheckCircle} />
          </div>
          <div className='detail-donate p-5'>
            <h4 className='text-success'>Thank You for Your Contribution!</h4>
            <p>
              Once the transfer is complete, your contribution will be acknowledged. Thank you for your support!
            </p>
            <div>
              <p>Bank: CIMB Niaga</p>
              <p>Account Number: 1234567890</p>
              <p>Account Holder: Darren Farrell</p>
            </div>
            <div class="back-button">
						<a href="/donate" className='btn btn-success'>Back to Dashboard</a>
					</div>
          </div>
          


        </div>
      </div>
    </div>

  );
};

export default BankAddress;

// from page OurDonor

// const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     fetchDonations();
//   }, []);

//   const fetchDonations = async () => {
//     try {
//       const response = await axios.get('/api/v1/fund/funds');
//       setDonations(response.data);
//     } catch (error) {
//       console.error('Error fetching donations:', error);
//     }
//   };