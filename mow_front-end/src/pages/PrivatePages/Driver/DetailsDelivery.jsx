import { food } from "../../../assets/images/Images";


const DetailsDelivery = () => {
	return (
		<div className="container">
			<div class="page-header">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<h2 class="page-title">DETAILS DELIVERY</h2>
					</div>
					<div class="col-md-6 col-sm-6 hidden-xs back-home">
						<a href="/driver">&larr; Back to Dashboard</a>
					</div>
				</div>
			</div>

			<div className="container" style={{ display: "flex", justifyContent: "center"}}>
				<div class="col-md-8">
					<div class="box-content" style={{boxShadow:"5px 5px 4px 0px #709567cf"}}>
						<div class="member-thumb" style={{ backgroundSize: "cover" }}>
							<img src={food.food1} height={380} alt="" />
						</div>
						<div class="member-content">
							<div class="pull-left">
								<h4 class="widget-title"><span>DETAILS DELIVERY</span></h4>
							</div>
							<div class="clearfix"></div>
							<div className="col-md-4">
								<p>Member's Name </p>
								<p>Package Name </p>
								<p>Kitchen Address</p>
								<p>Member Address</p>
							</div>
							<div className="col-md-8">
								<p>: John Doe</p>
								<p>: Meals Package B</p>
								<p>: Majalaya, New York City</p>
								<p>: Kp. Legok Midar 001/021, Ciparay, Bandung</p>
							</div>


							<div>
								<p>Status</p>
								<a href="#" class="btn main-btn text-center" style={{ width: "100%" }}>PICK UP</a>
							</div>


						</div>
					</div>
				</div>
			</div>
		</div>


	)
}

export default DetailsDelivery;