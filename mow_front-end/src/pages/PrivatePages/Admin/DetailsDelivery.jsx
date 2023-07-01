import { ListGroup } from "react-bootstrap";
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

      <div className="container">
        <div className="row">
          <div class="col-md-12 p-0">
            <div class="box-content">
              <ul class="step-wizard-list">
                <li class="step-wizard-item">
                  <span class="progress-count">1</span>
                  <span class="progress-label">Go to the kitchen</span>
                </li>
                <li class="step-wizard-item current-item">
                  <span class="progress-count">2</span>
                  <span class="progress-label">Take meals</span>
                </li>
                <li class="step-wizard-item">
                  <span class="progress-count">3</span>
                  <span class="progress-label">Deliver the meals</span>
                </li>
              </ul>
              <div className="row">
                <div className="col-md-10 p-3 mx-auto">
                  <h3>Take the Meals</h3>
                  <div>
                    <p>Kitchen Details : </p>
                    <table className="table text-dark table-bordered">
                      <tr>
                        <td>Partner's Name</td>
                        <td>:</td>
                        <td style={{ width: "40%" }}>ABC Corporate</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td style={{ width: "40%" }}>Bandung, Indonesia</td>
                      </tr>
                    </table>

                    <button className="btn btn-warning w-100">Arrived at the kitchen ?</button>
                  </div>
                </div>
                <div className="col-md-10 p-3 mx-auto">
                  <h3>Take the Meals</h3>
                  <div>
                    <p>Kitchen Details : </p>
                    <table className="table text-dark table-bordered">
                      <tr>
                        <td>Partner's Name</td>
                        <td>:</td>
                        <td style={{ width: "40%" }}>ABC Corporate</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td style={{ width: "40%" }}>Bandung, Indonesia</td>
                      </tr>
                    </table>

                    <button className="btn btn-warning w-100">Pickup Meals</button>
                  </div>
                </div>
                <div className="col-md-10 p-3 mx-auto">
                  <h3>Deliver the Meals</h3>
                  <div>
                    <p>Member Details : </p>
                    <table className="table text-dark table-bordered">
                      <tr>
                        <td>Member's Name</td>
                        <td>:</td>
                        <td style={{ width: "40%" }}>ABC Corporate</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td style={{ width: "40%" }}>Bandung, Indonesia</td>
                      </tr>
                    </table>

                    <button className="btn btn-warning w-100">Arrived at the member ?</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDelivery;
