import { DashHeader, Testimonial, gallery, resources } from "../../../assets/images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faCar, faDollar, faHamburger, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Badge, Button, ListGroup, Modal, Table } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth-context";
import { countDriverTaskAPI, getAllDriverTask, getDeliveryDetailsByID, getDriverProfileAPI, updateDeliveryTask } from "../../../api/driver";
import Swal from "sweetalert2";

const DriverDashboard = () => {
  const userCtx = useContext(AuthContext);
  const [totalDriverTask, setTotalDriverTask] = useState(0);
  const [listDriverTask, setListDriverTask] = useState(0);
  const [detailsDelivery, setDetailsDelivery] = useState(null);
  const [driver, setDriver] = useState(null);

  // MODALS
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setDetailsDelivery(null);
    setShow(false);
  };
  const handleDetailsDelivery = (orderId) => {
    getDeliveryDetailsByID(userCtx.token, orderId).then((response) => {
      setDetailsDelivery(response.data);
    });
    setShow(true);
  };

  const handleUpdateDelivery = (orderId, status) => {
    Swal.fire("User Activated Successfully !", "Driver's account has been approved.", "success");

    updateDeliveryTask(userCtx.token, orderId, status)
      .then((response) => {
        setDetailsDelivery(response.data);
        getAllDriverTask(userCtx.token).then((response) => {
          setListDriverTask(response.data);
        });
        getDriverProfileAPI(userCtx.token).then((response) => {
          setDriver(response.data);
        });
        setShow(false);
      })
      .catch((err) => {
        let errMsg = err.response.data.message;
        console.log(errMsg);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "" + errMsg,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  useEffect(() => {
    countDriverTaskAPI(userCtx.token).then((response) => {
      setTotalDriverTask(response.data);
    });
    getDriverProfileAPI(userCtx.token).then((response) => {
      setDriver(response.data);
    });
    getAllDriverTask(userCtx.token).then((response) => {
      setListDriverTask(response.data);
    });
  }, []);

  if (!totalDriverTask) return null;
  if (!driver) return null;
  if (!listDriverTask) return null;

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
                          <h2>{totalDriverTask}</h2>
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
          <div className="col-md-3">
            <div className="box-content rounded shadow">
              <img src={DashHeader.headDriver} alt="" className="role_vector" />

              <div className="role_desc py-2">
                <table>
                  <tr>
                    <td>Name :</td>
                    <td className="text-end">{driver.userDetails.fullname}</td>
                  </tr>
                  <tr>
                    <td>Role :</td>
                    <td className="text-end">Driver</td>
                  </tr>
                  <tr>
                    <td>Vehicle :</td>
                    <td className="text-end">{driver.carName}</td>
                  </tr>
                  <tr>
                    <td>Status :</td>
                    <td className="text-end">
                      {driver.driverStatus == "AVAILABLE" && (
                        <>
                          <Badge bg="success">Available</Badge>
                        </>
                      )}
                      {driver.driverStatus == "UNAVAILABLE" && (
                        <>
                          <Badge bg="danger">Unavailable</Badge>
                        </>
                      )}
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
                      <th>Partner Company</th>
                      <th>Member Name</th>
                      <th>Meals Name</th>
                      <th>Delivery Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listDriverTask.map((value, index) => (
                      <>
                        <tr>
                          <td className="align-middle">{index + 1}</td>
                          <td className="align-middle">{value.partner.companyName}</td>
                          <td className="align-middle">{value.member.userDetails.fullname}</td>
                          <td className="align-middle">{value.meals.mealsName}</td>
                          <td className="align-middle">{value.deliveryStatus}</td>
                          <td className="align-middle">
                            <button className="btn btn-info m-1" onClick={() => handleDetailsDelivery(value.orderId)}>
                              proceed
                            </button>
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

      {detailsDelivery !== null && (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delivery Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {(detailsDelivery.deliveryStatus === "PENDING" || detailsDelivery.deliveryStatus === "DELIVERED") && (
                <>
                  <ListGroup className="mb-4">
                    <p className="d-flex justify-content-between align-items-center">
                      Take Meals from partner :
                      {detailsDelivery.deliveryStatus !== "DELIVERED" && (
                        <button className="btn btn-primary " onClick={() => handleUpdateDelivery(detailsDelivery.orderId, "TAKE_MEALS")}>
                          Take Meals From Partner
                        </button>
                      )}
                    </p>
                    <ListGroup.Item>Partner Name : {detailsDelivery.partner.userDetails.fullname}</ListGroup.Item>
                    <ListGroup.Item>Company Name : {detailsDelivery.partner.companyName}</ListGroup.Item>
                    <ListGroup.Item>Meals Name : {detailsDelivery.meals.mealsName}</ListGroup.Item>
                    <ListGroup.Item>Company Address : {detailsDelivery.partner.companyAddress}</ListGroup.Item>
                  </ListGroup>
                </>
              )}

              {(detailsDelivery.deliveryStatus === "TAKE_MEALS" || detailsDelivery.deliveryStatus === "DELIVERED") && (
                <>
                  <ListGroup className="mb-4">
                    <p className="d-flex justify-content-between align-items-center">
                      Deliver The meals :
                      {detailsDelivery.deliveryStatus !== "DELIVERED" && (
                        <button className="btn btn-primary " onClick={() => handleUpdateDelivery(detailsDelivery.orderId, "ON_THE_WAY")}>
                          Deliver The Meals
                        </button>
                      )}
                    </p>
                    <ListGroup.Item>Member Name : {detailsDelivery.member.userDetails.fullname}</ListGroup.Item>
                    <ListGroup.Item>Member Address : {detailsDelivery.member.userDetails.address}</ListGroup.Item>
                    <ListGroup.Item>Meals Name : {detailsDelivery.meals.mealsName}</ListGroup.Item>
                  </ListGroup>
                </>
              )}

              {(detailsDelivery.deliveryStatus === "ON_THE_WAY" || detailsDelivery.deliveryStatus === "DELIVERED") && (
                <>
                  <ListGroup className="mb-4">
                    <p className="d-flex justify-content-between align-items-center">
                      Completed :
                      {detailsDelivery.deliveryStatus !== "DELIVERED" && (
                        <button className="btn btn-primary " onClick={() => handleUpdateDelivery(detailsDelivery.orderId, "DELIVERED")}>
                          Arrived at Member ?
                        </button>
                      )}
                    </p>
                    <ListGroup.Item>Completed at : {detailsDelivery.updated_at}</ListGroup.Item>
                  </ListGroup>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default DriverDashboard;
