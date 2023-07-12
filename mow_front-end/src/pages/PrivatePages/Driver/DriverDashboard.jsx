import { DashHeader, Testimonial, gallery, resources } from "../../../assets/images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faCar, faDollar, faHamburger, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Badge, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const DriverDashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-md-12">
            <div class="box-content rounded shadow">
              <div className="row head_container">
                <div class="col-md-4 col-sm-12">
                  <div className="head_desc text-md-start text-center">
                    <h3 className="m-0 text-success">Driver's Dashboard</h3>
                    <p>Meals on Wheels Driver</p>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div class="row">
                    <div class="col-md">
                      <div class="head_status_card rounded-sm m-2">
                        <div>
                          <h2>85</h2>
                          <h5>Uncompleted Task</h5>
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
          <div className="col-md-4">
            <div className="box-content rounded shadow">
              <img src={DashHeader.headDriver} alt="" className="role_vector" />

              <div className="role_desc">
                <table>
                  <tr>
                    <td>Name :</td>
                    <td className="text-end">Abdul Rahman</td>
                  </tr>
                  <tr>
                    <td>Role :</td>
                    <td className="text-end">Volunteer (Driver)</td>
                  </tr>
                  <tr>
                    <td>Vehicle :</td>
                    <td className="text-end">Honda Jazz</td>
                  </tr>
                  <tr>
                    <td>Status :</td>
                    <td className="text-end">
                      <Badge bg="success">Available</Badge>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="box-content rounded shadow">
              <h4 class="widget-title">
                <span>All Delivery Tasks</span>
              </h4>
              <div className="tb_reponsive">
                <table className="table table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Meals Name</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Meals Package B</td>
                      <td>Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                      <td style={{ width: "min-content" }}>
                        <select name="" id="" className="form-control">
                          <option value=""> Status ▼</option>
                          <option value="">pickup</option>
                          <option value="">on the way</option>
                          <option value="">complete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Meals Package B</td>
                      <td>Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                      <td style={{ width: "min-content" }}>
                        <select name="" id="" className="form-control">
                          <option value=""> Status ▼</option>
                          <option value="">pickup</option>
                          <option value="">on the way</option>
                          <option value="">complete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Meals Package B</td>
                      <td>Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                      <td style={{ width: "min-content" }}>
                        <select name="" id="" className="form-control">
                          <option value=""> Status ▼</option>
                          <option value="">pickup</option>
                          <option value="">on the way</option>
                          <option value="">complete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Meals Package B</td>
                      <td>Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                      <td style={{ width: "min-content" }}>
                        <select name="" id="" className="form-control">
                          <option value=""> Status ▼</option>
                          <option value="">pickup</option>
                          <option value="">on the way</option>
                          <option value="">complete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Meals Package B</td>
                      <td>Kp. Legok Midar 001/021, Ciparay, Bandung</td>
                      <td style={{ width: "min-content" }}>
                        <select name="" id="" className="form-control">
                          <option value=""> Status ▼</option>
                          <option value="">pickup</option>
                          <option value="">on the way</option>
                          <option value="">complete</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverDashboard;
