import { Contactus } from "../../assets/images/Images";

function OurTeam () {
    return (
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
                      <h6 class="event-subtitle text-secondary">Functional and Data Analysis</h6>
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
                      <h6 class="event-subtitle text-secondary">Front End Designer and Develper</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
    )
}

export default OurTeam;