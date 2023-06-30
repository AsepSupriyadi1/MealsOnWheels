import { Testimonial, gallery, resources } from "../../../assets/images/Images";


const DonorDashboard = () => {
	return (
		<>
			<div className="container">
				<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-6">
							<h2 class="page-title">Donator</h2>
						</div>
						<div class="col-md-6 col-sm-6 hidden-xs back-home">
							<a href="/home">&larr; Go back Home</a>
						</div>
					</div>
				</div>

			</div>

			<div className="container">
				<div className="row">
					<div class="col-md-4">
						<div style={{ paddingTop: "30px" }}>
							<img src={resources.logo1} height={200} style={{ width: "100%", backgroundColor: "#6b9262", padding: "30px" }} alt="images" />
						</div>
					</div>
					<div class="col-md-8">
						<div class="event-list">
							<div class="event-thumb" style={{ padding: "20px" }}>
								<img src={Testimonial.testi4} style={{ borderRadius: "100%" }} height={160} alt="driver photos" />
							</div>
							<div class="event-content">
								<h4 class="event-title"><a href="event-detail.html">Profile Details</a></h4>
								<table>
									<tr>
										<td>Name</td>
										<td>: Darren Farrell</td>
									</tr>
									<tr>
										<td>Email</td>
										<td>: darren@email</td>
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
						<div className="box-content">
							<h4 class="widget-title"><span>Donation</span></h4>
							<table className="delivery-table">
								<thead style={{ backgroundColor: "#333", color: "#faca3a" }}>
									<tr>
										<th className="deliv-rows">No </th>
										<th className="deliv-rows">Donation Amount </th>
										<th className="deliv-rows">Sender's name </th>
										<th className="deliv-rows">Status </th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="deliv-rows">1</td>
										<td className="deliv-rows">50000</td>
										<td className="deliv-rows">Darren</td>
										<td className="deliv-rows"><a className="btn main-btn" type="button" href="/donationStatus">Detail</a></td>
									</tr>
									<tr>
										<td className="deliv-rows">2</td>
										<td className="deliv-rows">20000</td>
										<td className="deliv-rows">Darren</td>
										<td className="deliv-rows"><a className="btn main-btn" type="button" href="/donationStatus">Detail</a></td>
									</tr>
									<tr>
										<td className="deliv-rows">3</td>
										<td className="deliv-rows">30000</td>
										<td className="deliv-rows">Darren</td>
										<td className="deliv-rows"><a className="btn main-btn" type="button" href="/donationStatus">Detail</a></td>
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

export default DonorDashboard;