import { faBurger, faCar, faHamburger, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DashHeader } from "../../../assets/images/Images";
import { Badge, Button, ListGroup, Modal, Tab, Tabs } from "react-bootstrap";
import { AuthContext } from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import { countMealsAPI, getAllMealsAPI, getAllPartnerTaskAPI } from "../../../api/partner";
import Swal from "sweetalert2";
import {
  countDeliveryTaskAPI,
  countMealTaskAPI,
  countMealsVolunteerTaskAPI,
  getAllDelieryVolunteerTask,
  getAllVolunteerTaskAPI,
  getDeliveryDetailsByID,
  getVolunteerProfileAPI,
  updateDeliveryTask,
  updateMealsStatusAPI,
} from "../../../api/volunteer";

const VolunteerDashboard = () => {
  // USER CONTEXT
  const userCtx = useContext(AuthContext);
  const [volunteer, setVolunteer] = useState(null);

  // TOTAL TASK
  const [totalMealTask, setTotalMealTask] = useState(0);
  const [totalDeliveryTask, setTotalDeliveryTask] = useState(0);

  // TASK FOREACH
  const [listMealsTask, setListMealsTask] = useState(null);
  const [deliveryTask, setDeliveryTask] = useState(null);

  //DELIVERY
  const [detailsDelivery, setDetailsDelivery] = useState(null);
  const [driverVolunteer, setDriverVolunteer] = useState(null);

  useEffect(() => {
    countDeliveryTaskAPI(userCtx.token).then((response) => {
      setTotalDeliveryTask(response.data);
    });

    countMealTaskAPI(userCtx.token).then((response) => {
      setTotalMealTask(response.data);
    });

    // -=-= TASK -=-=
    getAllVolunteerTaskAPI(userCtx.token).then((response) => {
      setListMealsTask(response.data);
    });
    getAllDelieryVolunteerTask(userCtx.token).then((response) => {
      setDeliveryTask(response.data);
    });

    getVolunteerProfileAPI(userCtx.token).then((response) => {
      console.log(response.data);
      setVolunteer(response.data);
    });
  }, []);

  // PARTNER PROCESS

  const handleUpdateStatus = (id, status) => {
    const updateData = {
      orderId: id,
      mealStatus: status,
    };

    updateMealsStatusAPI(userCtx.token, updateData).then((response) => {
      console.log(response);
      Swal.fire("Success !", "Meals Request Status Updated.", "success");
      getAllVolunteerTaskAPI(userCtx.token).then((response) => {
        setListMealsTask(response.data);
      });
    });
  };

  // DRIVER PROCESS

  const [driverModal, showDriverModal] = useState(false);
  const handleDeliveryClose = () => {
    setDetailsDelivery(null);
    showDriverModal(false);
  };
  const handleDetailsDelivery = (orderId) => {
    getDeliveryDetailsByID(userCtx.token, orderId).then((response) => {
      setDetailsDelivery(response.data);
      console.log(response.data);
    });
    showDriverModal(true);
  };

  const handleUpdateDelivery = (orderId, status) => {
    Swal.fire("User Activated Successfully !", "Driver's account has been approved.", "success");

    const updateData = {
      orderId: orderId,
      requestStatus: status,
    };

    updateDeliveryTask(userCtx.token, updateData)
      .then((response) => {
        setDetailsDelivery(response.data);
        getAllDelieryVolunteerTask(userCtx.token).then((response) => {
          setDeliveryTask(response.data);
        });
        getVolunteerProfileAPI(userCtx.token).then((response) => {
          setVolunteer(response.data);
        });
        showDriverModal(false);
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

  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-md-12">
            <div class="box-content rounded shadow">
              <div className="row head_container">
                <div class="col-md-4 col-sm-12">
                  <div className="head_desc text-md-start text-center">
                    <h4 className="m-0">Volunteer's Dashboard</h4>
                    <p>Meals on Wheels Volunteer</p>
                    <button className="btn btn-warning">Read Your Role !</button>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="head_status_card rounded-sm m-2">
                        <div>
                          <h2>{totalDeliveryTask === null ? "0" : totalDeliveryTask}</h2>
                          <h6>Uncompleted Delivery Tasks</h6>
                        </div>
                        <FontAwesomeIcon className="head_status_icon" icon={faCar} />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="head_status_card rounded-sm m-2">
                        <div>
                          <h2>{totalMealTask === null ? "0" : totalMealTask}</h2>
                          <h6>Uncompleted Meals Tasks</h6>
                        </div>
                        <FontAwesomeIcon className="head_status_icon" icon={faBurger} />
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

              {volunteer != null && (
                <div className="role_desc py-2">
                  <table>
                    <tr>
                      <td>Name :</td>
                      <td className="text-end">{volunteer.userDetails.fullname}</td>
                    </tr>
                    <tr>
                      <td>Role :</td>
                      <td className="text-end">Volunteer</td>
                    </tr>
                    <tr>
                      <td>Status :</td>
                      <td className="text-end">
                        {volunteer.volunteerStatus == "AVAILABLE" && (
                          <>
                            <Badge bg="success">Available</Badge>
                          </>
                        )}
                        {volunteer.volunteerStatus == "UNAVAILABLE" && (
                          <>
                            <Badge bg="danger">Unavailable</Badge>
                          </>
                        )}
                      </td>
                    </tr>
                  </table>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-8">
            <div className="box-content rounded shadow">
              <h4 class="widget-title">
                <span>all meal requests</span>
              </h4>
              <Tabs className="mb-3">
                <Tab eventKey="home" title="Delivery ">
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
                        {deliveryTask !== null && deliveryTask.length > 0 ? (
                          deliveryTask.map((value, index) => (
                            <>
                              <tr>
                                <td className="align-middle">{index + 1}</td>
                                <td className="align-middle">{value.partner.fullname}</td>
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
                          ))
                        ) : (
                          <tr>
                            <td className="align-middle text-center" colSpan={6}>
                              There is no delivery task for now
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Meal's Request">
                  <div className="tb_reponsive">
                    <table className="table table-striped">
                      <thead className="table-dark">
                        <tr>
                          <th>No</th>
                          <th>Member Name</th>
                          <th>Menu</th>
                          <th>Meals Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listMealsTask !== null && listMealsTask.length > 0 ? (
                          listMealsTask.map((value, index) => (
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{value.member.userDetails.fullname}</td>
                                <td>{value.meals.mealsName}</td>
                                <td>{value.mealsStatus}</td>

                                <td style={{ width: "min-content" }}>
                                  {value.mealsStatus === "PENDING" && (
                                    <button className="btn btn-warning" onClick={() => handleUpdateStatus(value.orderId, "PROCESS")}>
                                      Prepare Meals
                                    </button>
                                  )}
                                  {value.mealsStatus === "PROCESS" && (
                                    <button className="btn btn-primary" onClick={() => handleUpdateStatus(value.orderId, "READY_TO_DELIVER")}>
                                      Completed ?
                                    </button>
                                  )}
                                  {value.mealsStatus === "READY_TO_DELIVER" && <Badge bg="success">Completed</Badge>}
                                </td>
                              </tr>
                            </>
                          ))
                        ) : (
                          <>
                            <tr>
                              <td className="align-middle text-center" colSpan={6}>
                                There is no task for now
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {detailsDelivery !== null && (
        <>
          <Modal show={driverModal} onHide={handleDeliveryClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delivery Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {(detailsDelivery.deliveryStatus === "PENDING" || detailsDelivery.deliveryStatus === "DELIVERED") && (
                <>
                  <ListGroup className="mb-4">
                    <p className="d-flex justify-content-between align-items-center">
                      Driver ~ Partner :
                      {detailsDelivery.deliveryStatus !== "DELIVERED" && (
                        <button className="btn btn-primary " onClick={() => handleUpdateDelivery(detailsDelivery.orderId, "TAKE_MEALS")}>
                          Go to Partner
                        </button>
                      )}
                    </p>
                    <ListGroup.Item>Meals Name : {detailsDelivery.meals.mealsName}</ListGroup.Item>
                    <ListGroup.Item>Partner Name : {detailsDelivery.partner.fullname}</ListGroup.Item>
                    <ListGroup.Item>Partner Address : {detailsDelivery.partner.userAppAddress.label}</ListGroup.Item>
                  </ListGroup>
                </>
              )}

              {(detailsDelivery.deliveryStatus === "TAKE_MEALS" || detailsDelivery.deliveryStatus === "DELIVERED") && (
                <>
                  <ListGroup className="mb-4">
                    <p className="d-flex justify-content-between align-items-center">
                      Driver ~ Meals :
                      {detailsDelivery.deliveryStatus !== "DELIVERED" && (
                        <button className="btn btn-primary " onClick={() => handleUpdateDelivery(detailsDelivery.orderId, "ON_THE_WAY")}>
                          Take & Deliver The Meals
                        </button>
                      )}
                    </p>
                    <ListGroup.Item>Meals Name : {detailsDelivery.meals.mealsName}</ListGroup.Item>
                    <ListGroup.Item>Member Name : {detailsDelivery.member.userDetails.fullname}</ListGroup.Item>
                    <ListGroup.Item>Member Address : {detailsDelivery.member.userDetails.userAppAddress.label}</ListGroup.Item>
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

                    {detailsDelivery.deliveryStatus === "ON_THE_WAY" && (
                      <>
                        <ListGroup.Item>Meals Name : {detailsDelivery.meals.mealsName}</ListGroup.Item>
                        <ListGroup.Item>Member Name : {detailsDelivery.member.userDetails.fullname}</ListGroup.Item>
                        <ListGroup.Item>Member Address : {detailsDelivery.member.userDetails.userAppAddress.label}</ListGroup.Item>
                      </>
                    )}

                    <ListGroup.Item>Arrived at : {detailsDelivery.updated_at}</ListGroup.Item>
                  </ListGroup>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDeliveryClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default VolunteerDashboard;
