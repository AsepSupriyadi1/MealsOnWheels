import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gallery } from "../../../assets/images/Images";
import { faArrowAltCircleRight, faBuilding, faCar, faCartPlus, faDollar, faDriversLicense, faHamburger, faPiggyBank, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

import "./admin.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="container">
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Dashboard</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}

        {/* -=-=-=-=-= CARD STATUS START -=-=-=-=-= */}
        <div class="row">
          <div class="col-md-3 col-sm-6 ">
            <div class="rounded admin__status_card shadow">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="fs-6">Meals Menu</h3>
                  <h2 className="fs-1 fw-bold">85</h2>
                </div>

                <FontAwesomeIcon icon={faHamburger} className="admin__status_icon" />
              </div>

              <div className="admin__status_links bg-light rounded">
                <a href="all-meals">
                  View details <FontAwesomeIcon icon={faArrowAltCircleRight} className="ps-2" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 ">
            <div class="rounded admin__status_card shadow">
              <div className="d-flex justify-content-between align-items-center ">
                <div>
                  <h3 className="fs-6">Orders</h3>
                  <h2 className="fs-1 fw-bold">85</h2>
                </div>

                <FontAwesomeIcon icon={faCartPlus} className="admin__status_icon" />
              </div>

              <div className="admin__status_links bg-light rounded">
                <a href="orders">
                  View details <FontAwesomeIcon icon={faArrowAltCircleRight} className="ps-2" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 ">
            <div class="rounded admin__status_card shadow">
              <div className="d-flex justify-content-between align-items-center ">
                <div>
                  <h3 className="fs-6">Partners</h3>
                  <h2 className="fs-1 fw-bold">85</h2>
                </div>

                <FontAwesomeIcon icon={faBuilding} className="admin__status_icon" />
              </div>

              <div className="admin__status_links bg-light rounded">
                <a href="all-partners">
                  View Details <FontAwesomeIcon icon={faArrowAltCircleRight} className="ps-2" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 ">
            <div class="rounded admin__status_card shadow">
              <div className="d-flex justify-content-between align-items-center ">
                <div>
                  <h3 className="fs-6">Drivers</h3>
                  <h2 className="fs-1 fw-bold">85</h2>
                </div>

                <FontAwesomeIcon icon={faCar} className="admin__status_icon" />
              </div>

              <div className="admin__status_links bg-light rounded">
                <a href="all-drivers">
                  View Details <FontAwesomeIcon icon={faArrowAltCircleRight} className="ps-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* -=-=-=-=-= CARD STATUS END -=-=-=-=-= */}

        {/* -=-=-=-=-= TABLE START -=-=-=-=-= */}
        <div className="row">
          <div className="col-md-8">
            <div className="box-content">
              <h4 class="widget-title">
                <span>Top Donations</span>
              </h4>
              <div className="tb_reponsive">
                <table className="table table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Donors</th>
                      <th>Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kencan Total</td>
                      <td>$ 250,000</td>
                      <td>12/June/2023</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mencium Ketek</td>
                      <td>$ 250,000</td>
                      <td>12/June/2023</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Tai Kejora</td>
                      <td>$ 250,000</td>
                      <td>12/June/2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="box-content admin__donors_container">
              <FontAwesomeIcon icon={faPiggyBank} className="admin__donors_icon" />
              <h1 className="text-light fw-bold">$ 234,000</h1>
              <h2 className="text-light fs-5">Current Donation Amount</h2>
              <a className="btn btn-light rounded mt-3" href="">
                View Donation History
              </a>
            </div>
          </div>
        </div>
        {/* -=-=-=-=-= TABLE END -=-=-=-=-= */}
      </div>
      {/* END CONTAINER */}
    </>
  );
};

export default AdminDashboard;
