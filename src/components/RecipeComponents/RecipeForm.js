import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/addRecipeAction";
import ShowArrayItem from "./ShowArrayItem";

import {
  Col,
  Row,
  // Button,
  Form,
  FormGroup,
  Input,
  Button
  // FormText
} from "reactstrap";

class RecipeForm extends React.Component {
  state = {
    title: "",
    description: "",
    source: ""
  };

  handleChanges = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  submitRecipe = e => {
    e.preventDefault();
    const newRecipe = {
      title: this.state.title,
      description: this.state.description,
      source: this.state.source
    };
    console.log("submit recipe history", this.props.history);
    this.props.addRecipe(newRecipe, this.props.history);
  };

  render() {
    return (
      <div className="recipe-form">
        <Form onSubmit={this.submitRecipe}>
          <h2>Create New Recipe</h2>
          <Row form>
            <Col md={15}>
              <FormGroup className="create-recipe">
                {/* <Label 
              for="Create-New-Recipe"
              size="lg">Create New Recipe
              </Label> */}

                <Input
                  placeholder="Title"
                  type="text"
                  required
                  name="title"
                  onChange={this.handleChanges}
                  value={this.state.title}
                />
                <Input
                  placeholder="Source"
                  type="text"
                  name="source"
                  onChange={this.handleChanges}
                  value={this.state.source}
                />
                <Input
                  placeholder="Description"
                  type="text"
                  name="description"
                  onChange={this.handleChanges}
                  value={this.state.description}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button type="submit"> Add Recipe</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingRecipe: state.addingRecipe
});

export default withRouter(connect(mapStateToProps, { addRecipe })(RecipeForm));
