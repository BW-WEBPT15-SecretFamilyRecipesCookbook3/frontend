import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/addRecipeAction";
import ShowArrayItem from "./ShowArrayItem";

// import {
//   Form,
//   Input
// } from "reactstrap";

class RecipeForm extends React.Component {
  state = {
    title: "",
    description: "",
    source: "",
    ingredients: [{
      ingredient: "",
      unit: "",
      quantity: 0
    }],
    directions: [{
      step_number: 0,
      instructions: ""
    }],
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
  // addIngredient = e => {
  //   e.preventDefault();
  //   this.setState(state => {
  //     const ingredients = [...state.ingredients, state.ingredients.ingredient, state.ingredients.unit, state.ingredients.quantity];
  //     return {
  //       ingredients: {
  //         ingredient: "",
  //         unit: "",
  //         quantity: 0
  //       }
  //     };
  //   });
  // };
  // addDirection = e => {
  //   e.preventDefault();
  //   this.setState(state => {
  //     const directions = [...state.directions, state.directionValue];
  //     return {
  //       directions,
  //       directionValue: ""
  //     };
  //   });
  // };

  // deleteIngredient = (e, index) => {
  //   e.preventDefault();
  //   const newIngredients = [...this.state.ingredients];
  //   newIngredients.splice(index, 1);
  //   this.setState({
  //     ingredients: newIngredients
  //   });
  // };
  // deleteDirection = (e, index) => {
  //   e.preventDefault();
  //   const newDirections = [...this.state.directions];
  //   newDirections.splice(index, 1);
  //   this.setState({
  //     directions: newDirections
  //   });
  // };

  submitRecipe = e => {
    e.preventDefault();
    const newRecipe = {
      title: this.state.title,
      description: this.state.description,
      source: this.state.source,
      ingredients: {
        ingredient: this.state.ingredient,
        unit: this.state.unit,
        quantity: Number(this.state.quantity)
      },
      directions: {
        step_number: Number(this.state.step_number),
        instructions: this.state.instructions
      }
      
      
    };
    console.log("submit recipe history", this.props.history);
    this.props.addRecipe(newRecipe, this.props.history);
  };

  render() {
    return (
      <div className="recipe-form">
        <form onSubmit={this.submitRecipe}>
          <h2>Create New Recipe</h2>
          {/*<div className="recipe-name">
            <input
              placeholder="Title"
              type="text"
              required
              name="title"
              onChange={this.handleChanges}
              value={this.state.title}
            />
          </div>
          <div className="recipe-source">
            <input
              placeholder="Source"
              type="text"
              name="source"
              onChange={this.handleChanges}
              value={this.state.source}
            />
    </div> */}

                <input
                  placeholder="Title"
                  type="text"
                  required
                  name="title"
                  onChange={this.handleChanges}
                  value={this.state.title}
                />
                <input
                  placeholder="Description"
                  type="text"
                  required
                  name="description"
                  onChange={this.handleChanges}
                  value={this.state.description}
                />
                <input
                  placeholder="Source"
                  type="text"
                  name="source"
                  onChange={this.handleChanges}
                  value={this.state.source}
                />
                <input
                  placeholder="Ingredient"
                  type="text"
                  name="ingredient"
                  onChange={this.handleChanges}
                  value={this.state.ingredients.ingredient}
                />
                <input
                  placeholder="Unit"
                  type="text"
                  name="unit"
                  onChange={this.handleChanges}
                  value={this.state.ingredients.unit}
                />
                <input
                  placeholder="Quantity"
                  type="text"
                  name="quantity"
                  onChange={this.handleChanges}
                  value={ this.state.ingredients.quantity }
                />
                <input
                  placeholder="Step Number"
                  type="text"
                  name="step_number"
                  onChange={this.handleChanges}
                  value={ this.state.directions.step_number }
                />
                <input
                  placeholder="instructions"
                  type="text"
                  name="instructions"
                  onChange={this.handleChanges}
                  value={this.state.directions.instructions}
                />
                {/* <button onClick={this.addIngredient}>Add Ingredient</button>
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
                   <Input
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
                   /> */}
              
            
          <div className="submit-recipe">
            <button type="submit"> Add Recipe</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingRecipe: state.addingRecipe
});

export default withRouter(connect(mapStateToProps, { addRecipe })(RecipeForm));
