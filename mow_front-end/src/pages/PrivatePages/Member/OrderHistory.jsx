import { useContext, useEffect, useState } from "react";
import { Testimonial, food } from "../../../assets/images/Images";
import { Link } from "react-router-dom";
import { getAllActiveMeals, getAllMemberOrder, getAllOrder, requestMeals } from "../../../api/member";
import { AuthContext } from "../../../context/auth-context";
import { Badge, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronCircleLeft, faPencil, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";

const OrderHistory = () => {
  const userCtx = useContext(AuthContext);
  const [listOrder, setListOrder] = useState(null);

  useEffect(() => {
    getAllMemberOrder(userCtx.token).then((response) => {
      setListOrder(response.data);
    });
  }, []);

  if (!listOrder) return null;

  return (
    <>
      <div class="container p-0">
        <div className="box-content rounded shadow">
          <h4 className="widget-title text-success fw-bold">
            <span>Order History</span>
          </h4>
          <div className="row overflow-auto flex-nowrap">
            <div className="col-md-12 col-sm-6">
              <div className="tb_reponsive">
                <table className="table  table-light">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Meals Name</th>
                      <th>Created at</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {listOrder.map((value, index) => (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{value.meals.mealsName}</td>
                            <td>{value.datetime.slice(0, 10)}</td>
                            <td>
                              <Badge bg="warning" text="dark">
                                {value.status}
                              </Badge>
                            </td>
                          </tr>
                        </>
                      ))}
                    </>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
