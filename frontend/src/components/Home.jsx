import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <header
      id="home"
      className="home bg-dark text-white text-center"
      style={{ height: "100vh" }}
    >
      <div
        className="overlay d-flex align-items-center"
        style={{ height: "100%", background: "rgba(0,0,0,0.5)" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold">Welcome to Excel Analytics</h1>
              <p className="lead">
                Effortlessly upload, view, and analyze your Excel files online. <br />
                Our platform offers instant statistics, chart visualizations, and
                secure file management <br />
                for all your spreadsheet needs. A detective or investigator for
                spreadsheets.
              </p>
              <Button
                href="#services"
                variant="warning"
                size="lg"
                style={{ color: "white" }}
              >
                More About us!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Home;
