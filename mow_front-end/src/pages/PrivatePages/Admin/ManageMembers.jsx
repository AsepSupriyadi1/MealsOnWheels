import { faCheck, faCircle, faDotCircle, faEye, faPencil, faPiggyBank, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Badge, ListGroup, Tab, Tabs } from "react-bootstrap";
import { activateUser, getAllPartners, getAllPartnersRequest } from "../../../api/admin";
import { AuthContext } from "../../../context/auth-context";
import Swal from "sweetalert2";
import { confirmALert } from "../../../alert/sweetAlert";

const ManageVolunteer = () => {
  const userCtx = useContext(AuthContext);
  //   const [partnerRequest, setPartnerRequest] = useState(null);
  //   const [partners, setPartners] = useState(null);

  //   useEffect(() => {
  //     getAllPartnersRequest(userCtx.token).then((response) => {
  //       setPartnerRequest(response.data);
  //     });

  //     getAllPartners(userCtx.token).then((response) => {
  //       setPartners(response.data);
  //     });
  //   }, []);

  //   const handleApprovePartner = (id) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         activateUser(userCtx.token, id)
  //           .then((response) => {
  //             Swal.fire("User Activated Successfully !", "Partner's account has been approved.", "success");
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       }
  //     });
  //   };

  //   if (!partnerRequest) return null;
  //   if (!partners) return null;

  return (
    <>
      <div className="container">
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Manage all Volunteers</h2>
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
                    <h4>All Members</h4>
                    {/* <button className="btn btn-primary">
                  Add New Driver <FontAwesomeIcon icon={faPlus} className="ps-3" />
                </button> */}
                  </div>

                  <div className="tb_reponsive">
                    <table className="table  table-light">
                      <thead className="table-dark">
                        <tr>
                          <th>No</th>
                          <th>Member Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {partners.map((value, index) => {
                          <>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{value.fullname}</td>
                              <td>{value.companyName}</td>
                              <td>{value.address}</td>
                              <td>
                                <a className="btn btn-danger m-1">
                                  <FontAwesomeIcon icon={faTrashAlt} />
                                </a>
                                <a className="btn btn-secondary">
                                  <FontAwesomeIcon icon={faPencil} />
                                </a>
                              </td>
                            </tr>
                          </>;
                        })} */}
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="partner" title="Partner Request">
                  <div className="d-flex justify-content-between align-items-center pb-4">
                    <h4>Membership Request</h4>
                    {/* <button className="btn btn-primary">
                  Add New Driver <FontAwesomeIcon icon={faPlus} className="ps-3" />
                </button> */}
                  </div>

                  <div className="tb_reponsive">
                    <table className="table  table-light">
                      <thead className="table-dark">
                        <tr>
                          <th>No</th>
                          <th>Partner Name</th>
                          <th>Company Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {partnerRequest.map((value, index) => (
                          <>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{value.fullname}</td>
                              <td>{value.companyName}</td>

                              <td>
                                <a className="btn btn-secondary rounded m-1">
                                  Details <FontAwesomeIcon icon={faEye} className="ps-3" />
                                </a>
                                <button className="btn btn-success rounded m-1" onClick={() => handleApprovePartner(value.userId)}>
                                  Approve Partnership <FontAwesomeIcon icon={faCheck} className="ps-3" />
                                </button>
                              </td>
                            </tr>
                          </>
                        ))} */}
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

export default ManageVolunteer;
