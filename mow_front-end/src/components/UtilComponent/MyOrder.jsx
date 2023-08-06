import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { food } from "../../assets/images/Images";
import { faCar, faCartShopping, faCheckCircle, faClock, faEye, faFireBurner, faHouseChimney, faPenAlt, faStore } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Badge, Button, Modal, Table } from "react-bootstrap";
import { AuthContext } from "../../context/auth-context";
import { getAllMemberOrder } from "../../api/member";

function MyOrder() {
  const userCtx = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [listOrder, setListOrder] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllMemberOrder(userCtx.token)
      .then((response) => {
        setListOrder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="box-content rounded shadow">
        <h4 className="widget-title text-success">
          <span>
            <FontAwesomeIcon icon={faCartShopping} /> My Order
          </span>
        </h4>

        <div className="container" style={{ height: "300px", overflowY: "auto" }}>
          {listOrder !== null && listOrder.length > 0 ? (
            listOrder.map((value, index) => (
              <>
                <div className="box-content p-2 bg-light border">
                  <div className="order-head d-flex justify-content-between">
                    <p className="m-0 p-2">
                      <FontAwesomeIcon icon={faStore} /> Meals On Wheels
                    </p>
                    <p className="m-0 p-2 text-secondary">
                      {value.status === "PENDING" && (
                        <span>
                          New Order <FontAwesomeIcon icon={faClock} className="px-2" />
                        </span>
                      )}
                      {value.status === "PROCESS" && (
                        <span>
                          Your meal's request is under process
                          <FontAwesomeIcon icon={faFireBurner} className="px-2" />
                        </span>
                      )}
                      {value.status === "ON_THE_WAY" && (
                        <span>
                          Driver starts to deliver the meal
                          <FontAwesomeIcon icon={faCar} className="px-2" />
                        </span>
                      )}
                      {value.status === "DELIVERED" && (
                        <span>
                          Your meal's request has been delivered
                          <FontAwesomeIcon icon={faHouseChimney} className="px-2" />
                        </span>
                      )}
                      {value.status === "COMPLETED" && (
                        <span>
                          Order Complete
                          <FontAwesomeIcon icon={faCheckCircle} className="px-2" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="main-content border-top p-3">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-3">
                        {/* <img src={food.food2} className="card-image rounded" /> */}
                        <img src={`data:image/png;base64,${value.meals.picture.imageData}`} className="rounded" alt="" style={{ width: "100%", height: "100px", objectFit: "cover", border: "2px solid gray" }} />
                      </div>
                      <div className="col-md-9 d-flex justify-content-between align-items-center">
                        <div className="name-detail">
                          <h4 className="p-0 m-0"> {value.meals.mealsName}</h4>
                          <p className="p-0 my-1"> {value.datetime.slice(0, 10)}</p>
                          {value.status === "PENDING" && <Badge bg="danger">{value.status}</Badge>}
                          {value.status === "ASSIGNED" && <Badge bg="secondary">{value.status}</Badge>}
                          {value.status === "PROCESS" && <Badge bg="warning">{value.status}</Badge>}
                          {value.status === "ON_THE_WAY" && <Badge bg="warning">{value.status}</Badge>}
                          {value.status === "DELIVERED" && <Badge bg="primary">{value.status}</Badge>}
                          {value.status === "COMPLETED" && <Badge bg="success">{value.status}</Badge>}
                        </div>

                        <div className="d-flex flex-column">
                          <button href="/detail-order" className="btn btn-outline-secondary rounded m-1" onClick={handleShow}>
                            Detail <FontAwesomeIcon icon={faEye} className="ps-2" />
                          </button>

                          {value.status === "DELIVERED" && (
                            <>
                              <button href="/detail-order" className="btn btn-success rounded m-1" onClick={handleShow}>
                                Give Feedback
                                <FontAwesomeIcon icon={faPenAlt} className="ps-2" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          ) : (
            <>
              <div className="box-content p-5 bg-light border text-center">
                <span>You haven't ordered anything yet, </span>
                <a href="/member">
                  <u>See all meals</u>
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">Request Meals</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container p-2">
            <small className="d-block pb-2">Member Details : </small>
            <Table striped bordered hover className="">
              <tbody>
                <tr>
                  <td>Member Name : </td>
                  <td>Asep Supriyadi</td>
                </tr>
                <tr>
                  <td>Address : </td>
                  <td>Bandung, Indonesia</td>
                </tr>
              </tbody>
            </Table>
            <small className="d-block pb-2">Order Details : </small>
            <Table striped bordered hover className="">
              <tbody>
                <tr>
                  <td>Meals Name : </td>
                  <td>Oseng Pentil</td>
                </tr>
                <tr>
                  <td>Partner : </td>
                  <td>ABC PARTNER</td>
                </tr>
                <tr>
                  <td>Distance : </td>
                  <td>10km</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyOrder;
