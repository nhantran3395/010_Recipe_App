import React from "react";

function Recipe(props) {
  const recipe = props.recipe.recipe;
  return (
    <div className="recipe-wrapper">
      <h3 className="recipe-label">{recipe.label}</h3>
      <a href={recipe.url} target="_blank">
        <img className="recipe-img" src={recipe.image} alt={recipe.label} />
      </a>
      <ul className="recipe-diet-label">
        {recipe.dietLabels.map((label) => {
          return <li>{label}</li>;
        })}
      </ul>
      <h4 className="recipe-calories">{`${Math.round(
        recipe.calories
      )} kcal`}</h4>
      <h4>{`By ${recipe.source}`}</h4>
    </div>
  );
}

export default Recipe;
