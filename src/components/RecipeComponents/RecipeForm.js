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
    source: "",
    ingredients: [],
    directions: []
  };

  handleChanges = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  addIngredient = e => {
    e.preventDefault();
    this.setState(state => {
      const ingredients = [...state.ingredients, state.ingredientValue];
      return {
        ingredients,
        ingredientValue: ""
      };
    });
  };
  addDirection = e => {
    e.preventDefault();
    this.setState(state => {
      const directions = [...state.directions, state.directionValue];
      return {
        directions,
        directionValue: ""
      };
    });
  };

  deleteIngredient = (e, index) => {
    e.preventDefault();
    const newIngredients = [...this.state.ingredients];
    newIngredients.splice(index, 1);
    this.setState({
      ingredients: newIngredients
    });
  };
  deleteDirection = (e, index) => {
    e.preventDefault();
    const newDirections = [...this.state.directions];
    newDirections.splice(index, 1);
    this.setState({
      directions: newDirections
    });
  };

  submitRecipe = e => {
    e.preventDefault();
    const newRecipe = {
      title: this.state.title,
      description: this.state.description,
      source: this.state.source,
      ingredients: this.state.ingredients,
      instructions: this.state.directions
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
                  placeholder="Ingredient"
                  type="text"
                  name="ingredientValue"
                  onChange={this.handleChanges}
                  value={this.state.ingredientValue}
                />
                <button onClick={this.addIngredient}>Add Ingredient</button>
                {this.state.ingredients.map((ingredient, index) => (
                  <div className="ingredient">
                    <ShowArrayItem
                      listNum={index + 1}
                      item={ingredient}
                      key={index}
                    />
                    <button onClick={e => this.deleteIngredient(e, index)}>
                      Delete Ingredient
                    </button>
                  </div>
                ))}
                <div className="directions-wrapper">
                  <h3>Directions</h3>
                  <input
                    type="text"
                    name="directionValue"
                    onChange={this.handleChanges}
                    value={this.state.directionValue}
                    placeholder="Direction"
                  />
                  <button onClick={this.addDirection}>Plus</button>
                  {this.state.directions.map((direction, index) => (
                    <div className="direction">
                      <ShowArrayItem
                        listNum={index + 1}
                        item={direction}
                        key={index}
                      />
                      <button onClick={e => this.deleteDirection(e, index)}>
                        Delete Direction
                      </button>
                    </div>
                  ))}
                </div>
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
