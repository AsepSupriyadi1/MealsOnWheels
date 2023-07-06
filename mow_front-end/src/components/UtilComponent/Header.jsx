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
          <div className="col-lg-10 col-md-6 col-sm-6 col-xs-12 header-info-left">
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
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 header-info-right">
            <ul className="d-flex justify-content-center justify-content-sm-end">
              <li className="mx-2">
                <a href="#" title="Envelope">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#" title="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#" title="Twitter">
                  <i className="fa fa-twitter"></i>
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
      <div className="col-lg col-md-5 col-sm-5 col-xs-12 d-flex mx-auto mx-lg-none"> 
        <a href="index.html">
          <img src={resources.logo1} className="my-logo img-fluid" alt="" style={{ height: "80px", width: "auto" }} />
        </a>
      </div>
      <div className="col-lg col-md main-header-right">
        <div className="social-search text-end">
          <div className="search-form d-none d-lg-block">
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

  
  <div className="menu-wrapper">
    <div className="container">
      <div className="inner-menu">
        <div className="row">
          <div className="col-lg-9 main-menu">
            <nav>
              <ul className="sf-menu">
                <li className="dropdown">
                  <a href="/home" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Home <span className="caret"></span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="/about" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    About <span className="caret"></span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="/contact" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Contact Us <span className="caret"></span>
                  </a>
                </li>
                <li>
                <div className="search-form d-md-none d-block">
              <form method="get" name="SearchForm">
                <fieldset>
                  <input type="text" name="s" id="s" placeholder="Search Here..." />
                </fieldset>
              </form>
            </div>
                </li>
              </ul>
            </nav>
          </div>
          {currentUser.name ? (
            currentUser.name && (
              <>
                <div className="col-lg button-holder">
                  <span className="fs-5">{currentUser.name}</span> |
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                </div>
              </>
            )
          ) : (
            <>
              <div className="col-lg button-holder">
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
