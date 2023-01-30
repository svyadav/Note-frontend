import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //     const userInfo=localStorage.getItem("userInfo")
  //     if (userInfo) {
  //       history.push("/mynotes");
  //     }
  //   }, [history]);
  return (
    <>
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome to Note App</h1>
                <p className="subtitle">Save all your notes here</p>
              </div>
              <div className="buttonContainer">
                <Button
                  size="lg"
                  variant="dark"
                  className="landingbutton"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>

                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-dark"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default LandingPage;
