import React, { useState, useContext } from "react";
import { RecipeContext } from "./RecipeContext";
import Recipe from "./Recipe";
import { CircularProgress } from "@material-ui/core";

function RecipeList() {
  const [recipes, setRecipes] = useContext(RecipeContext);

  if (recipes <= 1) return <CircularProgress color="primary" size="6rem" />;
  else {
    return (
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe.label} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
