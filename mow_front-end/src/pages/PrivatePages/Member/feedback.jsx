import { Member } from "../../../assets/images/Images";
import { Link } from "react-router-dom";

const FeedbackMember = () => {
    return (<>

        {/* page header */}
        <div className="container">
            <div class="page-header">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <h2 class="page-title">Evaluate/Feedback</h2>
                    </div>
                    <div class="col-md-6 col-sm-6 back-home">
                    <Link to="/member"><a className="btn primary-btn" style={{ marginRight: "10px" }}>View daily meals</a> </Link>         
                    <Link to="/feedback"> <a className="btn primary-btn" >Feedback</a></Link>  
                    </div>
                </div>
            </div>
            {/* end page header */}
            
            <div className="event-single">
            
            <div id="contact" class="contactForm clearfix">
              <div id="result"></div>
              <fieldset>
                <label for="name-id">
                  First Name:<span>Put your name here</span>
                </label>
                <input type="text" id="name-id" name="name-id" />
              </fieldset>
              <fieldset>
                <label for="surname-id">
                  Last Name:<span>Put your surname here</span>
                </label>
                <input type="text" id="surname-id" name="surname-id" />
              </fieldset>
              <fieldset>
                <label for="email-id">
                  E-mail:<span>Type email address</span>
                </label>
                <input type="text" id="email-id" name="email-id" />
              </fieldset>
              <fieldset>
                <label for="message">
                  Message:<span>Type email address</span>
                </label>
                <textarea name="message" id="message" rows="6"></textarea>
              </fieldset>
              <fieldset>
                <button id="submit_btn" class="btn main-btn" type="submit" name="">
                  Send Feedback
                </button>
              </fieldset>
            </div>
            </div>
           
        

        </div>



       

    </>);
}

export default FeedbackMember;