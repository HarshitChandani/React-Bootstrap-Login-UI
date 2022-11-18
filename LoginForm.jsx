import { Row, Col, Form, Button } from "react-bootstrap";
import React from "react";

const LoginForm = (props) => {
  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ margin: "0 auto", alignItems: "center" }}
    >
      <h3>Login</h3>
      <Row className="my-2 w-50">
        <Form.Group>
          <Form.Label className="Form-Lables"> Username </Form.Label>
          <Form.Control type="text" className="Form-Fields" required />
        </Form.Group>
      </Row>
      <Row className="my-2 w-50">
        <Form.Group>
          <Form.Label className="Form-Lables"> Password </Form.Label>
          <Form.Control type="password" className="Form-Fields" required />
        </Form.Group>
      </Row>
      <hr className="w-50 my-3" />
      <Button variant="outline-dark w-25">Login</Button>
    </div>
  );
};

export default LoginForm;
