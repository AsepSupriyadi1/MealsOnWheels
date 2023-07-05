import axios from "axios";
import React, { useEffect } from "react";
import { Testimonial } from "../../assets/images/Images";


const HomePage = () => {
  return (
    <>
      <div class="container">
        {/* slide show */}
        <div className="services box-content shadow" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <div className="shadow" id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={Testimonial.imgtesti} height="500px" width="100%" alt="..." />
                <div class="d-none d-md-block  text-center">
                  <div className="bg-dark py-4" style={{ position: "absolute", bottom: "0", width: "100%", opacity: "0.8" }}>
                    <h5 className="text-white ">Welcome to Meals On Wheels</h5>
                    <p className="text-white">There is no exercise better for the heart than reaching down and lifting people up.</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={Testimonial.kentang} class="d-block w-100" alt="..." />
                <div class="d-none d-md-block  text-center">
                  <div className="bg-dark py-4" style={{ position: "absolute", bottom: "0", width: "100%", opacity: "0.8" }}>
                    <h5 className="text-white ">Welcome to Meals On Wheels</h5>
                    <p className="text-white">There is no exercise better for the heart than reaching down and lifting people up.</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Testimonial.givers} class="d-block w-100" alt="..." />
                <div class="d-none d-md-block  text-center">
                  <div className="bg-dark py-4" style={{ position: "absolute", bottom: "0", width: "100%", opacity: "0.8" }}>
                    <h5 className="text-white ">Welcome to Meals On Wheels</h5>
                    <p className="text-white">There is no exercise better for the heart than reaching down and lifting people up.</p>
                  </div>
                </div>
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

          {/* service */}
          <div className="row mt-4">
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-globe"></i>
              </div>
              <div className="service-content">
                <h4 className="service-title">Vision</h4>
                <p>
                  To ensure that every qualified adult living at home, who is unable to cook for themselves or maintain their nutritional status due to age, disease, or disability, has access to a hot and nutritious noon meal, promoting
                  their health and well-being.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-umbrella"></i>
              </div>
              <div className="service-content">
                <h4 className="service-title">Help & Support</h4>
                <p>
                  Receive assistance and support from MerryMeal's dedicated team. Our compassionate staff is here to help you navigate challenges, answer your questions, and provide the necessary resources for your well-being. Contact us to
                  access the help and support you need.
                </p>
              </div>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-group"></i>
              </div>
              <div className="service-content">
                <h4 className="service-title">Volunteering</h4>
                <p>
                  Join MerryMeal's volunteer program and make a difference in the lives of those in need. As a volunteer, you will have the opportunity to contribute your time and skills to prepare and deliver meals, engage with recipients,
                  and create a positive impact on their lives. Sign up now to become a valued part of our volunteering team.
                </p>
              </div>
            </div>
          </div>
          {/* end service */}
          {/* Participate */}
          <div className="py-5 bg-light shadow">
            <div className="text-center">
              <h2 className="text-success mb-3 mt-3 ">PARTICIPATE NOW</h2>
              <div className="border-container mb-2">
                <div className="border  border-bottom border-secondary width-small"></div>
              </div>
              <div className="pt-4 px-4">
                <p className="px-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem impedit a omnis placeat quod. Provident rerum nihil non modi praesentium iste voluptas possimus quaerat, similique eaque nulla magni quam impedit!</p>

              </div>

            </div>

            <div className="d-flex justify-content-center text-center mt-5">
              <a href="/register" className="bg-warning text-dark text- p-3 rounded-pill me-4 shadow" style={{ width: "20%" }} >
                SIGN UP NOW
              </a>
              <a href="/register" className="bg-warning text-dark p-3 rounded-pill shadow" style={{ width: "20%" }} >
                DONATE NOW
              </a>
            </div>
          </div>
          {/* end participate */}
          <div className="container py-5">

            <h2 className=" text-center text-success mb-3 mt-3 ">KEEPING SENIOR SAFE</h2>
            <div className="border-container mb-2">
              <div className="border border-bottom border-secondary width-small"></div>
            </div>
            <div className="row py-5">
              <div className="col-md-6 px-5">
                <img className="shadow" src={Testimonial.grand} width="100%" alt="" />
              </div>
              <div className="col-md-6">
                <h3 className="text-success">PROTECT MEALS ON WHEELS BEFORE IT'S TOO LATE</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis cumque repellat dolores voluptate. Ratione, ad. Veritatis reiciendis, quos fuga labore, debitis officia ullam tempora unde quaerat, exercitationem autem officiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis cumque repellat dolores voluptate. Ratione, ad. Veritatis reiciendis, quos fuga labore, debitis officia ullam tempora unde quaerat, exercitationem autem officiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis cumque repellat dolores voluptate. Ratione, ad. Veritatis reiciendis, quos fuga labore, debitis officia ullam tempora unde quaerat, exercitationem autem officiis.</p>
                <p></p>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-6 ">
                <h4 className="text-success">HISTORIC WHITE HOUSE CONFERENCE ON HUNGER, NUTRITION AND HEALTH</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis cumque repellat dolores voluptate. Ratione, ad. Veritatis reiciendis, quos fuga labore, debitis officia ullam tempora unde quaerat, exercitationem autem officiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis cumque repellat dolores voluptate. Ratione, ad. Veritatis reiciendis, quos fuga labore, debitis officia ullam tempora unde quaerat, exercitationem autem officiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis cumque repellat dolores voluptate. Ratione, ad. Veritatis reiciendis, quos fuga labore, debitis officia ullam tempora unde quaerat, exercitationem autem officiis.</p>  
              </div>
              <div className="col-md-6 px-5">
              <img className="shadow" src={Testimonial.grandma} width="100%" alt="" />
              
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default HomePage;
