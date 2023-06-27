import { Testimonial } from "../../assets/images/Images";
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
          <img src={Testimonial.testimonial} alt="" />
          <div className="event-content">
            <h3>Welcome to Meals on Wheels!</h3>
            <p>
            We are a non-profit organization committed to providing quality food to those in need. At Meals on Wheels, we understand that food is a fundamental human right, and we are dedicated to ensuring that no one in our community has to go hungry.
            </p>
            <p>
            Our mission is to fight hunger by providing healthy, nutritious and delicious food to people who cannot afford to feed themselves. We recognize that some vulnerable groups, such as the elderly, people with disabilities, and people with serious health conditions, may not have adequate access to daily food. That's why we are here.
            </p>
            <p>
            Since its founding, Meals on Wheels has been a bridge between volunteers, donors and those in need. Every day, our passionate team and amazing volunteers work together to prepare, package, and deliver healthy, delicious food to the doorsteps of those who need it. We also strive to maintain a personal connection with each of our service recipients, so that we can provide them with the social support and warmth they need.
            </p>
            <p>
            We are proud of our food program which is focused on nutrition and health. Our team of experts carefully plan each menu to meet individual nutritional needs. We strive to use as many fresh and local ingredients as possible, taking into account any dietary preferences or special needs. We believe that good food can affect a person's quality of life, and we want to provide a positive and satisfying experience through every meal we serve.
            </p>
            <p>
            However, we couldn't do this without your help. Your donation means a lot to us. With your contribution, we can expand our reach, reach more people in need, and provide nutritious food to those who need it.
            Join us at Meals on Wheels as we carry out our noble mission together. Let's work together to end hunger and ensure that everyone has access to good and dignified food.
            </p>
          </div>
          </div>   
         </div>
        </div>
        <div className="col-md-4">

        
        <div class="box-content">
						<h4 class="widget-title"><span>Our Gallery</span></h4>
						<div class="gallery-wrapper">
							<div class="gallery-thumb">
								<a href={gallery.thumb1} class="fancybox" data-fancybox-group="group3">
									<img src={gallery.thumb1} alt=""/>
								</a>
							</div> 
							<div class="gallery-thumb">
								<a href={gallery.thumb2} class="fancybox" data-fancybox-group="group3">
									<img src={gallery.thumb2} alt=""/>
								</a>
							</div> 
							<div class="gallery-thumb">
								<a href={gallery.thumb3} class="fancybox" data-fancybox-group="group3">
									<img src={gallery.thumb3} alt=""/>
								</a>
							</div> 
							<div class="gallery-thumb">
								<a href={gallery.thumb4} class="fancybox" data-fancybox-group="group3">
									<img src={gallery.thumb4} alt=""/>
								</a>
							</div> 
							<div class="gallery-thumb">
								<a href={gallery.thumb4} class="fancybox" data-fancybox-group="group3">
									<img src={gallery.thumb4} alt=""/>
								</a>
							</div> 
							<div class="gallery-thumb">
								<a href={gallery.thumb4} class="fancybox" data-fancybox-group="group3">
									<img src={gallery.thumb4} alt=""/>
								</a>
							</div> 
						</div> 
					</div>

          </div>
         
          
         
        


      </div>
    </div>
     

    </>
  );
};

export default AboutPage;
