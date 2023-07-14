import { useContext, useEffect, useState } from "react";
import { Testimonial, food } from "../../../assets/images/Images";
import { Link } from "react-router-dom";
import { getAllActiveMeals, requestMeals } from "../../../api/member";
import { AuthContext } from "../../../context/auth-context";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronCircleLeft, faStore } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
const MemberDashboard = () => {
  const userCtx = useContext(AuthContext);

  const [listActiveMeals, setListActiveMeals] = useState(null);

  useEffect(() => {
    getAllActiveMeals(userCtx.token).then((response) => {
      setListActiveMeals(response.data);
      // const blob = new Blob([response.data.], { type: "image/jpeg" });
    });
  }, []);

  const handleRequestMeals = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure want to request this meals",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        requestMeals(userCtx.token, id)
          .then((response) => {
            Swal.fire("Success !", "Meals Request has been sent.", "success");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  if (!listActiveMeals) return null;

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
            <div className="row overflow-auto flex-nowrap">
              {listActiveMeals.map((value) => (
                <>
                  <div className="col-md-3 col-sm-6">
                    <div className="card-meal">
                      <img src={`data:image/png;base64,${value.picture.imageData}`} className="card-image rounded-2" alt="" />
                      <div className="detail-card my-3">
                        <p className="text-success">
                          <FontAwesomeIcon icon={faStore} /> {value.partner.companyName}
                        </p>
                        <h3>{value.mealsName}</h3>
                        <p className="text-secondary">Kategory: Food</p>
                        <button className="btn btn-success rounded-1" onClick={() => handleRequestMeals(value.id_meals)}>
                          Request Meals
                        </button>
                      </div>
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
