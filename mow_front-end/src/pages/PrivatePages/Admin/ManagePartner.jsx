import { faCheck, faCircle, faDotCircle, faEye, faPencil, faPiggyBank, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, ListGroup, Tab, Tabs } from "react-bootstrap";

const ManagePartner = () => {
  return (
    <>
      <div className="container">
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Manage all partners</h2>
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
              <Tabs defaultActiveKey="home" className="mb-3">
                <Tab eventKey="home" title="Home">
                  <div className="d-flex justify-content-between align-items-center pb-4">
                    <h4>All Partners</h4>
                    {/* <button className="btn btn-primary">
                  Add New Driver <FontAwesomeIcon icon={faPlus} className="ps-3" />
                </button> */}
                  </div>

                  <div className="tb_reponsive">
                    <table className="table  table-light">
                      <thead className="table-dark">
                        <tr>
                          <th>No</th>
                          <th>Partners Name</th>
                          <th>Company Name</th>
                          <th>Address</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Pentil Megalodon</td>
                          <td>ABC Pentil</td>
                          <td>Pochinki, Peak</td>
                          <td>
                            <a className="btn btn-danger m-1">
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </a>
                            <a className="btn btn-secondary">
                              <FontAwesomeIcon icon={faPencil} />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="partner" title="Partner Request">
                  <div className="d-flex justify-content-between align-items-center pb-4">
                    <h4>Partnership Request</h4>
                    {/* <button className="btn btn-primary">
                  Add New Driver <FontAwesomeIcon icon={faPlus} className="ps-3" />
                </button> */}
                  </div>

                  <div className="tb_reponsive">
                    <table className="table  table-light">
                      <thead className="table-dark">
                        <tr>
                          <th>No</th>
                          <th>Partners Name</th>
                          <th>Company Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Pentil Megalodon</td>
                          <td>ABC Pentil</td>

                          <td>
                            <a className="btn btn-secondary rounded m-1">
                              Details <FontAwesomeIcon icon={faEye} className="ps-3" />
                            </a>
                            <a className="btn btn-success rounded m-1">
                              Approve <FontAwesomeIcon icon={faCheck} className="ps-3" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagePartner;
