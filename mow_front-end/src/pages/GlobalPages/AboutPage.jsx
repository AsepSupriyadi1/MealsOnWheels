import { Testimonial } from "../../assets/images/Images";
import { anjay } from "../../assets/images/Images";
// import { Contactus } from "../../assets/images/Images";
// import { gallery } from "../../assets/images/Images";
import OurGallery from "../../components/UtilComponent/OurGallery";
import OurTeam from "../../components/UtilComponent/OurTeam";
const AboutPage = () => {
  return (
    <>
      <div className="container">
        {/* page header */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title d-none d-lg-block">About Us</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="/home">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        {/* end page header */}

        <div className="row ">
          <div className="col-md-8 ">
            <div className="event-single ">
              <div className="event-image">
                <img src={Testimonial.imgtesti} alt="" />
                <div className="event-content shadow">
                  <h4 className="about-h3 m-0 text-success">MEALS ON WHEELS </h4>
                  <p>
                    {" "}
                    Meals on Wheels is a leadership organization that supports more than 5,000 community-based programs across the country dedicated to addressing senior isolation and hunger. Supported by a dedicated volunteer workforce,
                    the network provides nutritious meals, friendly visits, and safety checks that enable seniors to lead nourishing lives with independence and dignity. By providing funding, leadership, education, research, and advocacy
                    support, Meals on Wheels empowers its local member programs to strengthen their communities, one senior at a time.
                  </p>
                  <h3 className="about-h3 m-0 text-success"> OUR VISION</h3>
                  <p>where all seniors live a nourishing life with independence and dignity.</p>
                  <h3 className="about-h3 m-0 text-success">OUR MISSION</h3>
                  To empower local community programs to improve the health and quality of life of the seniors they serve so that no one is left hungry or isolated.
                </div>
                <br />
                <div className="event-content shadow">
                  <div className="owner">
                    <div className="row ">
                      <div className="col-md-6 mb-sm-4">
                        <img src={Testimonial.david} className="shadow mb-4 mb-md-0 " alt="" />
                      </div>
                      <div className="col-md-6 ">
                        <h4 class="event-title text-success">Mr.David</h4>
                        <h6 className="text-black-50">Owner</h6>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus blanditiis a. Quaerat hic consectetur quam. Animi corporis beatae enim.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <OurGallery />
            <OurTeam />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
