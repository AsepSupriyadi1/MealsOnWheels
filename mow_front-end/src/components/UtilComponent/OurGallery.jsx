import { Contactus } from "../../assets/images/Images";

function OurGallery () {
    return (
        <div class="box-content shadow">
              <h4 class="widget-title">
                <span className="text-success">Our Gallery</span>
              </h4>
              <div class="gallery-wrapper">
                <div class="gallery-thumb">
                  <a href={Contactus.thumb5} class="fancybox" data-fancybox-group="group3">
                    <img src={Contactus.thumb10} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={Contactus.thumb6} class="fancybox" data-fancybox-group="group3">
                    <img src={Contactus.thumb6} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={Contactus.thumb7} class="fancybox" data-fancybox-group="group3">
                    <img src={Contactus.thumb7} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={Contactus.thumb8} class="fancybox" data-fancybox-group="group3">
                    <img src={Contactus.thumb8} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={Contactus.thumb9} class="fancybox" data-fancybox-group="group3">
                    <img src={Contactus.thumb9} alt="" />
                  </a>
                </div>
                <div class="gallery-thumb">
                  <a href={Contactus.thumb10} class="fancybox" data-fancybox-group="group3">
                    <img src={Contactus.thumb10} alt="" />
                  </a>
                </div>
              </div>
            </div>
    )
}

export default OurGallery;