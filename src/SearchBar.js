import React, { useState, useContext, useEffect } from "react";
import { RecipeContext } from "./RecipeContext";

function SearchBar() {
  const apiKey = "8a37f7216dmsh504d9ee1a9bf834p18e310jsn01b6a092ebfb";
  const apiHost = "edamam-recipe-search.p.rapidapi.com";
  const recipeUrl = "https://edamam-recipe-search.p.rapidapi.com/search";

  const [foodInput, setFoodInput] = useState(() => "");
  const [queryTerm, setQueryTerm] = useState(() => "chicken");
  const [recipes, setRecipes] = useContext(RecipeContext);

  const getRecipe = async () => {
    try {
      const response = await fetch(`${recipeUrl}?q=${queryTerm}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": apiHost,
          "x-rapidapi-key": apiKey,
        },
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const updateFoodInput = (event) => {
    setFoodInput(event.target.value);
  };

  const updateQueryTerm = (event) => {
    event.preventDefault();
    setQueryTerm(foodInput);
  };

  useEffect(() => {
    getRecipe().then((recipes) => {
      setRecipes(recipes.hits);
    });
  }, [queryTerm]);

  return (
    <div>
      <h2>I am SearchBar</h2>
      <form onSubmit={updateQueryTerm}>
        <input
          placeholder="Food"
          type="text"
          onChange={updateFoodInput}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
