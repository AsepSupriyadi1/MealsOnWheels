import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/UtilComponent/Header";
import Footer from "../../components/UtilComponent/Footer";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 float-none mx-auto bg-danger">
            <h1>HelloWorlds</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
