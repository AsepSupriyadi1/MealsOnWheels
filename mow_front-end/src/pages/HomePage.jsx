import { Container } from "react-bootstrap";
import Header from "../components/UtilComponent/Header";
import Footer from "../components/UtilComponent/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>HelloWorld</h1>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
