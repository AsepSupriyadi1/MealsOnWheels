import { food } from "../../../assets/images/Images";


const DonationDetails = () => {
    return (
        <div className="container">
			<div class="page-header">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<h2 class="page-title">Donation Details</h2>
					</div>
					<div class="col-md-6 col-sm-6 hidden-xs back-home">
						<a href="/donor">&larr; Back to Dashboard</a>
					</div>
				</div>
			</div>

            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
            <div class="col-md">
					<div class="member-list">
						<div class="member-content">
							<div class="pull-left">
                                <h4 class="widget-title"><span>Details</span></h4>
							</div>
							<div class="clearfix"></div>
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
									<tr>
										<td>Donation status</td>
										<td>: Status is pending, please wait for our admin to confirm your donation</td>
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