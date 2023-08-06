import { food, Member } from "../../../assets/images/Images";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faStore } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useEffect } from "react";
import { findMealsById, requestMeals } from "../../../api/member";
import { AuthContext } from "../../../context/auth-context";
import { calculateDistance, calculateTime } from "../../../api/map";
import Swal from "sweetalert2";

const DetailpakageMember = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const userCtx = useContext(AuthContext);

  const [meal, setmeal] = useState(null);
  // const [totalTime, setTotalTime] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    findMealsById(userCtx.token, id)
      .then((response) => {
        // console.log(response.data);
        setmeal(response.data);
        // let countDistance = calculateDistance(userCtx.currentUser.lan, userCtx.currentUser.lng, response.data.partner.userDetails.userAppAddress.latitude, response.data.partner.userDetails.userAppAddress.longitude);
        // setDistance(countDistance);
        // setTotalTime(calculateTime(countDistance));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRequestMeals = (mealId) => {
    handleClose();

    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure want to request this meals",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        requestMeals(userCtx.token, mealId)
          .then((response) => {
            Swal.fire("Success !", "Meals Request has been sent.", "success");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  if (!meal) return null;

  return (
    <>
      <div className="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6 d-none d-lg-block">
              <h2 class="page-title">DETAIL PACKAGE</h2>
            </div>
            <div class="col-md-6 back-home">
              <Link to="/member">
                <a className="btn primary-btn" style={{ marginRight: "10px" }}>
                  View daily meals
                </a>
              </Link>
              <Link to="/feedback">
                <a className="btn primary-btn">Feedback</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box-content shadow rounded p-0" style={{ border: "1px dashed gray" }}>
          <div className="row d-flex flex-column-reverse flex-lg-row">
            <div className="col-md p-5 text-dark">
              <p className="text-success rounded">
                <FontAwesomeIcon icon={faStore} /> Meals On Wheels
              </p>
              <h3 className="text-dark fw-bold mb-3">{meal.mealsName}</h3>

              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-success fs-6">
                    <small>
                      <FontAwesomeIcon icon={faCheckCircle} className="pe-2" style={{ fontSize: "14px" }} />
                      Available
                    </small>
                  </div>
                </div>
              </div>

              <h5 className="pt-2 fs-6 fw-bold">Descriptions :</h5>
              <p>This food is suitable for all ages and this food suitable for everyone</p>
              <div className="btn-order">
                <button href="#" className="btn btn-secondary rounded w-100" onClick={handleShow}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-5  p-5">
              <img src={`data:image/png;base64,${meal.picture.imageData}`} className="rounded img-fluid" style={{ width: "100%", height: "250px", objectFit: "cover" }} alt="" />
            </div>
          </div>
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
                  <td width={"30%"}>Member Name : </td>
                  <td>{userCtx.currentUser.fullname}</td>
                </tr>
                <tr>
                  <td width={"30%"}>Address : </td>
                  <td>{userCtx.currentUser.address}</td>
                </tr>
              </tbody>
            </Table>
            <small className="d-block pb-2">Order Details : </small>
            <Table striped bordered hover className="">
              <tbody>
                <tr>
                  <td width={"30%"}>Meals Name : </td>
                  <td>{meal.mealsName}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleRequestMeals(meal.mealsId)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailpakageMember;
