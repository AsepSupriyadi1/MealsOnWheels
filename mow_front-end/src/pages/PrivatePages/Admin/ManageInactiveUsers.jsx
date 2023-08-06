import { faCheck, faCircle, faDotCircle, faEye, faPencil, faPiggyBank, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Button, ListGroup, Modal, Tab, Tabs } from "react-bootstrap";
import { activateUser, getAllDrivers, getAllDriversRequest, getAllUsers, getUserDetails } from "../../../api/admin";
import { AuthContext } from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageInactiveUsers = () => {
  const userCtx = useContext(AuthContext);
  const [usersRequest, setUsersRequest] = useState(null);
  const [userDetails, setUserDetail] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    getAllUsers(userCtx.token).then((response) => {
      setUsersRequest(response.data);
    });
  }, []);

  const handleUserDetails = (userId) => {
    getUserDetails(userCtx.token, userId)
      .then((response) => {
        setUserDetail(response.data);
        setShow(true);
      })
      .catch((err) => {
        console.log("errorr occured");
      });
  };

  const handleApproveUser = (id) => {
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
            getAllUsers(userCtx.token).then((response) => {
              setUsersRequest(response.data);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  if (!usersRequest) return null;

  return (
    <>
      <div className="container">
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title d-none d-lg-block">Manage all User Request</h2>
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
              <div className="tb_reponsive">
                <table className="table  table-light">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Full Name</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersRequest.length > 0 ? (
                      usersRequest.map((value, index) => (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{value.fullname}</td>
                            <td>{value.userRole}</td>

                            <td>
                              <button className="btn btn-secondary rounded m-1" onClick={() => handleUserDetails(value.userId)}>
                                Details <FontAwesomeIcon icon={faEye} className="ps-3" />
                              </button>
                              <button className="btn btn-success rounded m-1" onClick={() => handleApproveUser(value.userId)}>
                                Approve User <FontAwesomeIcon icon={faCheck} className="ps-3" />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))
                    ) : (
                      <tr>
                        <td className="text-center p-5" colSpan={4}>
                          There is no user request for now
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {userDetails && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Request Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <p className="fw-bold my-3">User Information : </p>
              <ListGroup.Item>Full Name : {userDetails.fullname}</ListGroup.Item>
              <ListGroup.Item>Email : {userDetails.email}</ListGroup.Item>
              <ListGroup.Item>Address : {userDetails.address}</ListGroup.Item>
              <ListGroup.Item>Role : {userDetails.role}</ListGroup.Item>

              {userDetails.role === "DRIVER" && (
                <>
                  <p className="fw-bold my-3">Drivers Information : </p>
                  <ListGroup.Item>Car Name : {userDetails.roleDetails.carName}</ListGroup.Item>
                </>
              )}

              {userDetails.role === "PARTNER" && (
                <>
                  <p className="fw-bold my-3">Partner Information : </p>
                  <ListGroup.Item> Organization Name : {userDetails.roleDetails.companyName}</ListGroup.Item>
                  <ListGroup.Item> Organization Address : {userDetails.roleDetails.companyAddress}</ListGroup.Item>
                </>
              )}

              {userDetails.role === "MEMBER" && (
                <>
                  <p className="fw-bold my-3">Member Information : </p>
                  <ListGroup.Item> Age : {userDetails.roleDetails.age}</ListGroup.Item>
                  <ListGroup.Item> Reason : {userDetails.roleDetails.reason}</ListGroup.Item>
                </>
              )}

              {userDetails.role === "VOLUNTEER" && (
                <>
                  <p className="fw-bold my-3">Partner Information : </p>
                  <ListGroup.Item> Status : {userDetails.roleDetails.status}</ListGroup.Item>
                  <ListGroup.Item> Reason : {userDetails.roleDetails.reason}</ListGroup.Item>
                </>
              )}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ManageInactiveUsers;
