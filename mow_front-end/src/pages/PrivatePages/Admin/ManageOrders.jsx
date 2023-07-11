import { faCheck, faCircle, faDotCircle, faEye, faPencil, faPiggyBank, faPlus, faProcedures, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Badge, Button, Form, Modal, Row } from "react-bootstrap";
import { AuthContext } from "../../../context/auth-context";
import { assignPartnerAndDriver, getAllActivePartners, getAllAvalailableDriver, getAllOrders } from "../../../api/admin";
import Swal from "sweetalert2";

const ManageOrders = () => {
  const userCtx = useContext(AuthContext);
  const [listOrders, setListOrders] = useState(null);
  const [listDriver, setListDriver] = useState(null);
  const [listPartner, setListPartner] = useState(null);
  const [show, setShow] = useState(false);

  const [orderId, setOrderId] = useState(null);
  const [driverId, setDriverId] = useState(null);
  const [partnerId, setPartnerID] = useState(null);

  const handleClose = () => setShow(false);
  const handleModal = (id) => {
    getAllAvalailableDriver(userCtx.token).then((response) => {
      setListDriver(response.data);
    });

    getAllActivePartners(userCtx.token).then((response) => {
      setListPartner(response.data);
    });
    setOrderId(id);
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      partnerId: parseInt(partnerId),
      driverId: parseInt(driverId),
      orderId: orderId,
    };

    assignPartnerAndDriver(userCtx.token, data).then(() => {
      Swal.fire("Assigned Successfully !", "Please Wait For their approval", "success");
      getAllOrders(userCtx.token).then((response) => {
        setListOrders(response.data);
      });
      setShow(false);
    });

    console.log(data);
  };

  useEffect(() => {
    getAllOrders(userCtx.token).then((response) => {
      setListOrders(response.data);
    });
  }, []);

  if (!listOrders) return null;

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
                      <th>Meals</th>
                      <th>Member</th>
                      <th>Partner</th>
                      <th>Driver</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOrders.map((value, index) => (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{value.meals.mealsName}</td>
                          <td>{value.member.memberId}</td>
                          <td>{value.partner !== null ? value.partner.partnerId : "NOT_ASSIGNED"}</td>
                          <td>{value.driver !== null ? value.driver.driverId : "NOT_ASSIGNED"}</td>

                          <td>
                            <h5>
                              <Badge bg="secondary">{value.status}</Badge>
                            </h5>
                          </td>
                          <td>
                            {value.status === "PENDING" && (
                              <>
                                <button className="btn btn-primary m-1 rounded" onClick={() => handleModal(value.orderId)}>
                                  Assign Driver & Partner
                                  <FontAwesomeIcon icon={faEye} className="ps-3" />
                                </button>
                              </>
                            )}

                            {value.status === "ASSIGNED" && (
                              <>
                                <button disabled className="btn btn-secondary m-1 rounded">
                                  Assigned
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Driver & Partner</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Control type="hidden" value={orderId} />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Assign Driver</Form.Label>
              <Form.Select aria-label="Default select example" onChange={(e) => setDriverId(e.target.value)}>
                <option seleted value={null}>
                  Choose Driver
                </option>
                {listDriver &&
                  listDriver.map((value, index) => (
                    <>
                      <option value={value.driverId}>{value.driverName}</option>
                    </>
                  ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Assign Partner</Form.Label>
              <Form.Select aria-label="Default select example" onChange={(e) => setPartnerID(e.target.value)}>
                <option seleted value={null}>
                  Choose Partner
                </option>
                {listPartner &&
                  listPartner.map((value, index) => (
                    <>
                      <option value={value.roleDetails.partnerId}>{value.fullname}</option>
                    </>
                  ))}
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ManageOrders;
