import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import { registerAPI } from "../../api/auth";
import axios from "axios";
import { foto } from "../../assets/images/Images";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  // GENERAL USER INFORMATION
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [userRole, setUserRole] = useState("DONOR");

  // PARTNER INFORMATION
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      userApp: {
        email: email,
        password: password,
        fullname: fullname,
        address: address,
        userRole: userRole,
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
  }, [userRole]);

  const [address, setAddress] = useState("");
  const [results, setResults] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setAddress(value);

    if (value.length >= 5) {
      fetchResults(value);
    } else {
      setResults([]);
    }
  };

  const fetchResults = async (value) => {
    await axios.get(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=` + value).then((response) => {
      setResults(response.data);
      console.log(response.data);
    });

    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setResults(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching results:", error);
    //     setResults([]);
    //   });
  };

  return (
    <>
      <div class="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title d-none d-lg-block">Registration</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="/">&larr; Go back Home</a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="box-content rounded shadow">
              <div className="row d-flex align-items-center">
                <div className="col-md">
                  <h4 class="widget-title">
                    <span className="fs-6">General Information</span>
                  </h4>

                  <Form onSubmit={handleSubmit}>
                    <div className="row my-3">
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>Full Name :</Form.Label>
                          <Form.Control type="text" placeholder="Enter full name......" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>Email :</Form.Label>
                          <Form.Control type="email" placeholder="Enter your email address......" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                      </div>
                    </div>

                    <Form.Group className="mb-3">
                      <Form.Label className="m-0">Join as :</Form.Label>
                      <Form.Select value={userRole} onChange={(e) => setUserRole(e.target.value)} required>
                        <option value="DONOR">Donor</option>
                        <option value="DRIVER">Rider</option>
                        <option value="PARTNER">Partner</option>
                        <option value="VOLUNTEER">Volunteer</option>
                        <option value="MEMBER">Member</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="m-0">Address :</Form.Label>

                      <Form.Control type="text" placeholder="Enter address......" value={address} onChange={(e) => setAddress(e.target.value)} required />

                      {/* <Form.Select value={userRole} onChange={(e) => setAddress(e.target.value)} required>
                        {results !== null &&
                          results.map((value) => (
                            <>
                              <option value={value.display_name}>{value.display_name}</option>
                            </>
                          ))}
                      </Form.Select> */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="m-0">Password :</Form.Label>
                      <Form.Control type="password" placeholder="Enter password......" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="m-0">Confirm Password :</Form.Label>
                      <Form.Control type="password" placeholder="Enter password......" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>

                    {partnerForm && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label className="m-0">Company Name :</Form.Label>
                          <Form.Control type="text" placeholder="Enter company name......" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="m-0">Company address :</Form.Label>
                          <Form.Control type="text" placeholder="Enter company address......" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
                        </Form.Group>
                      </>
                    )}

                    {driverForm && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label className="m-0">Car Name :</Form.Label>
                          <Form.Control type="text" placeholder="Enter your car name......" value={carName} onChange={(e) => setCarName(e.target.value)} />
                        </Form.Group>
                      </>
                    )}

                    {memberForm && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label className="m-0">Reason :</Form.Label>
                          <Form.Control type="text" placeholder="Enter your Reason for membership......" value={memberReason} onChange={(e) => setMemberReason(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="m-0">Age :</Form.Label>
                          <Form.Control type="number" placeholder="Enter your age......" value={age} onChange={(e) => setAge(e.target.value)} />
                        </Form.Group>
                      </>
                    )}

                    {volunteerForm && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label className="m-0">Reason :</Form.Label>
                          <Form.Control type="text" placeholder="Enter your Reason for being a volunteer......" value={volunteerReason} onChange={(e) => setVolunteerReason(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="m-0">Status :</Form.Label>
                          <Form.Select value={volunteerStatus} onChange={(e) => setVolunteerStatus(e.target.value)} required>
                            <option value="Student">Student</option>
                            <option value="Freelancer">Freelancer</option>
                            <option value="Employee">Employee</option>
                          </Form.Select>
                        </Form.Group>
                      </>
                    )}

                    <Button type="submit" className="w-100" variant="secondary">
                      SUBMIT & NEXT
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
