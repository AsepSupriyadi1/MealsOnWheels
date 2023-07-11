import { food } from "../../../assets/images/Images";


const DonationDetails = () => {
	return (
		<div className="container">
			<div class="page-header">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<h2 class="page-title d-none d-lg-block">Donation Details</h2>
					</div>
					<div class="col-md-6 col-sm-6 hidden-xs back-home">
						<a href="/donate">&larr; Back to Dashboard</a>
					</div>
				</div>
			</div>

			<div className="box-content bg-white text-center shadow rounded-5 p-3">
				<h5 className="marquee text-success fw-bold">Thank for Your Supporting Everyone, we love you and love your kind :)</h5>
			</div>

			<div className="container">
				<div className="row">
					<div className="box-content shadow rounded">
						
						<h4 class="widget-title text-success"><span>Donorer History</span></h4>
						<div className="donorer bg-light p-3 mb-3">
						<table>
								<tr>
									<td>Sender's name</td>
									<td>: Darren</td>
								</tr>
								<tr>
									<td>Sender's email</td>
									<td>: darren@email.com</td>
								</tr>
								<tr>
									<td>Donation ammount </td>
									<td>: 50000</td>
								</tr>
							</table>
						</div>
						<div className="donorer bg-light p-3 mb-3">
						<table>
								<tr>
									<td>Sender's name</td>
									<td>: Hamba Allah</td>
								</tr>
								<tr>
									<td>Sender's email</td>
									<td>: dirahasiakan@email.com</td>
								</tr>
								<tr>
									<td>Donation ammount </td>
									<td>: 60000</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}

export default DonationDetails;