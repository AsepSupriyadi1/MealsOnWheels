import { anjay } from "../../assets/images/Images";
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
                      <img src={anjay.rahman} alt=""  className="team-image"  />
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
                      <div></div>
                      <img src={anjay.ajri}  alt=""  className="team-image" />
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
                      <img src={anjay.asep} alt=""  className="team-image" />
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
                      <img src={anjay.darren} alt=""  className="team-image" />
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
                      <img src={anjay.syukur} alt=""  className="team-image" />
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