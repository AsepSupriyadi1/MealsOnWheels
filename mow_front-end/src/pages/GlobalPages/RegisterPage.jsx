import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, InputGroup, ListGroup, Modal, Row } from "react-bootstrap";
import { registerAPI } from "../../api/auth";
import axios from "axios";
import { foto } from "../../assets/images/Images";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import Maps from "../../components/Maps";

const RegisterPage = () => {
  // GENERAL USER INFORMATION
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [userRole, setUserRole] = useState("DONOR");
  const [validated, setValidated] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // PARTNER INFORMATION
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState(null);

  // DRIVER INFORMATION
  const [carName, setCarName] = useState("");

  // MEMBER INFORMATION
  const [age, setAge] = useState();
  const [memberReason, setMemberReason] = useState();

  // Volunteer INFORMATION
  const [volunteerStatus, setVolunteerStatus] = useState("");
  const [volunteerReason, setVolunteerReason] = useState("");

  const [partnerForm, setPartnerForm] = useState(false);
  const [driverForm, setDriverForm] = useState(false);
  const [memberForm, setMemberForm] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState(false);

  // ADDRESS
  const [address, setAddress] = useState(null);
  const [county, setCounty] = useState(null);
  const [state, setState] = useState(null);
  const [village, setVillage] = useState(null);
  const [country, setCountry] = useState(null);
  const [label, setLabel] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else if (password !== confirmedPassword) {
      event.stopPropagation();
      setValidated(true);
      setErrorMessage("Password is doesn't match.");
      return;
    } else {
      const formData = {
        userApp: {
          email: email,
          password: password,
          userRole: userRole,
        },
        userDetails: {
          fullname: fullname,
        },
        address: {
          village: village,
          county: county,
          state: state,
          country: country,
          label: label,
          latitude: latitude,
          longitude: longitude,
        },
        partner: {
          companyName: companyName,
          companyAddress: companyAddress,
        },
        driver: {
          carName: carName,
        },
        member: {
          age: age,
          reason: memberReason,
        },
        volunteer: {
          status: volunteerStatus,
          reason: volunteerReason,
        },
      };

      registerAPI(formData, navigate);
    }
    setValidated(true);
  };

  useEffect(() => {
    if (userRole === "PARTNER") {
      setPartnerForm(true);
      setDriverForm(false);
      setVolunteerForm(false);
      setMemberForm(false);
    } else if (userRole === "DRIVER") {
      setDriverForm(true);
      setVolunteerForm(false);
      setMemberForm(false);
      setPartnerForm(false);
    } else if (userRole === "VOLUNTEER") {
      setVolunteerForm(true);
      setMemberForm(false);
      setPartnerForm(false);
      setDriverForm(false);
    } else if (userRole === "MEMBER") {
      setMemberForm(true);
      setVolunteerForm(false);
      setPartnerForm(false);
      setDriverForm(false);
    } else {
      setDriverForm(false);
      setVolunteerForm(false);
      setMemberForm(false);
      setPartnerForm(false);
    }

    if (address !== null) {
      setCounty(address.address.county);
      setState(address.address.state);
      setVillage(address.address.village);
      setCountry(address.address.country);
      setLabel(address.display_name);
      setLatitude(address.lat);
      setLongitude(address.lon);
    }
  }, [userRole, address]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
        <div className="page-header">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h2 className="page-title d-none d-lg-block">Registration</h2>
            </div>
            <div className="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="/">&larr; Go back Home</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="box-content rounded shadow">
              <div classNameName="row d-flex align-items-center">
                <div classNameName="col-md">
                  <h4 className="widget-title">
                    <span classNameName="fs-6">General Information</span>
                  </h4>

                  <Form onSubmit={handleSubmit} noValidate validated={validated}>
                    {validated && password !== confirmedPassword && <Alert variant="danger">{errorMessage}</Alert>}
                    <div classNameName="row my-3">
                      <div classNameName="col-md-6">
                        <Form.Group>
                          <Form.Label>Full Name :</Form.Label>
                          <Form.Control type="text" placeholder="Enter full name......" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                        </Form.Group>
                      </div>

                      <div classNameName="col-md-6">
                        <Form.Group>
                          <Form.Label>Email :</Form.Label>
                          <Form.Control type="email" placeholder="Enter your email address......" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                      </div>
                    </div>

                    <Form.Group classNameName="mb-3">
                      <Form.Label classNameName="m-0">Join as :</Form.Label>
                      <Form.Select value={userRole} onChange={(e) => setUserRole(e.target.value)} required>
                        <option value="DONOR">Donor</option>
                        <option value="DRIVER">Rider</option>
                        <option value="PARTNER">Partner</option>
                        <option value="VOLUNTEER">Volunteer</option>
                        <option value="MEMBER">Member</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group classNameName="mb-3">
                      <Form.Label classNameName="m-0">Address :</Form.Label>
                      <div onClick={handleShow}>
                        <Form.Control type="text" placeholder="Enter address......" value={address === null ? "" : address.display_name} disabled required />
                      </div>
                    </Form.Group>

                    <Form.Group classNameName="mb-3">
                      <Form.Label classNameName="m-0">Password :</Form.Label>
                      <Form.Control type="password" placeholder="Enter password......" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>

                    <Form.Group classNameName="mb-3">
                      <Form.Label classNameName="m-0">Confirmed Password :</Form.Label>
                      <Form.Control type="password" placeholder="Enter Confirmed Password......" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} required />
                    </Form.Group>

                    {partnerForm && (
                      <>
                        <Form.Group classNameName="mb-3">
                          <Form.Label classNameName="m-0">Company Name :</Form.Label>
                          <Form.Control type="text" placeholder="Enter company name......" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </Form.Group>

                        <Form.Group classNameName="mb-3">
                          <Form.Label classNameName="m-0">Company address :</Form.Label>
                          <Form.Control type="text" placeholder="Enter company address......" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
                        </Form.Group>
                      </>
                    )}

                    {driverForm && (
                      <>
                        <Form.Group classNameName="mb-3">
                          <Form.Label classNameName="m-0">Car Name :</Form.Label>
                          <Form.Control type="text" placeholder="Enter your car name......" value={carName} onChange={(e) => setCarName(e.target.value)} />
                        </Form.Group>
                      </>
                    )}

                    {memberForm && (
                      <>
                        <Form.Group classNameName="mb-3">
                          <Form.Label classNameName="m-0">Reason :</Form.Label>
                          <Form.Control type="text" placeholder="Enter your Reason for membership......" value={memberReason} onChange={(e) => setMemberReason(e.target.value)} />
                        </Form.Group>
                        <Form.Group classNameName="mb-3">
                          <Form.Label classNameName="m-0">Age :</Form.Label>
                          <Form.Control type="number" placeholder="Enter your age......" value={age} onChange={(e) => setAge(e.target.value)} />
                        </Form.Group>
                      </>
                    )}

                    {volunteerForm && (
                      <>
                        <Form.Group classNameName="mb-3">
                          <Form.Label classNameName="m-0">Reason :</Form.Label>
                          <Form.Control type="text" placeholder="Enter your Reason for being a volunteer......" value={volunteerReason} onChange={(e) => setVolunteerReason(e.target.value)} />
                        </Form.Group>
                        <Form.Group classNameName="mb-3">
                          <Form.Label classNameName="m-0">Status :</Form.Label>
                          <Form.Select value={volunteerStatus} onChange={(e) => setVolunteerStatus(e.target.value)} required>
                            <option value="Student">Student</option>
                            <option value="Freelancer">Freelancer</option>
                            <option value="Employee">Employee</option>
                          </Form.Select>
                        </Form.Group>
                      </>
                    )}

                    <Button type="submit" classNameName="w-100" variant="secondary">
                      SUBMIT & NEXT
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Maps setter={setAddress} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterPage;
