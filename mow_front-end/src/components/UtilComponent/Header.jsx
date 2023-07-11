import { resources } from "../../assets/images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect } from "react";
import { ThemeContext, useTheme } from "../../context/theme";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <header className="site-header">
        <div className="top-header d-none d-lg-block">
          <div className="container">
            <div className="inner-top">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 header-info-left">
                  <ul>
                    <li>
                      <a href="skype:+34234235322?action">
                        <i className="fa fa-phone"></i>+34 234 2353 22
                      </a>
                    </li>
                    <li>
                      <a href="mailto:youremail@info.com">
                        <i className="fa fa-envelope-o"></i>youremail@info.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 header-info-right visible-md visible-lg">
                  <ul>
                    <li>
                      <a href="#" title="Facebook">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Facebook">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-header">
            <div className="row  d-flex justify-content-between align-items-center">
              <div className=" col-lg-8  col-sm-5 ">
                <a href="/home">
                  <img src={resources.logo1} classNameName="my-logo" alt="" style={{ height: "80px" }} />
                </a>
              </div>

              {currentUser.fullname ? (
                currentUser.fullname && (
                  <a href="/profile" className="col-lg d-lg-block d-md-block d-none">
                    <div className="  text-end d-flex justify-content-end align-items-center ">
                      <div className="mt-2">
                        <h5 className="m-0 text-light">{currentUser.fullname}</h5>
                        <p className="fs-6 m-0 text-warning">{currentUser.userRole}</p>
                      </div>
                      <FontAwesomeIcon icon={faUser} className="text-dark fs-3 ms-3 bg-light p-3 d-blok" />
                    </div>
                  </a>
                )
              ) : (
                <div className="col-md col-sm-7">
                  <div className="me-auto  text-lg-end text-start d-lg-block d-md-block d-sm-none d-none ">
                    <a href="/register" className="btn main-btn" style={{ marginRight: "10px" }}>
                      Register
                    </a>
                    <a href="/login" className="btn main-btn">
                      Login
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div id="navbar" className="menu-wrapper visible-md visible-lg">
          <div className="container">
            <div className="inner-menu">
              <div className="row">
                <Navbar expand="md" variant="light" className="px-5">
                  <Navbar.Toggle aria-controls="navbarCollaps" className="mb-2 bg-light mt-3" />
                  <Navbar.Collapse id="navbarCollapse">
                    {currentUser.fullname && (
                      <a href="/profile" className="col-md-3 d-block d-sm-block d-lg-none d-md-none">
                        <div className=" mt-2  d-flex align-items-center">
                          <FontAwesomeIcon icon={faUser} className="text-dark me-3 fs-3 bg-light p-3" />
                          <div className="mt-2">
                            <h5 className="m-0 text-light">{currentUser.fullname}</h5>
                            <p className="fs-6 m-0 text-warning">{currentUser.userRole}</p>
                          </div>
                        </div>
                      </a>
                    )}

                    <div className="col-md">
                      <Nav className="navbar-nav">
                        <Nav.Item>
                          <Nav.Link className="fs-6 border-start-secondary" href="/home">
                            Home
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="fs-6" href="/about">
                            About
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="fs-6" href="/contact">
                            Contact Us
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="fs-6" href="/our-donor">
                            Our donor
                          </Nav.Link>
                        </Nav.Item>
                        {currentUser.userRole == "ADMIN" && (
                          <>
                            <Nav.Item>
                              <Nav.Link className="fs-6 border-start-secondary" href="/admin">
                                Dashboard
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="fs-6" href="/all-users">
                                All User Request
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="fs-6" href="/all-meals">
                                Meals
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="fs-6" href="/orders">
                                Order
                              </Nav.Link>
                            </Nav.Item>
                          </>
                        )}

                        {currentUser.userRole == "MEMBER" && (
                          <>
                            <Nav.Item>
                              <Nav.Link className="fs-6 border-start-secondary" href="/meals">
                                Daily Meals
                              </Nav.Link>
                            </Nav.Item>
                          </>
                        )}

{currentUser.userRole === "DONOR" && (
  <>
      <Nav.Item>
        <Nav.Link className="fs-6" href="/donor">
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="fs-6" href="/donate">
          Donate
        </Nav.Link>
      </Nav.Item>
      </>
      
    )}
                      </Nav>
                    </div>

                    {console.log(currentUser.fullname)}

                    {currentUser.fullname ? (
                      currentUser.fullname && (
                        <div className="col-md-3 text-lg-end ">
                          <Button onClick={handleLogout} className="" variant="danger">
                            Logout
                          </Button>
                        </div>
                      )
                    ) : (
                      <div className="col-md col-sm-7 d-lg-none d-md-none d-sm-block d-xs-block">
                        <div className="me-auto  text-lg-end text-start ">
                          <a href="/register" className="btn main-btn d-block mb-3">
                            Register
                          </a>
                          <a href="/login" className="btn main-btn d-block">
                            Login
                          </a>
                        </div>
                      </div>
                    )}
                    {/* {currentUser.fullname && (
                      
                        
                      
                    )} */}
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
