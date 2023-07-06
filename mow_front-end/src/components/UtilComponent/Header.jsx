import { resources } from "../../assets/images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect } from "react";
import { ThemeContext, useTheme } from "../../context/theme";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

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
        <div className="top-header">
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
            <div className="row d-flex-between-center">
              <div className="col-md col-sm-5 ">
                <a href="index.html">
                  <img src={resources.logo1} classNameName="my-logo" alt="" style={{ height: "80px" }} />
                </a>
              </div>
              <div className="col-md col-sm-7 main-header-right">
                <div className="social-search text-end">
                  <div className="search-form">
                    <form method="get" name="SearchForm">
                      <fieldset>
                        <input type="text" name="s" id="s" placeholder="Search Here..." />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-wrapper visible-md visible-lg">
          <div className="container">
            <div className="inner-menu">
              <div className="row">
                <div className="col-md-9 main-menu">
                  <nav>
                    <ul className="sf-menu">
                      <li>
                        <a href="/home">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {currentUser.name ? (
                  currentUser.name && (
                    <>
                      <div className="col-md-3 button-holder">
                        <span className="fs-5">{currentUser.name}</span> |
                        <button onClick={handleLogout} className="btn btn-danger">
                          Logout
                        </button>
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <div className="col-md-3 button-holder">
                      <a href="/register" className="btn main-btn" style={{ marginRight: "10px" }}>
                        Register
                      </a>
                      <a href="/login" className="btn main-btn">
                        Login
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
