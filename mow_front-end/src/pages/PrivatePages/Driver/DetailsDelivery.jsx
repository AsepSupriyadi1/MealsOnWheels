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

            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
            <div class="col-md-8">
					<div class="member-list">
						<div class="member-thumb" style={{backgroundSize:"cover"}}>
							<img src={food.food1} height={380} alt=""/>
						</div>
						<div class="member-content">
							<div class="pull-left">
                                <h4 class="widget-title"><span>DETAILS DELIVERY</span></h4>
							</div>
							<div class="clearfix"></div>
                            <table>
									<tr>
										<td>Member's Name</td>
										<td>: Jhon Doe</td>
									</tr>
									<tr>
										<td>Package Name</td>
										<td>: Meals Package B</td>
									</tr>
									<tr>
										<td>Kitchen Address </td>
										<td>: Majalaya, New York City</td>
									</tr>
									<tr>
										<td>Member Address</td>
										<td>: Kp. Legok Midar 001/021, Ciparay, Bandung</td>
									</tr>
								</table>
								<div>
									<p>Status</p>
                                	<a href="#" class="btn main-btn text-center" style={{width:"100%"}}>PICK UP</a>
								</div>
                                

						</div>
					</div>
                </div>
            </div>      
        </div>

        
    )
}

export default DetailsDelivery;