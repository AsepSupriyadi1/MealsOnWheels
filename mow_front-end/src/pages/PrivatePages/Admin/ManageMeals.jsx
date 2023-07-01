import { faCheck, faCircle, faDotCircle, faEye, faPencil, faPiggyBank, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, ListGroup, Tab, Tabs } from "react-bootstrap";
import DoughnutChart from "../../../components/ChartComponent/DougnutChart";
import { dummyData } from "../../../components/ChartComponent/DummyData";
import { useState } from "react";

const ManageMeals = () => {
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

  return (
    <>
      <div className="container">
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Manage all Meals Menu</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="index.html">&larr; Go back Home</a>
            </div>
          </div>
        </div>
        {/* -=-=-=-=-= PAGE HEADER START -=-=-=-=-= */}

        <div className="row">
          <div className="col-md-8">
            <div className="box-content">
              <div className="d-flex justify-content-between align-items-center pb-4">
                <h4>All Meals</h4>
                <button className="btn btn-primary">
                  Add New Menu <FontAwesomeIcon icon={faPlus} className="ps-3" />
                </button>
              </div>

              <div className="tb_reponsive">
                <table className="table  table-light">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Meals Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Tumis Tumila</td>
                      <td>ABC Pentil</td>
                      <td>
                        <a className="btn btn-danger m-1">
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </a>
                        <a className="btn btn-secondary">
                          <FontAwesomeIcon icon={faPencil} />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Tumis Tityd</td>
                      <td>ABC Pentil</td>
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
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="box-content text-center">
              <h4 className="mb-4">Meals Chart</h4>
              <DoughnutChart mealsData={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMeals;
