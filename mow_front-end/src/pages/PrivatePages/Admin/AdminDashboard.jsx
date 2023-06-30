import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gallery } from "../../../assets/images/Images";
import { faCar, faDollar, faHamburger, faUsers } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  return (
    <>
      <div className="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Dashboard</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6 ">
            <div class="box-content d-flex-between box-border-1 rounded-sm">
              <div>
                <h1>85</h1>
                <h3>Meals</h3>
              </div>
              <FontAwesomeIcon icon={faHamburger} style={{ fontSize: "5em", color: "#BBBBBB" }} />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="box-content d-flex-between box-border-1 rounded-sm">
              <div>
                <h1>85</h1>
                <h3>Partner</h3>
              </div>
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: "5em", color: "#BBBBBB" }} />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="box-content d-flex-between box-border-1 rounded-sm">
              <div>
                <h1>85</h1>
                <h3>Driver</h3>
              </div>
              <FontAwesomeIcon icon={faCar} style={{ fontSize: "5em", color: "#BBBBBB" }} />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="box-content box-fade d-flex-between box-border-1 rounded-sm">
              <div>
                <h1>85</h1>
                <h3>Donors</h3>
              </div>
              <FontAwesomeIcon icon={faDollar} style={{ fontSize: "5em", color: "#BBBBBB" }} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="box-content">
              <h4 class="widget-title">
                <span>Orders</span>
              </h4>
              <table className="delivery-table">
                <thead style={{ backgroundColor: "#333", color: "#faca3a" }}>
                  <tr>
                    <th className="deliv-rows">No</th>
                    <th className="deliv-rows">Meals Orders</th>
                    <th className="deliv-rows">Address</th>
                    <th className="deliv-rows">Status</th>
                    <th className="deliv-rows">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="deliv-rows">1</td>
                    <td className="deliv-rows">Meals Package B</td>
                    <td className="deliv-rows">Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                    <td className="deliv-rows">PENDING</td>
                    <td className="deliv-rows">
                      <a href="#" class="btn light-btn">
                        Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="deliv-rows">2</td>
                    <td className="deliv-rows">Meals Package A</td>
                    <td className="deliv-rows">Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                    <td className="deliv-rows">PROCESS</td>
                    <td className="deliv-rows">
                      <a href="#" class="btn light-btn">
                        Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="deliv-rows">3</td>
                    <td className="deliv-rows">Meals Package C</td>
                    <td className="deliv-rows">Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                    <td className="deliv-rows">ON DELIVER</td>
                    <td className="deliv-rows">
                      <a href="#" class="btn light-btn">
                        DETAILS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="deliv-rows">3</td>
                    <td className="deliv-rows">Meals Package C</td>
                    <td className="deliv-rows">Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                    <td className="deliv-rows">COMPLETE</td>
                    <td className="deliv-rows">
                      <a href="#" class="btn light-btn">
                        Details
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* END CONTAINER */}
    </>
  );
};

export default AdminDashboard;
