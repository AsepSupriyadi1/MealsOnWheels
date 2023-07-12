import { faHamburger, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DashHeader } from "../../../assets/images/Images";
import { Badge, ListGroup } from "react-bootstrap";
import { AuthContext } from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import { countMealsAPI, countPartnerTaskAPI, getAllMealsAPI, getAllPartnerTaskAPI, updateMealsStatusAPI } from "../../../api/partner";
import Swal from "sweetalert2";

const PartnerDashboard = () => {
  const userCtx = useContext(AuthContext);
  const [countPartnerTask, setCountPartnerTask] = useState(0);
  const [countMeals, setCountMeals] = useState(0);
  const [listMeals, setListMeals] = useState(null);
  const [listPartnerTask, setListPartnerTask] = useState(null);

  useEffect(() => {
    countPartnerTaskAPI(userCtx.token).then((response) => {
      setCountPartnerTask(response.data);
    });
    countMealsAPI(userCtx.token).then((response) => {
      setCountMeals(response.data);
    });
    getAllMealsAPI(userCtx.token).then((response) => {
      setListMeals(response.data);
    });
    getAllPartnerTaskAPI(userCtx.token).then((response) => {
      setListPartnerTask(response.data);
    });
  }, []);

  const handleUpdateStatus = (id, status) => {
    updateMealsStatusAPI(userCtx.token, id, status).then(() => {
      Swal.fire("Success !", "Meals Request Status Updated.", "success");
      getAllPartnerTaskAPI(userCtx.token).then((response) => {
        setListPartnerTask(response.data);
      });
    });
  };

  if (!countPartnerTask) return null;
  if (!countMeals) return null;
  if (!listMeals) return null;
  if (!listPartnerTask) return null;

  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-md-12">
            <div class="box-content rounded shadow">
              <div className="row head_container">
                <div class="col-md-4 col-sm-12">
                  <div className="head_desc text-md-start text-center">
                    <h4 className="m-0">Partner's Dashboard</h4>
                    <p>Meals on Wheels Kitchen</p>
                    <button className="btn btn-warning">Read Your Role !</button>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="head_status_card rounded-sm m-2">
                        <div>
                          <h2>{countPartnerTask}</h2>
                          <h5>Uncompleted Task</h5>
                        </div>
                        <FontAwesomeIcon className="head_status_icon" icon={faUsers} />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="head_status_card rounded-sm m-2">
                        <div>
                          <h2>{countMeals}</h2>
                          <h5>Meals</h5>
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
          <div className="col-md-9">
            <div className="box-content rounded shadow">
              <h4 class="widget-title">
                <span>all meal requests</span>
              </h4>
              <div className="tb_reponsive">
                <table className="table table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Member Name</th>
                      <th>Member Age</th>
                      <th>Menu</th>
                      <th>Meals Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(listPartnerTask)}
                    {listPartnerTask &&
                      listPartnerTask.map((value, index) => (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{value.member.userDetails.fullname}</td>
                            <td>{value.member.age}</td>
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
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="box-content rounded shadow">
              <h4 class="widget-title">
                <span>all meals</span>
              </h4>

              <div className="meals_menu_container">
                <ListGroup>
                  {listMeals &&
                    listMeals.map((value, index) => (
                      <>
                        <ListGroup.Item>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0">{value.mealsName}</p>
                            {/* <button className="btn btn-light border">Details Menu</button> */}
                          </div>
                        </ListGroup.Item>
                      </>
                    ))}
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerDashboard;
