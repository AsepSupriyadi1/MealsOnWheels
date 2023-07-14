import axios from "axios";
import React, { useEffect } from "react";
import { Testimonial } from "../../assets/images/Images";

const HomePage = () => {
  // const options = {
  //   method: "GET",
  //   url: "https://trueway-geocoding.p.rapidapi.com/Geocode",
  //   params: {
  //     address: "Pameungpeuk, Bandung Regency, Indonesia",
  //     language: "en",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "408a68ad23mshba80c18df800604p11fe66jsn16ecedb0c9d3",
  //     "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    // axios.request(options).then((response) => {
    //   console.log(response.data);
    // });

    axios
      .get("http://api.positionstack.com/v1/forward?access_key=ea2a9b8fdf6ea0036a4b100813971ca3&query=Pameungpeuk Bandung Regency Indonesia")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="container">
        {/* slide show */}
        <div className="services box-content shadow" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <div className="shadow" id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel ">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={Testimonial.imgtesti} className="d-block w-100" alt="..." />
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
            <div className="col-md-4 service-item  mb-5 bg-body rounded">
              <div className="shadow p-2">
                <div className="service-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title ">Vision</h4>
                  <p>Promoting health, we provide hot noon meals to eligible adults unable to cook due to age, disease, or disability. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 service-item  mb-5 bg-body rounded">
              <div className="shadow p-2">
                <div className="service-icon">
                  <i className="fa fa-umbrella"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">Help & Support</h4>
                  <p>Receive support from MerryMeal's caring team. Overcome challenges with our help, resources, and guidance. Contact us for assistance. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 service-item  mb-5 bg-body rounded">
              <div className="shadow p-2">
                <div className="service-icon">
                  <i className="fa fa-group"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">Volunteering</h4>
                  <p>Make a difference by joining MerryMeal's volunteer program. Prepare, deliver meals, engage, and create impact. Sign up now!</p>
                </div>
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
                <p className="md-px-5 ms-px-0">
                  Protect vital services provided by Meals on Wheels. Ensure continuous delivery of nutritious meals to those in need. Join us in making a significant impact and safeguarding access to nourishment for those who need it most.
                </p>
              </div>
            </div>

            <div class="row justify-content-center text-center mt-5">
              <div class="col-md-6 col-sm-12 text-md-end mb-3 mb-md-0">
                <a href="/register" class="bg-warning text-dark text-center p-3 rounded-pill shadow " style={{ width: "100%" }}>
                  SIGN UP NOW
                </a>
              </div>
              <div class="col-md-6 col-sm-12 text-md-start mt-4 mt-md-0">
                <a href="/login" class="bg-warning text-dark text-center p-3 rounded-pill shadow" style={{ width: "100%" }}>
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>

          {/* end participate */}
          <div className="container py-5">
            <h2 className=" text-center text-success mb-3 mt-3 ">KEEPING SENIOR SAFE</h2>
            <div className="border-container mb-2">
              <div className="border border-bottom border-secondary width-small"></div>
            </div>
            <div className="row py-5">
              <div className="col-md-6 mb-4 px-md-5 ">
                <img className="shadow" src={Testimonial.grand} width="100%" alt="" />
              </div>
              <div className="col-md-6">
                <h3 className="text-success">PROTECT MEALS ON WHEELS BEFORE IT'S TOO LATE</h3>
                <p>
                  Safeguard Meals on Wheels before it's too late Protect the Delivery of Meals on Wheels before it's too late Preserve Meals on Wheels before it's too late Secure Meals on Wheels before it's too late Ensure the Safety of
                  Meals on Wheels before it's too late Defend Meals on Wheels before it's too late Shield Meals on Wheels before it's too late Prioritize the Protection of Meals on Wheels before it's too late Guard Meals on Wheels before
                  it's too late Prevent the Loss of Meals on Wheels before it's too late
                </p>
                <p></p>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-6 ">
                <h4 className="text-success">HISTORIC WHITE HOUSE CONFERENCE ON HUNGER, NUTRITION AND HEALTH</h4>
                <p>
                  Meals on Wheels Protection: Act Now, Don't Wait! Preserving Meals on Wheels: Time is Running Out! Urgent Action Needed: Safeguarding Meals on Wheels Securing Meals on Wheels: Don't Delay! Prioritize the Safety of Meals on
                  Wheels Today Defend Meals on Wheels: Prevent It from Vanishing Taking a Stand: Protecting Meals on Wheels from Threats Ensuring the Future of Meals on Wheels: Act Before It's Too Late Shielding Meals on Wheels:
                  Safeguarding Access to Nourishment Bolstering Meals on Wheels: Guarding against Impending Crisis
                </p>
              </div>
              <div className="col-md-6 px-md-5 ">
                <img className="shadow " src={Testimonial.grandma} width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
