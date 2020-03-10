import React from 'react';

const RecipeCard = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <small>{props.source}</small>
        </div>
    )
}

export default RecipeCard;