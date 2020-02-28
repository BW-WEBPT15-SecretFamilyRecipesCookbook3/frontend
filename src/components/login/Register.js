import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import Buttons from "./components/login/Buttons.js";

function Register() {
  const [signUp, setSignUp] = useState("");
  return (
    <div className="App">
        {console.log(signUp)}
        <Form>
        <label><h1>Create Account</h1></label>

        <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="firstname" sm={10} size="lg">First Name</Label>
            <Input type="name" name="name" id="FirstName" placeholder="First Name" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="lastname" sm={10} size="lg">Last Name</Label>
            <Input type="name" name="name" id="LastName" placeholder="Last Name" />
          </FormGroup>
        </Col>
      </Row>
 
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="Email" sm={10} size="lg">Email Address (Username)</Label>
            <Input type="email" name="email" id="EmailUsername" placeholder="Email Address" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
             <Label for="Email" sm={10} size="lg">Confirm Email Address (Username)</Label>
            <Input type="email" name="email" id="EmailUsername" placeholder="Confirm Email Address" />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="Password" sm={10} size="lg">Choose Password</Label>
            <Input type="password" name="password" id="Password" placeholder="Choose Password" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="Password" sm={10} size="lg">Confirm Password</Label>
            <Input type="password" name="password" id="Password" placeholder="Choose Password" />
          </FormGroup>
        </Col>
      </Row>
            <FormText color="muted">
            <Label for="PasswordRequirements" sm={10} size="lg">*Passwords are case sensitive *Passwords Requirements *Must be 8 or more characters
           <br></br>*Must include at least 1 number, 1 uppercase; and 1 lowercase letter, and a symbol
            </Label>
            </FormText>
    

      <Row form>
            <Col md={3}>
            <FormGroup check inline>
        <Label check>
          <Input type="checkbox"/> Family Organizer
        </Label>
      </FormGroup>
      </Col>
      </Row>
      <Row form>
      <Col md={3}>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox"/> Family Member
        </Label>
      </FormGroup>
      </Col>
      </Row>
      <Row form>
      <Col md={3}>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox"/> Child Account (13-17)
        </Label>
      </FormGroup>
      </Col>
      </Row>
      <Row form>
      <Col md={3}>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox"/> Child Account (Under 13)
        </Label>
      </FormGroup>
        </Col>
      </Row>
          
          <Button size="lg" >Submit</Button> <Button size="lg">Reset</Button>
        </Form>
        <Router>
        {/* <Route exact path ='/buttons' component={Buttons}/> */}
        </Router>
      </div>
    );
  }
  
  export default Register;