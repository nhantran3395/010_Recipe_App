import React, { useState, useContext, useEffect } from "react";
import { RecipeContext } from "./RecipeContext";
import { Select, MenuItem } from "@material-ui/core";

function SearchBar() {
  const apiKey = "8a37f7216dmsh504d9ee1a9bf834p18e310jsn01b6a092ebfb";
  const apiHost = "edamam-recipe-search.p.rapidapi.com";
  const recipeUrl = "https://edamam-recipe-search.p.rapidapi.com/search";

  const [recipeInput, setrecipeInput] = useState(() => "");
  const [queryTerm, setQueryTerm] = useState(() => "egg benedict");
  const [recipes, setRecipes] = useContext(RecipeContext);

  const getRecipe = async () => {
    try {
      const response = await fetch(`${recipeUrl}?q=${queryTerm}&to=12`, {
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

  const updaterecipeInput = (event) => {
    setrecipeInput(event.target.value);
  };

  const updateQueryTerm = (event) => {
    event.preventDefault();
    setQueryTerm(`${recipeInput}`);
  };

  useEffect(() => {
    setRecipes([]);
    getRecipe().then((recipes) => {
      console.log(recipes);
      setRecipes(recipes.hits);
    });
  }, [queryTerm]);

  return (
    <form className="search-bar" onSubmit={updateQueryTerm}>
      <div className="search-bar-input-wrapper">
        <input
          placeholder="Egg Benedict"
          type="text"
          onChange={updaterecipeInput}
        ></input>
        <button>Ingredient</button>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
