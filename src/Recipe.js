import React from "react";
import "./Recipe.css";

function Recipe(props) {
  const recipe = props.recipe.recipe;
  return (
    <div className="recipe-wrapper">
      <h3 className="recipe-label">{recipe.label}</h3>
      <img className="recipe-img" src={recipe.image} alt={recipe.label} />
      <ul className="recipe-diet-label">
        {recipe.dietLabels.map((label) => {
          return <li>{label}</li>;
        })}
      </ul>
      <h4 className="recipe-calories">{Math.round(recipe.calories)}</h4>
      <ul className="recipe-ingredients">
        {recipe.ingredientLines.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
}

export default Recipe;
