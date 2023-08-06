import { useContext, useEffect, useState } from "react";
import { Testimonial, food } from "../../../assets/images/Images";
import { Link } from "react-router-dom";
import { getAllActiveMeals, requestMeals } from "../../../api/member";
import { AuthContext } from "../../../context/auth-context";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronCircleLeft, faClock, faDotCircle, faStore } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import { calculateDistance } from "../../../api/map";
const MemberDashboard = () => {
  const userCtx = useContext(AuthContext);

  const [listActiveMeals, setListActiveMeals] = useState(null);

  useEffect(() => {
    getAllActiveMeals(userCtx.token).then((response) => {
      setListActiveMeals(response.data);
    });
  }, []);

  return (
    <>
      {/* page header */}
      <div className="container">
        <div class="box-content shadow p-0">
          {/* slide show */}
          <div className="services box-content rounded-2 p-0 shadow m-0" style={{ paddingLeft: "20px", paddingRight: "20px", height: "250px" }}>
            <div className="shadow" id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel ">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={food.food2} className="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={food.food3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={food.food4} class="d-block w-100" alt="..." />
                </div>
              </div>
              <div class="carousel-controls">
                <button class="carousel-control-prev pull-button" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next pull-button" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/* end slide show */}
          </div>
        </div>

        <div class="container p-0">
          <div className="box-content rounded shadow">
            <h4 className="widget-title text-success fw-bold mt-5">
              <span>Food option</span>
            </h4>
            <div className="row overflow-auto flex-nowrap gx-4">
              {listActiveMeals !== null &&
                listActiveMeals.map((value) => (
                  <>
                    <div className="col-md-3 col-sm-6">
                      <div className="mb-3" style={{ height: 300 + "px", objectFit: "cover" }}>
                        <img src={`data:image/png;base64,${value.picture.imageData}`} className="card-image rounded-2 h-50 w-100 " alt="" />
                        <div className="detail-card mt-3 mb-2">
                          <h4 className="fs-5 fw-bolder text-dark"> {value.mealsName.length >= 25 ? value.mealsName.slice(0, 25) + "..." : value.mealsName}</h4>

                          <div className="d-flex justify-content-between align-items-center">
                            <div className="text-secondary fs-6">
                              <small>
                                <FontAwesomeIcon icon={faStore} className="pe-2" /> Meals On Wheels
                              </small>
                            </div>
                            <div className="text-success fs-6">
                              <small>
                                Available <FontAwesomeIcon icon={faCheckCircle} className="pe-2" />
                                {/* {calculateDistance(userCtx.currentUser.lan, userCtx.currentUser.lng, value.partner.userDetails.userAppAddress.latitude, value.partner.userDetails.userAppAddress.longitude) + " km"} */}
                              </small>
                            </div>
                          </div>
                        </div>
                        <a className="btn btn-success rounded-1 mt-2 w-100" href={"/detail-meals/" + value.mealsId}>
                          View Details
                        </a>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDashboard;
// onClick={() => handleRequestMeals(value.id_meals)}
