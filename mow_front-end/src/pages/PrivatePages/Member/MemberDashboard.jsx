import { useContext, useEffect, useState } from "react";
import { foto } from "../../../assets/images/Images";
import { Link } from "react-router-dom";
import { getAllActiveMeals } from "../../../api/member";
import { AuthContext } from "../../../context/auth-context";
import { Card } from "react-bootstrap";
const MemberDashboard = () => {
  const userCtx = useContext(AuthContext);

  const [listActiveMeals, setListActiveMeals] = useState(null);

  useEffect(() => {
    getAllActiveMeals(userCtx.token).then((response) => {
      setListActiveMeals(response.data);
    });
  }, []);

  if (!listActiveMeals) return null;

  return (
    <>
      {/* page header */}
      <div className="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">DAILY MEALS</h2>
            </div>                    
            <div class="col-md-6 col-sm-6 back-home">
              <Link to="/member">
                <a className="btn primary-btn" style={{ marginRight: "10px" }}>
                  View daily meals
                </a>{" "}
              </Link>
              <Link to="/feedback">
                {" "}
                <a className="btn primary-btn">Feedback</a>
              </Link>
            </div>
          </div>
        </div>
        {/* end page header */}
      </div>

      <div class="container">
        <div className="event-content">
          <div className="event-single">
            <div className="event-image text-center">
              {/* <img src={Member.membereat} alt="" class="centered-img" /> */}

              <div className="row g-3 ">
                {listActiveMeals.map((value) => (
                  <>
                    <div class="col-md-4 col-sm-6 ">
                      <div>
                        <Card style={{ width: "100%" }} className="rounded">
                          <Card.Img variant="top" src={foto.mealsIcon} className="img-card" />
                          <Card.Body className="text-start px-4">
                            <Card.Title className="fw-bold">{value.mealsName}</Card.Title>
                            <a href="detail-meals" className="btn btn-primary ">
                              Meals Details
                            </a>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default MemberDashboard;
