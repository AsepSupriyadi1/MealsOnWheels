import { faCheck, faCircle, faDotCircle, faEye, faPencil, faPiggyBank, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, ListGroup, Tab, Tabs } from "react-bootstrap";
import { activateUser, getAllDrivers, getAllDriversRequest } from "../../../api/admin";
import { AuthContext } from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageDriver = () => {
  const userCtx = useContext(AuthContext);
  const [driversRequest, setDriversRequest] = useState(null);
  const [drivers, setDrivers] = useState(null);

  useEffect(() => {
    getAllDrivers(userCtx.token).then((response) => {
      setDrivers(response.data);
    });

    getAllDriversRequest(userCtx.token).then((response) => {
      setDriversRequest(response.data);
    });
  }, []);

  const handleApproveDriver = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        activateUser(userCtx.token, id)
          .then((response) => {
            Swal.fire("User Activated Successfully !", "Driver's account has been approved.", "success");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  if (!driversRequest) return null;
  if (!drivers) return null;

  return (
    <>
      <div className="container">
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Manage all drivers</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}

        <div className="row">
          <div className="col-md-9">
            <div className="box-content">
              <Tabs defaultActiveKey="home" className="mb-3">
                <Tab eventKey="home" title="Home">
                  <div className="d-flex justify-content-between align-items-center pb-4">
                    <h4>All Drivers</h4>
                    {/* <button className="btn btn-primary">
                  Add New Driver <FontAwesomeIcon icon={faPlus} className="ps-3" />
                </button> */}
                  </div>

                  <div className="tb_reponsive">
                    <table className="table  table-light">
                      <thead className="table-dark">
                        <tr>
                          <th>No</th>
                          <th>Driver Name</th>
                          <th>Vehicle</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {drivers.map((value, index) => (
                          <>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{value.fullname}</td>
                              <td>{value.car}</td>
                              <td>
                                <h5>
                                  <Badge bg="success">{value.driverStatus}</Badge>
                                </h5>
                              </td>
                              <td>
                                <a className="btn btn-danger m-1">
                                  <FontAwesomeIcon icon={faTrashAlt} />
                                </a>
                                <a className="btn btn-secondary">
                                  <FontAwesomeIcon icon={faPencil} />
                                </a>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="partner" title="Driver Request">
                  <div className="d-flex justify-content-between align-items-center pb-4">
                    <h4>Driver Request</h4>
                    {/* <button className="btn btn-primary">
                  Add New Driver <FontAwesomeIcon icon={faPlus} className="ps-3" />
                </button> */}
                  </div>

                  <div className="tb_reponsive">
                    <table className="table  table-light">
                      <thead className="table-dark">
                        <tr>
                          <th>No</th>
                          <th>Driver Name</th>
                          <th>Vehicle</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {driversRequest.map((value, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{value.fullname}</td>
                            <td>{value.car}</td>

                            <td>
                              <a className="btn btn-secondary rounded m-1">
                                Details <FontAwesomeIcon icon={faEye} className="ps-3" />
                              </a>
                              <button className="btn btn-success rounded m-1" onClick={() => handleApproveDriver(value.userId)}>
                                Approve Driver <FontAwesomeIcon icon={faCheck} className="ps-3" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-md">
            <div className="box-content">
              <h4 class="widget-title">
                <span>Driver Status</span>
              </h4>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <FontAwesomeIcon icon={faCircle} className="admin__dots_warning" />
                  On Delivery
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <FontAwesomeIcon icon={faCircle} className="admin__dots_success" />
                  Available
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageDriver;
