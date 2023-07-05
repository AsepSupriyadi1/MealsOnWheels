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

        <div className="row">
          <div className="col-md-8">
            <div className="event-single">
              <div className="event-image">
                <img src={Testimonial.imgtesti} alt="" />
                <div className="event-content">
                  <h3 className="about-h3">MEALS ON WHEELS AMERICA </h3>
                  <p>
                    Meals on Wheels America is the leadership organization supporting the more than 5,000 community-based programs across the country that are dedicated to addressing senior isolation and hunger. Powered by a dedicated
                    volunteer workforce, this network delivers the nutritious meals, friendly visits and safety checks that enable America’s seniors to live nourished lives with independence and dignity. By providing funding, leadership,
                    education, research and advocacy support, Meals on Wheels America empowers its local member programs to strengthen their communities, one senior at a time.
                  </p>
                  <h3 className="about-h3"> OUR VISION</h3>
                  An America in which all seniors live nourished lives with independence and dignity.
                  <h3 className="about-h3">OUR MISSION</h3>
                  To empower local community programs to improve the health and quality of life of the seniors they serve so that no one is left hungry or isolated.
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="box-content">
              <h4 class="widget-title">
                <span>Our Gallery</span>
              </h4>
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

            <div class="box-content">
              <h4 class="widget-title">
                <span>Our Team</span>
              </h4>
              <div class="events-sidebar">
                <ul>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb11} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html">Abdul Rahman Solehudin</a>
                      </h5>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb22} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html">Ajri Muhamad Siddik</a>
                      </h5>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html">Asep Supriyadi</a>
                      </h5>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html">Darren Farel andrian</a>
                      </h5>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src={Contactus.thumb33} alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html">Syukur Sidiq Nur Alam</a>
                      </h5>
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
