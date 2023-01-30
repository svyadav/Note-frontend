
import {useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import "./LoginScreen.css";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const navigate=useNavigate()
const dispatch=useDispatch()

const userLogin = useSelector((state) => state.userLogin);
const { loading, error, userInfo } = userLogin;

useEffect(() => {
  if (userInfo) {
    // history.push("/mynotes");
    navigate("/mynotes")
  }
 
}, [userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
   
    console.log(userInfo)

    // try {
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };

    //   setLoading(true);

    //   const { data } = await axios.post(
    //     "http://localhost:5000/api/users/login",
    //     {
    //       email,
    //       password,
    //     },
    //     config
    //   );
    //   console.log(data)
    //   localStorage.setItem("userInfo",JSON.stringify(data));
    //   setLoading(false);
    //   navigate("/mynotes")
    // } catch(error) {
    //   setError(error.response.data.message);
    //   setLoading(false);
    // }
  };

  return (
    <>
    <div className="login">
     
      <MainScreen>
        <div className="loginContainer">
        <h1>Login</h1>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />} 
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div style={{marginTop:"10px"}}>
            <Button variant="dark" type="submit">
              Submit
            </Button>

            </div>

            
          </Form>
          <Row className="py-3">
            <Col>
              New Customer ? <Link to="/register">Register Here</Link>
            </Col>
          </Row>
        </div>
      </MainScreen>
      </div>
      
    </>
  );
};
export default LoginScreen;
