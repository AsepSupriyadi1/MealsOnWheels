import { useContext, useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { loginAPI } from "../../api/auth";
import { AuthContext } from "../../context/auth-context";
import LoginModals from "../../components/ChartComponent/LoginModals";

const LoginPage = () => {
  const navigate = useNavigate();
  const userCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // -=-=-= ALERT -=-=-=-=
  const [error, setError] = useState({
    status: false,
    message: null,
  });

  // -=-=-= MODALS -=-=-=-=
  const [modalShow, setModalShow] = useState({
    status: false,
    message: null,
  });

  const handleLogin = (event) => {
    event.preventDefault();

    const credentials = {
      email,
      password,
    };

    loginAPI(credentials, userCtx.login, navigate, setError, setModalShow);
  };

  return (
    <>
      <div class="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Login</h2>
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
                <span>Enter Login Information</span>
              </h4>

              {error.status && (
                <Alert variant="danger">
                  <b>{error.message}</b>
                </Alert>
              )}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Email :</Form.Label>
                  <Form.Control className="bg-light" type="email" placeholder="Enter your email address......" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password :</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password......" name="email" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button type="submit" className="w-100" variant="secondary">
                  SUBMIT
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <LoginModals show={modalShow.status} onHide={() => setModalShow({ status: false, message: null })} />
    </>
  );
};

export default LoginPage;
