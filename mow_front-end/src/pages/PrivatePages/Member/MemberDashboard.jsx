import { Member } from "../../../assets/images/Images";
import { Link } from "react-router-dom";
const MemberDashboard = () => {
  return (
    <>
      {/* page header */}
      <div className="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">DAILY MEALS</h2>
            </div>
            <div class="col-md-6 col-sm-6 back-home">
               <Link to="/member"><a className="btn primary-btn" style={{ marginRight: "10px" }}>View daily meals</a> </Link>         
               <Link to="/feedback"> <a className="btn primary-btn" >Feedback</a></Link>  			
					</div> 
          </div>
        </div>
        {/* end page header */}
      </div>

      <div class="container">


        <div className="event-content">
          <div className="event-single">
            <div className="event-image text-center">
              <img src={Member.membereat} alt="" class="centered-img" />
              <div className="event-content">
                <div className="row">

                  <h4 class="widget-title"><span>Meal package List</span></h4>

                  <div class="col-md-4 col-sm-6 cause-grid">
                    <div class="cause-thumb">
                      <img src={Member.membereat} alt="" />
                      <div class="cause-hover">
                        <div class="cause-holder clearfix">
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span class="raised pull-left">Raised: $2,400</span>
                          <span class="goal pull-right">Goal: $6,180</span>
                        </div>
                      </div>
                    </div>
                    <div class="cause-content">
                      <h4 class="cause-title"><a href="cause-detail.html">Meal package card A</a></h4>
                      <div className="row ">
                        <div className="col-md-6 bordermd">
                          <p>Greed salad</p>
                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Teh poci</p>

                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Miso soup</p>
                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Fruit tard</p>
                        </div>
                        <div className="col-md-12 bordermd">
                          <p>Rouster duck</p>
                        </div>

                      </div>

                     <Link to="/detailpakage"><a class="btn main-btn mtop">View details</a></Link>
                       
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6 cause-grid">
                    <div class="cause-thumb">
                      <img src={Member.membereat} alt="" />
                      <div class="cause-hover">
                        <div class="cause-holder clearfix">
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span class="raised pull-left">Raised: $2,400</span>
                          <span class="goal pull-right">Goal: $6,180</span>
                        </div>
                      </div>
                    </div>
                    <div class="cause-content">
                      <h4 class="cause-title"><a href="cause-detail.html">Meal package card B</a></h4>
                      <div className="row ">
                        <div className="col-md-6 bordermd">
                          <p>Greed salad</p>
                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Teh poci</p>

                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Miso soup</p>
                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Fruit tard</p>
                        </div>
                        <div className="col-md-12 bordermd">
                          <p>Rouster duck</p>
                        </div>

                      </div>


                      <a href="#" class="btn main-btn mtop">View details</a>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6 cause-grid">
                    <div class="cause-thumb">
                      <img src={Member.membereat} alt="" />
                      <div class="cause-hover">
                        <div class="cause-holder clearfix">
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span class="raised pull-left">Raised: $2,400</span>
                          <span class="goal pull-right">Goal: $6,180</span>
                        </div>
                      </div>
                    </div>
                    <div class="cause-content">
                      <h4 class="cause-title"><a href="cause-detail.html">Meal package card C</a></h4>
                      <div className="row ">
                        <div className="col-md-6 bordermd">
                          <p>Greed salad</p>
                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Teh poci</p>

                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Miso soup</p>
                        </div>
                        <div className="col-md-6 bordermd">
                          <p>Fruit tard</p>
                        </div>
                        <div className="col-md-12 bordermd">
                          <p>Rouster duck</p>
                        </div>

                      </div>


                      <a href="#" class="btn main-btn mtop">View details</a>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>


          {/*  */}


        </div>



      </div>







    </>
  );
};

export default MemberDashboard;
