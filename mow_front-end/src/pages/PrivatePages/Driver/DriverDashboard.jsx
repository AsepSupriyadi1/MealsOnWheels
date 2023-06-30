import { Testimonial, gallery, resources } from "../../../assets/images/Images";


const DriverDashboard = () => {
	return (
		<>
			<div className="container">
				<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-6">
							<h2 class="page-title">DRIVER DASHBOARD</h2>
						</div>
						<div class="col-md-6 col-sm-6 hidden-xs back-home">
							<a href="/home">&larr; Go back Home</a>
						</div>
					</div>
				</div>

			</div>

			<div className="container">
				<div className="row">
					<div class="col-md-4" >
						<div style={{ paddingTop: "30px" }}>
							<img src={resources.logo1} height={200} style={{ width: "100%", backgroundColor: "#6b9262", padding: "30px", boxShadow:"5px 5px 4px 0px #709567cf" }} alt="images" />
						</div>
					</div>
					<div class="col-md-8">
						<div class="event-list" style={{boxShadow:"5px 5px 4px 0px #709567cf"}}>
							<div class="event-thumb" style={{ padding: "20px" }}>
								<img src={Testimonial.testi4} style={{ borderRadius: "100%" }} height={160} alt="driver photos" />
							</div>
							<div class="event-content">
								<h4 class="event-title"><a href="event-detail.html">Profile Details</a></h4>
								<table>
									<tr>
										<td>Name</td>
										<td> : Abdul Rahman Shalehudin</td>
									</tr>
									<tr>
										<td>Email</td>
										<td> : rahmansh@driver.com</td>
									</tr>
									<tr>
										<td>Vehicle</td>
										<td> : Honda Yaris</td>
									</tr>
									<tr>
										<td>Status</td>
										<td> : Available</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="box-content" style={{boxShadow:"5px 5px 4px 0px #709567cf"}}>
							<h4 class="widget-title"><span>LIST DELIVERY</span></h4>
							<table className="delivery-table">
								<thead style={{ backgroundColor: "#333", color: "#faca3a" }}>
									<tr>
										<th className="deliv-rows">No</th>
										<th className="deliv-rows">Meals Orders</th>
										<th className="deliv-rows">Address</th>
										<th className="deliv-rows">Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="deliv-rows">1</td>
										<td className="deliv-rows">Meals Package B</td>
										<td className="deliv-rows">Kp. Legok Midar 001/021, Ciparay, Bandung</td>
										<td className="deliv-rows"><a className="btn main-btn" type="button" href="/details">Detail</a></td>
									</tr>
									<tr>
										<td className="deliv-rows">2</td>
										<td className="deliv-rows">Meals Package A</td>
										<td className="deliv-rows">Kp. Legok Midar 001/021, Ciparay, Bandung</td>
										<td className="deliv-rows"><input type="button" value="Detail" /></td>
									</tr>
									<tr>
										<td className="deliv-rows">3</td>
										<td className="deliv-rows">Meals Package C</td>
										<td className="deliv-rows">Kp. Legok Midar 001/021, Ciparay, Bandung</td>
										<td className="deliv-rows"><input type="button" value="Detail" /></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>


	);
};

export default DriverDashboard;
