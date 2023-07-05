import { Testimonial } from "../../assets/images/Images";
import { Contactus } from "../../assets/images/Images";
import { gallery } from "../../assets/images/Images";
const AboutPage = () => {
  return (
    <>
      <div className="container">
        {/* page header */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">About Us</h2>
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

                  <p> Meals on Wheels is a leadership organization that supports more than 5,000 community-based programs across the country dedicated to addressing senior isolation and hunger. Supported by a dedicated volunteer workforce, the network provides nutritious meals, friendly visits, and safety checks that enable seniors to lead nourishing lives with independence and dignity. By providing funding, leadership, education, research, and advocacy support, Meals on Wheels empowers its local member programs to strengthen their communities, one senior at a time.</p>
                  <h3 className="about-h3 m-0 text-success">	OUR VISION</h3>
                  <p>where all seniors live a nourishing life with independence and dignity.</p>

                  <h3 className="about-h3 m-0 text-success">OUR MISSION</h3>
                  To empower local community programs to improve the health and quality of life of the seniors they serve so that no one is left hungry or isolated.
                </div>
                <br />
                <div className="event-content shadow ">
                  <div className="owner">
                    <div className="row ">
                      <div className="col-md-6">
                        <img src={Testimonial.david} className="shadow" alt="" />

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


            <div class="box-content shadow">
              <h4 class="widget-title text-success"><span>Our Gallery</span></h4>
              <div class="gallery-wrapper">
                <div class="gallery-thumb">
                  <a href={gallery.thumb1} class="fancybox" data-fancybox-group="group3">
                    <img src={gallery.thumb1} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={gallery.thumb2} class="fancybox" data-fancybox-group="group3">
                    <img src={gallery.thumb2} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={gallery.thumb3} class="fancybox" data-fancybox-group="group3">
                    <img src={gallery.thumb3} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={gallery.thumb4} class="fancybox" data-fancybox-group="group3">
                    <img src={gallery.thumb4} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={gallery.thumb4} class="fancybox" data-fancybox-group="group3">
                    <img src={gallery.thumb4} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={gallery.thumb4} class="fancybox" data-fancybox-group="group3">
                    <img src={gallery.thumb4} alt="" />
                  </a>
                </div>
              </div>
            </div>


            <div class="box-content shadow">
              <h4 class="widget-title">
                <span className="text-success">Our Teams</span>
              </h4>
              <div class="events-sidebar">
                <ul>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb11} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title ">
                        <a href="event-detail.html" className="text-success">Abdul Rahman Shalehudin</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Functional and UAT Analysis</h6>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb22} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html" className="text-success">Ajri Muhamad Sidik</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Funcitonal and Data Analysis</h6>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html" className="text-success">Asep Supriyadi</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Back End Security Analysis</h6>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html" className="text-success">Darren Farrel Andrian</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Scenario Analysis and Planning </h6>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html"className="text-success">Syukur Sidiq Nur Alam</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Front End Designer and       <div class="box-content shadow">
              <h4 class="widget-title">
                <span className="text-success">Our Team</span>
              </h4>
              <div class="events-sidebar">
                <ul>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb11} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title ">
                        <a href="event-detail.html" className="text-success">Abdul Rahman Solehudin</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Functional and UI Analysis</h6>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb22} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html" className="text-success">Ajri Muhamad Siddik</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Fungcitonal and Data Analysis</h6>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html" className="text-success">Asep Supriyadi</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Back End Security Analysis</h6>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html" className="text-success">Darren Farel Andrian</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Scenario Analysis and Planning </h6>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html"className="text-success">Syukur Sidiq Nur Alam</a>
                      </h5>
                      <h6 class="event-subtitle text-secondary">Front End Designer and Develper</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      Develper</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>






        </div>
      </div>


    </>
  );
};

export default AboutPage;
