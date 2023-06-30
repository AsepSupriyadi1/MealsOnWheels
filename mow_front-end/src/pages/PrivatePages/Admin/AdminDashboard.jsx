import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gallery } from "../../../assets/images/Images";
import { faCar, faDollar, faHamburger, faUsers } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  return (
    <>
      <div className="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Dashboard</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6 ">
            <div class="box-content d-flex-between box-border-1 rounded-sm">
              <div>
                <h1>85</h1>
                <h3>Meals</h3>
              </div>
              <FontAwesomeIcon icon={faHamburger} style={{ fontSize: "5em", color: "#BBBBBB" }} />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="box-content d-flex-between box-border-1 rounded-sm">
              <div>
                <h1>85</h1>
                <h3>Partner</h3>
              </div>
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: "5em", color: "#BBBBBB" }} />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="box-content d-flex-between box-border-1 rounded-sm">
              <div>
                <h1>85</h1>
                <h3>Driver</h3>
              </div>
              <FontAwesomeIcon icon={faCar} style={{ fontSize: "5em", color: "#BBBBBB" }} />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="box-content box-fade d-flex-between box-border-1 rounded-sm">
              <div>
                <h1>85</h1>
                <h3>Donors</h3>
              </div>
              <FontAwesomeIcon icon={faDollar} style={{ fontSize: "5em", color: "#BBBBBB" }} />
            </div>
          </div>
        </div>
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Dashboard</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="cause-single">
              <div class="cause-image">
                <a href="donate.html" class="btn main-btn visible-xs">
                  Donate Now
                </a>
                <img src="images/placehold/causes/single.jpg" alt="" />
                <div class="cause-overlay hidden-xs">
                  <div class="overlay-inner">
                    <span class="meta-date">
                      <i class="fa fa-calendar-o"></i>24 April 2014
                    </span>
                    <span class="meta-author">
                      <i class="fa fa-user"></i>Esmet Hajrizi
                    </span>
                    <span class="price">
                      Needed Donation <em>$24,000</em>
                    </span>
                    <div class="text-center">
                      <a href="donate.html" class="btn main-btn">
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cause-content">
                <div class="cause-holder-list clearfix">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span class="raised pull-left">Raised: $2,400</span>
                  <span class="goal pull-right">Goal: $6,180</span>
                </div>
                <span class="meta-cause visible-xs">24 January 2014 by Esmet Hajrizi</span>
                <h3 class="cause-title">Futures for Children</h3>

                <blockquote>Nam eleifend mollis leo, eu tristique nibh scelerisque at. Cras bibendum enim nec diam consequat.</blockquote>
                <p>
                  Nunc mollis orci sed ipsum rhoncus, vitae eleifend quam congue. Fusce at sapien quis purus gravida varius ut sed turpis. Ut elit elit, malesuada id purus eget, euismod mollis est. Phasellus et magna justo. Nulla ut orci
                  vel quam sagittis interdum vel et arcu.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <a href="javascript:void(0);" class="go-prev">
                  <i class="fa fa-long-arrow-left"></i>Prev Cause
                </a>
                <a href="#" class="go-next inactive">
                  Next Cause <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="box-content">
              <h4 class="widget-title">
                <span>Our Gallery</span>
              </h4>
              <div class="gallery-wrapper">
                <div class="gallery-thumb">
                  <a href="images/placehold/gallery/5.jpg" class="fancybox" data-fancybox-group="group3">
                    <img src="images/placehold/gallery/thumb(5).jpg" alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href="images/placehold/gallery/6.jpg" class="fancybox" data-fancybox-group="group3">
                    <img src="images/placehold/gallery/thumb(6).jpg" alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href="images/placehold/gallery/7.jpg" class="fancybox" data-fancybox-group="group3">
                    <img src="images/placehold/gallery/thumb(7).jpg" alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href="images/placehold/gallery/8.jpg" class="fancybox" data-fancybox-group="group3">
                    <img src="images/placehold/gallery/thumb(8).jpg" alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href="images/placehold/gallery/9.jpg" class="fancybox" data-fancybox-group="group3">
                    <img src="images/placehold/gallery/thumb(9).jpg" alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href="images/placehold/gallery/10.jpg" class="fancybox" data-fancybox-group="group3">
                    <img src="images/placehold/gallery/thumb(10).jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="box-content">
              <h4 class="widget-title">
                <span>Upcoming events</span>
              </h4>
              <div class="events-sidebar">
                <ul>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src="images/placehold/events/thumb(1).jpg" alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html">Important Haverhill Golf Club Charity Day</a>
                      </h5>
                      <p class="event-meta">02 January 2015</p>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src="images/placehold/events/thumb(2).jpg" alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html">Two days of free training in Newcastle</a>
                      </h5>
                      <p class="event-meta">9 July 2014</p>
                    </div>
                  </li>
                  <li class="event-item">
                    <div class="event-thumb">
                      <img src="images/placehold/events/thumb(3).jpg" alt="" />
                    </div>
                    <div class="event-content">
                      <h5 class="event-title">
                        <a href="event-detail.html">The annual event for the voluntary sector</a>
                      </h5>
                      <p class="event-meta">14 June 2014</p>
                    </div>
                  </li>
                </ul>
                <a href="events-list.html" class="read-more">
                  More Events &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* END CONTAINER */}
    </>
  );
};

export default AdminDashboard;
