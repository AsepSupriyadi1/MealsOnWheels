import { useContext, useEffect, useState } from "react";
import { Testimonial, foto } from "../../../assets/images/Images";
import { Link } from "react-router-dom";
import { getAllActiveMeals } from "../../../api/member";
import { AuthContext } from "../../../context/auth-context";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
const MemberDashboard = () => {
  // const userCtx = useContext(AuthContext);

  // const [listActiveMeals, setListActiveMeals] = useState(null);

  // useEffect(() => {
  //   getAllActiveMeals(userCtx.token).then((response) => {
  //     setListActiveMeals(response.data);
  //   });
  // }, []);

  // if (!listActiveMeals) return null;

  return (
    <>
      {/* page header */}
      <div className="container">
        <div class="box-content shadow p-0">
          {/* slide show */}
          <div className="services box-content rounded-2 p-0 shadow m-0" style={{ paddingLeft: "20px", paddingRight: "20px", height: "250px" }}>
            <div className="shadow" id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel ">
              <div class="carousel-inner" >
                <div class="carousel-item active" data-bs-interval="10000" >
                  <img src={Testimonial.imgtesti} className="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={Testimonial.kentang} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Testimonial.givers} class="d-block w-100" alt="..." />
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
          <div className="box-content rounded bg-light shadow">
            <div className="row">
            <h4 className="widget-title text-success fw-bold">
                            <span>MAKANAN RINGAN</span>
                        </h4>
              {/* {listActiveMeals.map((value) => ( */}
              <>
                <div class="col-md-3 col-sm-6 ">
                  <div className="card-meal">
                    <img src={Testimonial.imgtesti} className="card-image rounded-2" alt="" />
                    <div className="detail-card my-3">
                      <p className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Available</p>
                      <h3>Makanan 1</h3>
                      <p className="text-secondary">Category : Makanan, minuman, desert</p>
                      <a className="btn btn-success rounded-1">Detail Meal</a>
                    </div>
                  </div>


                </div>
                <div class="col-md-3 col-sm-6 ">
                  <div className="card-meal">
                    <img src={Testimonial.imgtesti} className="card-image rounded-2" alt="" />
                    <div className="detail-card my-3">
                      <p className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Available</p>
                      <h3>Makanan 2</h3>
                      <p className="text-secondary">Category : Makanan, minuman, desert</p>
                      <a className="btn btn-success rounded-1">Detail Meal</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 ">
                  <div className="card-meal">
                    <img src={Testimonial.imgtesti} className="card-image rounded-2" alt="" />
                    <div className="detail-card my-3">
                      <p className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Available</p>
                      <h3>Makanan 3</h3>
                      <p className="text-secondary">Category : Makanan, minuman, desert</p>
                      <a className="btn btn-success rounded-1">Detail Meal</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 ">
                  <div className="card-meal">
                    <img src={Testimonial.imgtesti} className="card-image rounded-2" alt="" />
                    <div className="detail-card my-3">
                      <p className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Available</p>
                      <h3>Makanan 3</h3>
                      <p className="text-secondary">Category : Makanan, minuman, desert</p>
                      <a className="btn btn-success rounded-1">Detail Meal</a>
                    </div>
                  </div>
                </div>
              </>

              {/* ))} */}


            </div>
            <div className="row mt-5">
            <h4 className="widget-title text-success fw-bold">
                            <span>MAKANAN BERAT</span>
                        </h4>
              {/* {listActiveMeals.map((value) => ( */}
              <>
                <div class="col-md-3 col-sm-6 ">
                  <div className="card-meal">
                    <img src={Testimonial.imgtesti} className="card-image rounded-2" alt="" />
                    <div className="detail-card my-3">
                      <p className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Available</p>
                      <h3>Makanan 1</h3>
                      <p className="text-secondary">Category : Makanan, minuman, desert</p>
                      <a className="btn btn-warning text-light rounded-1">Detail Meal</a>
                    </div>
                  </div>


                </div>
                <div class="col-md-3 col-sm-6 ">
                  <div className="card-meal">
                    <img src={Testimonial.imgtesti} className="card-image rounded-2" alt="" />
                    <div className="detail-card my-3">
                      <p className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Available</p>
                      <h3>Makanan 2</h3>
                      <p className="text-secondary">Category : Makanan, minuman, desert</p>
                      <a className="btn btn-warning text-light rounded-1">Detail Meal</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 ">
                  <div className="card-meal">
                    <img src={Testimonial.imgtesti} className="card-image rounded-2" alt="" />
                    <div className="detail-card my-3">
                      <p className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Available</p>
                      <h3>Makanan 3</h3>
                      <p className="text-secondary">Category : Makanan, minuman, desert</p>
                      <a className="btn btn-warning text-light rounded-1">Detail Meal</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 ">
                  <div className="card-meal">
                    <img src={Testimonial.imgtesti} className="card-image rounded-2" alt="" />
                    <div className="detail-card my-3">
                      <p className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Available</p>
                      <h3>Makanan 3</h3>
                      <p className="text-secondary">Category : Makanan, minuman, desert</p>
                      <a className="btn btn-warning text-light border-1">Detail Meal</a>
                    </div>
                  </div>
                </div>
              </>

              {/* ))} */}


            </div>

          </div>


        </div>
      </div>
    </>
  );
};

export default MemberDashboard;
