
import OurGallery from "../../components/UtilComponent/OurGallery";
import OurTeam from "../../components/UtilComponent/OurTeam";
const ContactPage = () => {
  return (
    <>
   

      <div class="container">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-6 ">
              <h2 class="page-title">Contact Page</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 contact-page">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262202.88671172387!2d107.29343528326255!3d-6.91518078792871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e616cf485735%3A0x3d9935966c87148!2sDamn*21%20I%20Love%20Indonesia!5e0!3m2!1sid!2sid!4v1687859433414!5m2!1sid!2sid"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ width: "100%" }} className="shadow"
            ></iframe>
            <div id="contact" class="contactForm clearfix shadow">
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
                <button id="submit_btn" class="btn btn-warning rounded-0" type="submit" name="">
                  Send Message
                </button>
              </fieldset>
            </div>
          </div>

          <div class="col-md-4">
            <OurGallery/>
            <OurTeam/>

            

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
