import React from 'react';
import { connect } from "react-redux";
import { deleteRecipe } from '../../actions/deleteRecipeAction';

const RecipeCard = (props) => {

    const handleDelete = (recipeID) => {
        props.deleteRecipe(props.match.params.id, recipeID);
    };

    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <small>{props.source}</small>
            <div onClick={handleDelete}>Delete</div>
        </div>
    )
}

const mapStateToProps = state => ({
    deletingRecipe: state.deletingRecipe,
    success: state.success
  });

export default connect(mapStateToProps, {deleteRecipe})(RecipeCard);