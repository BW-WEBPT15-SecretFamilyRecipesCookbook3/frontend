import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Login() {
  const [signIn, setSignIn] = useState("");
  return (
    <div className="App">
        {console.log(signIn)}
        <Form>
        <label><h1> Account Login</h1></label> 
      <Row form>
        <Col md={7}>
          <FormGroup>
            <Label for="Email" sm={10} size="lg">Email Address (Username)</Label>
            <Input type="email" name="email" id="EmailUsername" placeholder="Email Address" />
          </FormGroup>
        <FormGroup>
            <Label for="Password" sm={10} size="lg">Enter Password</Label>
            <Input type="password" name="password" id="Password" placeholder="Enter Password" />
          </FormGroup>
        </Col>
      </Row>

          <Button size="lg" >Submit</Button> <Button size="lg">Reset</Button>
        </Form>

      </div>
    );
  }
  
  export default Login;