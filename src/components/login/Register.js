import React from "react";
import { Link, withRouter } from "react-router-dom";

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

import { connect } from "react-redux";
import { signUp } from "../../actions/signUpAction";


class SignUpForm extends React.Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    passwordMatch: true
  };

  handleChanges = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUp = e => {
    e.preventDefault();
    if (this.state.password1 === this.state.password2) {
      const newUser = {
        email: this.state.email,
        password: this.state.password1
      };
      this.props.signUp(newUser, this.props.history);
      this.setState({
        email: "",
        password: "",
        password2: ""
      });
    } else {
      this.setState({ ...this.state, passwordMatch: false });
    }
  };

  render() {
    return (
      <div className="signup-page-wrapper">
        <div className="signup-form-wrapper">
          {this.props.signingUp ? (
            <h2>Loading</h2>
          ) : (
            <>
              <Form className="signup-form" onSubmit={this.signUp}>
                <div className="signup-form-header">
                  <div className="signup-logo-wrapper"></div>
                  <h3>Welcome to</h3>
                  <h2>Secret Cookbook</h2>
                </div>
                <Row form>
                    <Col md={10}>
                      <FormGroup className="fullname">
                        <Label 
                          for="firstname" 
                          sm={10} 
                          size="lg">First Name
                        </Label>
                        <Input 
                        type="name" 
                        name="name" 
                        id="FirstName" 
                        placeholder="First Name" />
                        <Label 
                          for="lastname" 
                          sm={10} 
                          size="lg">Last Name
                        </Label>
                        <Input
                         type="name" 
                         name="name" 
                         id="LastName" 
                         placeholder="Last Name" />
                      </FormGroup>
                    </Col>
                  </Row>
                <Row form>
                <Col md={10}>
                <FormGroup className="credentials">
                <p>Username (Email Address)</p>
                <Input
                  type="email"
                  required
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChanges}
                  value={this.input}
                />                
               
                <p>Create password</p>
                <Input
                  type="password"
                  required
                  name="password1"
                  placeholder="Create Password"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                <p>Confirm password</p>
                <Input
                  type="password"
                  required
                  name="password2"
                  placeholder="Confirm Password"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                {!this.state.passwordMatch ? (
                  <p>Oops! Your passwords don't match</p>
                ) : (
                  ""
                )} 
                </FormGroup>
                </Col>
                </Row>
                <FormText color="muted">
            <Label for="PasswordRequirements" sm={10} size="lg">*Passwords are case sensitive 
           <p>Password recomendations:</p> 
           <p>Include a mix of uppercase and lowercase letters and a number</p> 
            </Label>
            </FormText>


                <br />
                <Button className="signup-btn" type="submit">
                  Sign Up
                </Button>
                <p className="signup-small-font">
                  Already a member? Sign in{" "}
                  <Link to="/login" className="signup-link">
                    here
                  </Link>
                </p>
              </Form>
            </>
          )}

        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  signingUp: state.signingUp
});
export default withRouter(connect(mapStateToProps, { signUp })(SignUpForm));
