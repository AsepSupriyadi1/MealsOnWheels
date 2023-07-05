import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { registerAPI } from "../../api/auth";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email,
      password,
      fullname,
      address,
      userRole,
    };

    registerAPI(formData);
  };

  return (
    <>
      <div class="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Registration</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="/">&larr; Go back Home</a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="box-content">
              <h4 class="widget-title">
                <span>Register Information</span>
              </h4>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-2">Full Name :</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name......" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="m-0">Email :</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email address......" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="m-0">Join as :</Form.Label>
                  <Form.Select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
                    <option disabled>Choose a role</option>
                    <option defaultValue={true} value="MEMBER">
                      Member
                    </option>
                    <option value="DRIVER">Rider</option>
                    <option value="PARTNER">Partner</option>
                    <option value="VOLUNTEER">Volunteer</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="m-0">Address :</Form.Label>
                  <Form.Control type="text" placeholder="Enter address......" value={address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="m-0">Password :</Form.Label>
                  <Form.Control type="text" placeholder="Enter password......" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button type="submit" className="w-100" variant="secondary">
                  SUBMIT
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
