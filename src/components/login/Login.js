import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../actions/logInAction";
import { withRouter } from "react-router";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends React.Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  logIn = e => {
    e.preventDefault();
    this.props.logIn(this.state.credentials, this.props.history);
    this.setState({
      credentials: {
        email: "",
        password: ""
      }
    });
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="login-page-wrapper">
        <div className="login-form-wrapper">
          {this.props.loggingIn ? (
            <h2>Loading</h2>
          ) : (
            <>
              <Form className="login-form" onSubmit={this.logIn}>
                <div className="login-form-header">
                  <div className="login-logo-wrapper"></div>
                  <h3>Log in to</h3>
                  <h2> Secret Cookbook</h2>
                </div>
                <Row>
                  <Col md={20}>
                    <FormGroup className="login-credentials">
                      <p>Username(Email)</p>
                      <Input
                        type="email"
                        required
                        name="email"
                        placeholder="Email Address"
                        onChange={this.handleChanges}
                        value={this.input}
                      />
                      <p>Password</p> 
                      <Input
                        type="password"
                        required
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChanges}
                        value={this.input}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <button className="login-btn" type="submit">
                  Log In
                </button>
                <p className="login-small-font">
                  Not a member? Sign up{" "}
                  <Link className="login-link" to="/register">
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
  loggingIn: state.loggingIn,
  success: state.success
});
export default withRouter(connect(mapStateToProps, { logIn })(Login));
