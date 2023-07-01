import { faCheck, faCircle, faDotCircle, faEye, faPencil, faPiggyBank, faPlus, faProcedures, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";

const ManageOrders = () => {
  return (
    <>
      <div className="container">
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Manage all Meals Request</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}

        <div className="row">
          <div className="col-md">
            <div className="box-content">
              <div className="d-flex justify-content-between align-items-center pb-4">
                <h4>All Meals Request</h4>
              </div>

              <div className="tb_reponsive">
                <table className="table  table-light">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Meals Name</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Tumis Tumila</td>
                      <td>ABC Pentil</td>
                      <td>
                        <h5>
                          <Badge bg="secondary">new</Badge>
                        </h5>
                      </td>
                      <td>
                        <a className="btn btn-primary m-1 rounded">
                          Details
                          <FontAwesomeIcon icon={faEye} className="ps-3" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Tumis Tumila</td>
                      <td>ABC Pentil</td>
                      <td>
                        <h5>
                          <Badge bg="warning">process</Badge>
                        </h5>
                      </td>
                      <td>
                        <a className="btn btn-primary m-1 rounded">
                          Details
                          <FontAwesomeIcon icon={faEye} className="ps-3" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Tumis Tumila</td>
                      <td>ABC Pentil</td>
                      <td>
                        <h5>
                          <Badge bg="warning">pickup</Badge>
                        </h5>
                      </td>
                      <td>
                        <a className="btn btn-primary m-1 rounded">
                          Details
                          <FontAwesomeIcon icon={faEye} className="ps-3" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Tumis Tumila</td>
                      <td>ABC Pentil</td>
                      <td>
                        <h5>
                          <Badge bg="warning">on the way</Badge>
                        </h5>
                      </td>
                      <td>
                        <a className="btn btn-primary m-1 rounded">
                          Details
                          <FontAwesomeIcon icon={faEye} className="ps-3" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Tumis Tumila</td>
                      <td>ABC Pentil</td>
                      <td>
                        <h5>
                          <Badge bg="success">complete</Badge>
                        </h5>
                      </td>
                      <td>
                        <a className="btn btn-primary m-1 rounded">
                          Details
                          <FontAwesomeIcon icon={faEye} className="ps-3" />
                        </a>
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

export default ManageOrders;
