import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { ImgModal } from "../../assets/images/Images";

const LoginModals = (props) => {
  return (
    <>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container className="text-center">
            <img src={ImgModal.sorry} alt="icon" style={{ height: "auto", width: "50%" }} />
            <h1>Sorry..</h1>
            <p>Your account still awaiting for admin approval.</p>
            <a href="/contact">
              <u>Contact us for any queries</u>
            </a>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container className="text-center">
            <Button variant="warning" onClick={props.onHide}>
              Try Again
            </Button>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModals;
