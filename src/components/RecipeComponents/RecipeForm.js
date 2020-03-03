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
  Label,
  Input,
  Button
  // FormText
} from "reactstrap";

class RecipeForm extends React.Component {
  state = {
    title: "",
    description: "",
    tags: [],
    tag: "",
    commonTags: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Dessert",
      "Side",
      "Main",
      "Appetizer",
      "Vegetable",
      "Chicken",
      "Pork",
      "Beef",
      "Quick"
    ]
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

  addTagByButton = (e, tag) => {
    e.preventDefault();
    this.setState(state => {
      const tags = [...state.tags, tag.toString()];
      const commonTags = state.commonTags.filter(el => el !== tag);
      return {
        tags,
        commonTags
      };
    });
  };
  addCustomTag = e => {
    e.preventDefault();
    const newTags = [...this.state.tags];
    newTags.push(this.state.tag);
    this.setState({
      tags: newTags,
      tag: ""
    });
  };

  deleteTag = (e, index) => {
    e.preventDefault();
    const newTags = [...this.state.tags];
    newTags.splice(index, 1);
    this.setState({
      tags: newTags
    });
  };

  submitRecipe = e => {
    e.preventDefault();
    const newRecipe = {
      title: this.state.title,
      description: this.state.description,
      source: this.state.source,
      tags: this.state.tags
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
            <Col md={9}>
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

          <div className="tags-wrapper">
            <h3>Tags</h3>
            <div className="tags">
              {this.state.commonTags.map((tag, index) => {
                return (
                  <button
                    key={index}
                    onClick={e => this.addTagByButton(e, tag)}
                  >
                    {tag}
                  </button>
                );
              })}
              <input
                type="text"
                name="tag"
                onChange={this.handleChanges}
                value={this.state.tag}
              />
              <button onClick={this.addCustomTag}>Add Custom Tag</button>
              {this.state.tags.map((tag, index) => (
                <div className="tag">
                  <p>{tag}</p>
                  <button onClick={e => this.deleteTag(e, index)}>
                    Delete Tag
                  </button>
                </div>
              ))}
            </div>
          </div>
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
