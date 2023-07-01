import { faHamburger, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DashHeader } from "../../../assets/images/Images";
import { Badge, ListGroup } from "react-bootstrap";

const PartnerDashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-md-12">
            <div class="box-content rounded shadow">
              <div className="row head_container">
                <div class="col-md-4 col-sm-12">
                  <div className="head_desc text-md-start text-center">
                    <h4 className="m-0">Partner's Dashboard</h4>
                    <p>Meals on Wheels Kitchen</p>
                    <button className="btn btn-warning">Read Your Role !</button>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="head_status_card rounded-sm m-2">
                        <div>
                          <h2>85</h2>
                          <h5>Uncompleted Task</h5>
                        </div>
                        <FontAwesomeIcon className="head_status_icon" icon={faUsers} />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="head_status_card rounded-sm m-2">
                        <div>
                          <h2>85</h2>
                          <h5>Meals</h5>
                        </div>
                        <FontAwesomeIcon className="head_status_icon" icon={faUsers} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="box-content rounded shadow">
              <h4 class="widget-title">
                <span>all meal requests</span>
              </h4>
              <div className="tb_reponsive">
                <table className="table table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Member Name</th>
                      <th>Meal's Menu</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kencal Total</td>
                      <td>Meals Package B</td>

                      <td style={{ width: "min-content" }}>
                        <select name="" id="" className="form-control">
                          <option value=""> Status ▼</option>
                          <option value="">pickup</option>
                          <option value="">on the way</option>
                          <option value="">complete</option>
                        </select>
                      </td>

                      <td>
                        <button className="btn btn-info">Detail</button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Kencal Total</td>
                      <td>Meals Package B</td>

                      <td style={{ width: "min-content" }}>
                        <select name="" id="" className="form-control">
                          <option value=""> Status ▼</option>
                          <option value="">pickup</option>
                          <option value="">on the way</option>
                          <option value="">complete</option>
                        </select>
                      </td>

                      <td>
                        <button className="btn btn-info">Detail</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="box-content rounded shadow">
              <h4 class="widget-title">
                <span>all meals</span>
              </h4>

              <div className="meals_menu_container">
                <ListGroup>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0">Nasi Padang</p>
                      <button className="btn btn-light border">Details Menu</button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0">Nasi Padang</p>
                      <button className="btn btn-light border">Details Menu</button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0">Nasi Padang</p>
                      <button className="btn btn-light border">Details Menu</button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0">Nasi Padang</p>
                      <button className="btn btn-light border">Details Menu</button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0">Nasi Padang</p>
                      <button className="btn btn-light border">Details Menu</button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0">Nasi Padang</p>
                      <button className="btn btn-light border">Details Menu</button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerDashboard;
