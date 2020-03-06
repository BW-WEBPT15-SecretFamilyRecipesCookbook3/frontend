import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getTitles } from '../../actions/fetchTitleAction';

function RecipeCardDisplay(props) {

  const [state, setState] = useState([]);
  //this.props.getTitles(recipeID, this.props.history);
  useEffect(() => {
    
  }) 

console.log(props);
  return (
    <>
      <h1>Hello From Recipes</h1>
    </>
  );
}

const mapStateToProps = state => ({
  fetchingRecipe: state.fetchingRecipe
});

export default withRouter(connect(mapStateToProps, { getTitles })(RecipeCardDisplay));
