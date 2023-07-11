import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gallery } from "../../../assets/images/Images";
import { faArrowAltCircleRight, faBuilding, faCar, faCartPlus, faDollar, faDriversLicense, faHamburger, faHandsHelping, faPiggyBank, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

import "./admin.css";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth-context";
import { getAllActiveDrivers, getAllActiveMembers, getAllActivePartners, getAllActiveVolunteer } from "../../../api/admin";

const AdminDashboard = () => {
  const userCtx = useContext(AuthContext);

  const [memberShow, setMemberShow] = useState(false);
  const [partnerShow, setPartnerShow] = useState(false);
  const [volunteerShow, setVolunteerShow] = useState(false);
  const [driverShow, setDriverShow] = useState(false);

  const [listMember, setListMember] = useState(null);
  const [listPartner, setListPartner] = useState(null);
  const [listVolunteer, setListVolunteer] = useState(null);
  const [listDriver, setListDriver] = useState(null);

  const handleShowMember = () => {
    getAllActiveMembers(userCtx.token).then((response) => {
      setListMember(response.data);
      setMemberShow(true);
    });
  };

  const handleShowPartner = () => {
    getAllActivePartners(userCtx.token).then((response) => {
      setListPartner(response.data);
      setPartnerShow(true);
    });
  };

  const handleShowVolunteer = () => {
    getAllActiveVolunteer(userCtx.token).then((response) => {
      setListVolunteer(response.data);
      setVolunteerShow(true);
    });
  };

  const handleShowDriver = () => {
    getAllActiveDrivers(userCtx.token).then((response) => {
      setListDriver(response.data);
      setDriverShow(true);
    });
  };

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
                  <h3 className="fs-6">Volunteers</h3>
                  <h2 className="fs-1 fw-bold">85</h2>
                </div>

                <FontAwesomeIcon icon={faHandsHelping} className="admin__status_icon" />
              </div>

              <div className="admin__status_links bg-light rounded">
                <button className="btn btn-light" onClick={handleShowVolunteer}>
                  View details <FontAwesomeIcon icon={faArrowAltCircleRight} className="ps-2" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 ">
            <div class="rounded admin__status_card shadow">
              <div className="d-flex justify-content-between align-items-center ">
                <div>
                  <h3 className="fs-6">Members</h3>
                  <h2 className="fs-1 fw-bold">85</h2>
                </div>

                <FontAwesomeIcon icon={faUsers} className="admin__status_icon" />
              </div>

              <div className="admin__status_links bg-light rounded">
                <button className="btn btn-light" onClick={handleShowMember}>
                  View details <FontAwesomeIcon icon={faArrowAltCircleRight} className="ps-2" />
                </button>
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

                <FontAwesomeIcon icon={faHandsHelping} className="admin__status_icon" />
              </div>

              <div className="admin__status_links bg-light rounded">
                <button className="btn btn-light" onClick={handleShowPartner}>
                  View details <FontAwesomeIcon icon={faArrowAltCircleRight} className="ps-2" />
                </button>
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
                <button className="btn btn-light" onClick={handleShowDriver}>
                  View details <FontAwesomeIcon icon={faArrowAltCircleRight} className="ps-2" />
                </button>
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

      {listMember && (
        <>
          <Modal show={memberShow} onHide={() => setMemberShow(false)} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>All Driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table className="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {listMember.length ? (
                    listMember.length > 0 &&
                    listMember.map((value, index) => (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{value.fullname}</td>
                          <td>{value.email}</td>
                          <td>{value.address}</td>
                          <td>{value.role}</td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <>
                      <tr className="text-center">
                        <td colSpan={5}>There is no Active Member</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setMemberShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}

      {listPartner && (
        <>
          <Modal show={partnerShow} onHide={() => setPartnerShow(false)} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>All Active Partner</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table className="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {listPartner.length ? (
                    listPartner.length > 0 &&
                    listPartner.map((value, index) => (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{value.fullname}</td>
                          <td>{value.email}</td>
                          <td>{value.address}</td>
                          <td>{value.role}</td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <>
                      <tr className="text-center">
                        <td colSpan={5}>There is no Active Partner</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setPartnerShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}

      {listDriver && (
        <>
          <Modal show={driverShow} onHide={() => setDriverShow(false)} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>All Active Driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table className="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {listDriver.length ? (
                    listDriver.length > 0 &&
                    listDriver.map((value, index) => (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{value.fullname}</td>
                          <td>{value.email}</td>
                          <td>{value.address}</td>
                          <td>{value.role}</td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <>
                      <tr className="text-center">
                        <td colSpan={5}>There is no Active Driver</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setDriverShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}

      {listVolunteer && (
        <>
          <Modal show={volunteerShow} onHide={() => setVolunteerShow(false)} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>All Active Driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table className="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {listVolunteer.length ? (
                    listVolunteer.length > 0 &&
                    listVolunteer.map((value, index) => (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{value.fullname}</td>
                          <td>{value.email}</td>
                          <td>{value.address}</td>
                          <td>{value.role}</td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <>
                      <tr className="text-center">
                        <td colSpan={5}>There is no Active Volunteer</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setVolunteerShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
