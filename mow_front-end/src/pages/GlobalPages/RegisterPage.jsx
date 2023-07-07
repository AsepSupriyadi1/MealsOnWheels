import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { registerAPI } from "../../api/auth";
import axios from "axios";
import { foto } from "../../assets/images/Images";

const RegisterPage = () => {
  // GENERAL USER INFORMATION
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [userRole, setUserRole] = useState("MEMBER");

  // PARTNER INFORMATION
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  // DRIVER INFORMATION
  const [carName, setCarName] = useState("");

  const [partnerForm, setPartnerForm] = useState(false);
  const [driverForm, setDriverForm] = useState(false);

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
    };

    registerAPI(formData);
  };

  useEffect(() => {
    if (userRole === "PARTNER") {
      setPartnerForm(true);
      setDriverForm(false);
    } else if (userRole === "DRIVER") {
      setPartnerForm(false);
      setDriverForm(true);
    } else {
      setPartnerForm(false);
      setDriverForm(false);
    }
  }, [userRole]);

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
                        <option value="MEMBER">Member</option>
                        <option value="DRIVER">Rider</option>
                        <option value="PARTNER">Partner</option>
                        <option value="VOLUNTEER">Volunteer</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="m-0">Address :</Form.Label>
                      <Form.Control type="text" placeholder="Enter address......" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="m-0">Password :</Form.Label>
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
