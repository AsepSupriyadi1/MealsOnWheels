import { faCheck, faCircle, faDotCircle, faEye, faPencil, faPiggyBank, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Button, Form, ListGroup, Modal, Tab, Tabs } from "react-bootstrap";
import DoughnutChart from "../../../components/ChartComponent/DougnutChart";
import { dummyData } from "../../../components/ChartComponent/DummyData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth-context";
import { addMealsAPI, getAllActivePartners, getAllMealsAPI } from "../../../api/admin";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { anjay } from "../../../assets/images/Images";

const ManageMeals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const userCtx = useContext(AuthContext);
  const [listMeals, setListMeals] = useState(null);
  const navigate = useNavigate();

  const [mealsName, setMealsName] = useState(null);
  const [partner, setPartner] = useState(null);
  const [stock, setStock] = useState(null);
  const [picture, setPicture] = useState(null);
  const [listPartner, setListPartner] = useState(null);

  const formData = new FormData();

  const handleMealsForm = (event) => {
    event.preventDefault();
    formData.append("mealsName", mealsName);
    formData.append("stock", parseInt(stock));
    formData.append("picture", picture);

    addMealsAPI(formData, userCtx.token)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success",
          text: "Meals added successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [data, setData] = useState({
    labels: dummyData.map((data) => data.mealsName),
    datasets: [
      {
        label: "Love",
        data: dummyData.map((data) => data.mealsGained),
        backgroundColor: ["#73A6DF", "#CD5E5E", "#E28F4C"],
      },
    ],
  });

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    getAllMealsAPI(userCtx.token).then((response) => {
      setListMeals(response.data);
    });
  }, []);

  if (!listMeals) return null;

  return (
    <>
      <div className="container">
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title d-none d-lg-block">Manage all Meals Menu</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}

        <div className="row">
          <div className="col-md-12">
            <div className="box-content">
              <div className="d-flex justify-content-between align-items-center pb-4">
                <h4>All Meals</h4>
                <button className="btn btn-primary" onClick={handleShow}>
                  Add New Menu <FontAwesomeIcon icon={faPlus} className="ps-3" />
                </button>
              </div>

              <div className="tb_reponsive">
                <table className="table  table-light">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Meals Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listMeals !== null &&
                      listMeals.map((value, index) => (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{value.mealsName}</td>

                            <td>
                              <div className="d-md-flex align-items-center">
                                <a className="btn btn-danger m-1">
                                  <FontAwesomeIcon icon={faTrashAlt} />
                                </a>
                                <a className="btn btn-secondary">
                                  <FontAwesomeIcon icon={faPencil} />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="box-content text-center">
              <h4 className="mb-4">Meals Chart</h4>
              <DoughnutChart mealsData={data} />
            </div>
          </div> */}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new meals</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleMealsForm}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Meals Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Meals Package Name ..." name="mealsName" value={mealsName} onChange={(e) => setMealsName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" placeholder="Enter Meals Stock ..." name="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="file">
              <Form.Label>Meals Photo</Form.Label>
              <Form.Control type="file" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ManageMeals;
