import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";
import Recipe from "./Recipe";

function RecipeList() {
  const [recipes, setRecipes] = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.recipe.label} />
      ))}
    </div>
  );
}

export default RecipeList;
