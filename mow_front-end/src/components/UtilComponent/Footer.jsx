import { resources } from "../../assets/images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { gallery } from "../../assets/images/Images";

function Footer() {
  return (
    <>
      <footer class="site-footer">
        <div class="top-footer">
          <div class="container">
            <div class="row d-flex-between">
              <div class="col-md-6 col-sm-12 col-xs-12 footer-widget">
                <h4 class="footer-widget-title">More about US</h4>
                <p>Meals on Wheels is a nationwide organization that supports community-based programs addressing senior isolation and hunger. Through volunteers, they provide meals, companionship, and safety checks for independent living. Their vision is for seniors to have nourishing lives with dignity, and their mission is to empower local programs to eliminate hunger and isolation among seniors.</p>
              </div>
              <div class="col-md-6 col-sm-8 col-xs-12 footer-widget">
                <h4 class="footer-widget-title">Stay in touch with us</h4>
                <ul class="footer-social">
                  <li>
                    <a href="#" data-toggle="tooltip" title="Facebook" class="fa fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" title="Twitter" class="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" title="Linkedin" class="fa fa-linkedin"></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" title="Flickr" class="fa fa-flickr"></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" title="Youtube" class="fa fa-youtube"></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" title="RSS" class="fa fa-rss"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="main-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6 footer-widget">
                <h4 class="footer-widget-title">Useful Links</h4>
                <ul>
                  <li>
                    <a href="/terms">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-3 col-sm-4 col-xs-12 contact-info footer-widget">
                <h4 class="footer-widget-title">Contact Info</h4>
                <p>Get in touch with us !</p>
                <ul>
                  <li>
                    <span>Phone:</span>
                    <a href="skype:+34234235322?action">(123) 2445 - 2443</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:your@supportemail.com">mow@supportemail.com</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-sm-6 footer-widget">
                <h4 class="footer-widget-title">Our Gallery</h4>
                <div class="footer-gallery">
                  <div class="gallery-thumb">
                    <a href="images/placehold/gallery/1.jpg" class="fancybox" data-fancybox-group="group1">
                      <img src={gallery.thumb1} alt="" />
                    </a>
                  </div>
                  <div class="gallery-thumb">
                    <a href="images/placehold/gallery/2.jpg" class="fancybox" data-fancybox-group="group1">
                      <img src={gallery.thumb2} alt="" />
                    </a>
                  </div>
                  <div class="gallery-thumb">
                    <a href="images/placehold/gallery/3.jpg" class="fancybox" data-fancybox-group="group1">
                      <img src={gallery.thumb3} alt="" />
                    </a>
                  </div>
                  <div class="gallery-thumb">
                    <a href="images/placehold/gallery/4.jpg" class="fancybox" data-fancybox-group="group1">
                      <img src={gallery.thumb4} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="copyright">
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <p class="small-text">Copyright 2023 &copy;. Meals On Wheels.</p>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="credits">
                    <p class="small-text">
                      Built with <i class="fa fa-heart"></i> by group 7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
