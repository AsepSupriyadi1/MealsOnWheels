import React from "react";
import SliderComponent from "../../components/DynamicComponent/SliderComponent";

const HomePage = () => {
  return (
    <>
      <div class="container">
        <div className="services box-content" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <div className="row">
            <div className="col-md-offset-2 col-md-8 services-header mb-5">
              <h1 className="widget-title">Welcome to Meals On Wheels</h1>
              <span></span>
              <p>There is no exercise better for the heart than reaching down and lifting people up.</p>
            </div>
          </div>
          <div className="row">
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
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px", paddingLeft: "60px", paddingRight: "60px" }}>
          <div style={{ width: "45%" }}>
            <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
              <h2 style={{ textAlign: "center" }}>Sign Up Now</h2>
              <p>
                If you or someone you know is a qualified adult living at home, who is unable to cook for themselves or maintain their nutritional status due to age, disease, or disability, sign up now to receive Meals On Wheels services
                and enjoy hot and nutritious meals delivered to your doorstep.
              </p>
              <a href="/register" className="btn main-btn" style={{ display: "block", margin: "0 auto", textAlign: "center" }}>
                Sign Up Now
              </a>
            </div>
          </div>

          <div style={{ width: "45%" }}>
            <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
              <h2 style={{ textAlign: "center" }}>Donate Now</h2>
              <p>
                At Meals On Wheels, we rely on the generous contributions from individuals like you to continue our mission of providing hot and nutritious meals to those in need. Your donation will help us reach more qualified adults
                living at home who are unable to cook for themselves or maintain their nutritional status.
              </p>
              <a href="/donate" className="btn main-btn" style={{ display: "block", margin: "0 auto", textAlign: "center" }}>
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
